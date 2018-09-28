import React, {Component} from 'react';
import {
  Container, Grid, Image, Segment, Header, Divider, Button, Icon, Modal
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LoadingScreen from './SubComponents/LoadingScreen';
import ErrorScreen from './SubComponents/ErrorScreen';
import {areas} from './consts/Areas';
import {
  changeTab
} from '../actions/index';
import {
  primary_light,
  light_accent,
  primary_dark,
  accent_2
} from '../Common/ColorScheme';

const ReactMarkdown = require('react-markdown')
const axios = require('axios');


class ViewSingleProject extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props
    this.state={
      projectId: this.props.match.params.id,
      loading: true,
      project: null,
      error: false,
    }
    if(this.props.currentActiveMenuItem != 'projects') {
      dispatch(changeTab('portfolio'))
    }
  }
  componentDidMount() {
    axios.get(`/api/projects/${this.state.projectId}`)
      .then((response) => {
        this.setState({loading: false, project: response.data})
      })
      .catch((response) =>  {
        this.setState({loading: false, project: null, error: true})
      })
  }
  render() {
    console.log("State: ", this.state)
    if(this.state.loading){return(<LoadingScreen loadingMessage={"Loading project..."} />)}
    if(this.state.error || this.state.project == undefined ){return(<ErrorScreen message={"Could not load project"} error={true} />)}
    return(
      <Container fluid style={{padding: '5em 2em', backgroundColor: primary_light}}>
      <Grid>
<Grid.Column width={11}>
  <Segment color={"gray"} inverted style={{height: "105vh", borderRadius: '10px', padding: '2em', backgroundColor: '#f5f6f7', color: 'black'}}>
  <Header as='h1' style={{color: light_accent}} content={this.state.project.name} />
  <Divider/>
  <ReactMarkdown source={this.state.project.description} />
  </Segment>
  <a href="/projects">{'<< Projects'} </a>
</Grid.Column>
<Grid.Column width={5}>
<Grid.Row textAlign='justified'>
<Container fluid style={{minHeight: "30vh", borderRadius: '10px', padding: '2em', backgroundColor: '#f5f6f7', color: 'black'}}>
  <Header as='h2' content="Brief" style={{color: light_accent}}/>
  <Divider style={{color: "green" }}/>
  <p>{this.state.project.brief}</p>
  <Button onClick = {() => window.location.href = this.state.project.link} style={{backgroundColor: light_accent, color: '#FFF'}}>
    <Icon name='linkify' />
    Check it out!
  </Button>

</Container>
</Grid.Row>
<Grid.Row>
<Container fluid style={{minHeight: "30vh", borderRadius: '10px', padding: '2em', backgroundColor: '#f5f6f7', color: 'black', marginTop: '2vh'}}>
  <Header as='h2' content="Areas" style={{color: light_accent}}/>
  <Divider style={{color: "green" }}/>
  {this.state.project.area.map((area) => {
    let iconTextArea = this.getAreaText(area);
    return (
      <Header as='h4' style={{color: accent_2}}><Icon name={iconTextArea.icon}/> {iconTextArea.text}</Header>
    );
  })}
</Container>
</Grid.Row>
<Grid.Row>
<Container fluid style={{minHeight: "30vh", borderRadius: '10px', padding: '2em', backgroundColor: '#f5f6f7', color: 'black', marginTop: '2vh'}}>
  <Header as='h2' content="Image" style={{color: light_accent}}/>
  <Divider/>
  <Modal trigger={<Image size="medium" centered  src={this.state.project.image} />
  }>
  <Modal.Content image>
    <Image wrapped fluid src={this.state.project.image}/>
  </Modal.Content>
</Modal>
</Container>
</Grid.Row>
</Grid.Column>
</Grid>
      </Container>
    );
  }

  getAreaText(areaKey) {
    let area = areas.find((constArea) => {
        return areaKey.key === area;
    });
    return {icon: area.iconName, text: area.text}
  }

}

const mapStateToProps = (state) => ({
    currentActiveMenuItem: state.currentActiveMenuItem
});
const ViewProject = connect(mapStateToProps)(ViewSingleProject);

export default ViewProject;
