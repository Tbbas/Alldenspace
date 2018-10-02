import React, {Component} from 'react';
import {
 Card, Grid, Image, Icon, Button, Reveal, Header, Segment
} from 'semantic-ui-react';
import {Link} from  'react-router-dom';
import {connect} from "react-redux";
import {
  primary_dark,
  primary_light,
  light_accent,
  accent_1,
} from '../../Common/ColorScheme';
import {
  deleteProject,
} from '../../actions/index';


class ProjectCardView extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props;
  }
  render() {
    return(
      <Grid.Column>
      <Card  href={`/portfolio/${this.props.project._id}`}>
      <Reveal animated='move up'>
      <Reveal.Content visible>
        <Image src={this.props.project.image} size="medium" fluid centered/>
        </Reveal.Content>
        <Reveal.Content hidden>
        <div>
          <Header as='h5' textAlign="center" style={{paddingTop: '25%', paddingBottom: 0}}>{this.props.project.name}</Header>
          <Header as='h6' textAlign="center" content="<Click for more info!>"/>
          </div>
      </Reveal.Content>
      </Reveal>
        </Card>
        {this.props.authenticated ?
          <Button.Group floated='right'>
              <Button color={'yellow'} onClick = {() => window.location.href = `/portfolio/edit/${this.props.project._id}`}>Edit project</Button>
              <Button negative onClick = {() => this.deleteProject(this.props.project)}>Delete Project</Button>
        </Button.Group>: <span></span>
        }
        </Grid.Column>
    );
  }
  deleteProject = (project) => {
      this.props.dispatch(deleteProject(project))
  }
}

const mapDispatchToProps = () =>{
  deleteProject
}


const mapStateToProps = (state) => ({
});


const ProjectCard = connect(mapStateToProps)(ProjectCardView);
export default ProjectCard;
