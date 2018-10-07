import React, {Component} from 'react';
import {
  Container,
  Grid,
  Image,
  Segment,
  Header,
  Divider,
  Button,
  Icon,
  Modal
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import LoadingScreen from './SubComponents/LoadingScreen';
import ErrorScreen from './SubComponents/ErrorScreen';
import {areas} from './consts/Areas';
import {projectStatus} from './consts/ProjectConstants';
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
// View a single project.
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
    if(this.props.currentActiveMenuItem != 'portfolio') {
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
    if(this.state.loading){return(<LoadingScreen loadingMessage={"Loading project..."} />)}
    if(this.state.error || this.state.project == undefined ){return(<ErrorScreen message={"Could not load project"} error={true} />)}
    else {
      console.log("Project: ", this.state.project)
    return (
      <div style={{padding: '5em 0', backgroundColor: primary_dark, minHeight: '100vh'}}>
      <Grid style={{minHeight: '80vh'}} padded>
        <Grid.Row stretched only="tablet computer">
          <Grid.Column width={10}>
            <Segment style={{minHeight: '60%'}}>
              <Header as='h1' style={{color: light_accent}} content={this.state.project.name} />
                {this.getStatusText(this.state.project.status)}
              <Divider/>
              <ReactMarkdown source={this.state.project.description} />
            </Segment>
              <a href="/portfolio">{'<< Portfolio'} </a>
          </Grid.Column>
          <Grid.Column width={6}>
          <div style={{minHeight:'80%'}}>
            <Segment>
              <Header as='h2' content="Brief" style={{color: light_accent}}/>
              <Divider style={{color: "green" }}/>
              <p>{this.state.project.brief}</p>
              <Button onClick = {() => window.location.href = this.state.project.link} style={{backgroundColor: light_accent, color: '#FFF'}}>
                <Icon name='linkify' />Check it out!</Button>
            </Segment>
            <Segment>
              <Header as='h2' content="Areas" style={{color: light_accent}}/>
              <Divider style={{color: "green" }}/>
              {this.state.project.area.map((area) => {
                let iconTextArea = this.getAreaText(area);
                return (<Header as='h4' style={{color: accent_2}}><Icon name={iconTextArea.icon}/> {iconTextArea.text}</Header>);})}
            </Segment>
            <Segment>
              <Header as='h2' content="Image" style={{color: light_accent}}/>
              <Divider/>
              <Modal trigger={<Image size="medium" centered  src={this.state.project.image} />}>
                <Modal.Content image>
                  <Image wrapped fluid src={this.state.project.image}/>
                </Modal.Content>
              </Modal>
            </Segment>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={16}>
          <Segment style={{minHeight: '60%', maxWidth: '100%'}} >
          <a href="/portfolio"><Icon name='arrow left' size="large" link/></a>
            <Header as='h1' style={{color: light_accent}} content={this.state.project.name} />
            <Grid style={{paddingLeft: '1em'}} divided>
              <Grid.Row>
                {this.getStatusText(this.state.project.status)}
              </Grid.Row>
              <Grid.Row>
                {this.state.project.area.map((area) => {
                  let iconTextArea = this.getAreaText(area);
                  return (<Grid.Column width={4}><p style={{color: accent_2}}><Icon name={iconTextArea.icon}/> {iconTextArea.text}</p></Grid.Column>);})}
              </Grid.Row>
              </Grid>
            <Divider/>
                <ReactMarkdown source={this.state.project.description} />
          </Segment>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={16}>
            <Segment textAlign="center">
              <Button onClick = {() => window.location.href = this.state.project.link} style={{backgroundColor: light_accent, color: '#FFF', width: '60%'}}>
                <Icon name='linkify' />Check it out!</Button>
              <Divider/>
              <Modal trigger={<Image size="small" centered  src={this.state.project.image} />}>
                <Modal.Content image>
                  <Image wrapped fluid src={this.state.project.image}/>
                  </Modal.Content>
                </Modal>
              </Segment>
              </Grid.Column>
        </Grid.Row>

      </Grid>
      </div>
    );
  }
  }

  getStatusText(statusKey) {
    let projStat = projectStatus.find((status) => {
        return status.key === statusKey;
    });

    if(projStat.key === 'completed') {
      return (<Header as='h6' color='green' content={projStat.text} style={{padding: 0, margin: 0}} />)
    } else if(projStat.key === 'in_progress') {
      return (<Header as='h6' color='yellow' content={projStat.text} style={{padding: 0, margin: 0}} />)
    } else {
      return (<Header as='h6' color='red' content={projStat.text} style={{padding: 0, margin: 0}} />)
    }
  }

  getAreaText(areaKey) {
    let area = areas.find((constArea) => {
        return constArea.key === areaKey;
    });
    return {icon: area.iconName, text: area.text}
  }
}

const mapStateToProps = (state) => ({
    currentActiveMenuItem: state.currentActiveMenuItem
});
const ViewProject= connect(mapStateToProps)(ViewSingleProject);

export default ViewProject;
