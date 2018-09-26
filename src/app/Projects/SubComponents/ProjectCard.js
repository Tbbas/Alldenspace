import React, {Component} from 'react';
import {
 Card, Grid, Image, Icon, Button
} from 'semantic-ui-react';
import {Link} from  'react-router-dom';
import {deleteProject} from '../api/HelperMethods';


class ProjectCard extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Grid.Column>
      <Card fluid color={'blue'} href={`/portfolio/${this.props.project._id}`}>
        <Image src={this.props.project.image} size="medium" fluid centered/>
        <Card.Content>
          <Card.Header>{this.props.project.name}</Card.Header>
        </Card.Content>
        </Card>
        {this.props.authenticated ?
          <Button.Group floated='right'>
              <Button color={'yellow'} onClick = {() => alert("edit")}>Edit project</Button>
              <Button negative onClick = {() => deleteProject(this.props.project)}>Delete Project</Button>
        </Button.Group>: <span></span>
        }
        </Grid.Column>
    );
  }
}
export default ProjectCard;
