import React, { Component } from 'react';
import {
 Container, Grid, Button, Segment, Icon, Header, Form, Image, Message
} from 'semantic-ui-react';
import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';
import LoadingScreen from './LoadingScreen';
import {areas, projectStatus} from '../consts/ProjectConstants';
import {amazonConfig} from '../api/apiConfig';
const axios = require('axios');

export default class ProjectForm extends Component {
 constructor(props) {
   super(props);
   this.state = {
     headerMessage: this.props.headerMessage,
     projectId: this.props.projectId,
     uploadSuccess: false,
     showLoadingScreen: false,
     uploadStatusMessage: "",
     loadingMessage: [] ,
     isEditing : false,
     imageFile: null,
     uploadError: false,
     project: this.props.project ? this.props.project
     : {
     name: "",
     description:"",
     brief: "",
     status: "",
     link:  "",
     image: "",
     area:  [],
     date:  "",
     id: 0
   }
   };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadToBackend = this.uploadToBackend.bind(this);

    
 }

 handleChange(event) {
   let key = event.target.name;
   let value = event.target.value;
    this.setState(prevState => ({
    project: {
        ...prevState.project,
        [key]: value,
    }
}))
}

handleSubmit(event) {
  event.preventDefault();
}
updateArea = (event, data) => {
  this.setState(prevState => ({
  project: {
      ...prevState.project,
      ['area']: data.value
  }
}))
}
updateStatus = (event, data) => {
  this.setState(prevState => ({
  project: {
      ...prevState.project,
      ['status']: data.value
  }
}))
}

 showSuccessScreen = (bool) => this.setState({ showSuccessScreen: bool});
 render() {
   console.log("State: ", this.state)
    if(this.state.showLoadingScreen) {
         return(
           <LoadingScreen loadingMessage = {this.state.loadingMessage} />
         );
       } else {
         return (
           <Container text textAlign="center" style={{padding: '3em 0'}}>
           <Segment color={'blue'}>
           <Header as="h1" content={this.state.headerMessage}/>
           <Form error  success onSubmit={this.handleSubmit}>
           {this.state.uploadSuccess ?
             <Message success header='Success' content={this.state.uploadStatusMessage}/> : <p></p>
           }
           {this.state.uploadError ?
             <Message error header='Something went wrong' content={this.state.uploadStatusMessage}/> : <p></p>
           }
           <Form.Input required placeholder='Name'  label='Name' name='name' value={this.state.project.name} onChange={this.handleChange} />
           <Form.TextArea required placeholder='Brief'  label='Brief' name='brief' value={this.state.project.brief} onChange={this.handleChange} />
             <Form.TextArea  required type="text" label='Description' placeholder='Description' name='description' value={this.state.project.description} onChange={this.handleChange} />
             <Form.Dropdown required placeholder='Area' label='Area' fluid multiple selection options={areas} name='area' value={this.state.project.area} onChange={this.updateArea}/>
             <Form.Dropdown required placeholder='Status' label='Status' fluid  selection options={projectStatus} name='status' value={this.state.project.status} onChange={this.updateStatus}/>
             <Form.Input  required label='Link' placeholder='Link' name='link' value={this.state.project.link} onChange={this.handleChange}/>
             <Form.Input required  label='Image' placeholder='Image' type="file" onChange={(e) => this.setState({imageFile: e.target.files[0]})}/>
             <Form.Input  label='Date' placeholder='Date' name='date' value={this.state.project.date} onChange={this.handleChange}/>
             {this.state.isEditing ? // Render based on adding or editing
              <div>
              <Button type='submit' color="blue">Update </Button>
              <Button onClick ={this.deleteProject} color="red">Delete Project</Button>
              </div> :
              <Button type='submit' color="blue">Add Project</Button>
            }
              </Form>
           </Segment>
           </Container>
         );
       }
 }

 handleSubmit = () =>  {
   if(this.state.isEditing) {
     this.updateProject();
   } else {
     this.addProject();
   }
 }


addProject = () => {
  this.setState({showLoadingScreen: true, loadingMessage: "Uploading image to amazin bucket..."})
  S3FileUpload.uploadFile(this.state.imageFile, amazonConfig)
  .then((data) => {
    this.setState((prevState) => ({project: {...prevState.project, image: data.location}}))
    console.log("Added to amazon")
    this.uploadToBackend();
  })
  .catch((error) => {
    alert(error)
  })
}
uploadToBackend = () => {
  this.setState({showLoadingScreen: true, loadingMessage: "Uploading to backend."})
  return axios.post('/api/projects', this.state.project)
  .then((response) => {
    this.setState({uploadSuccess: true, showLoadingScreen: false, uploadStatusMessage: response})
  }
  ).catch((error) => {
    console.log("ERROR: " , error)
      this.setState({uploadError: true, showLoadingScreen: false, uploadStatusMessage: error.response.data})
    }
  );
}
}
