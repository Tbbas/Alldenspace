import React, {Component} from 'react';
import {
 Card, Grid
} from 'semantic-ui-react';
import {Link} from  'react-router-dom';

class ProjectCard extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <Grid.Column>
      <Link to={'/projects/' + this.props.project._id}>
      <Card fluid
        image={'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        header={this.props.project.name}
        description={this.props.project.description}
        extra={this.props.project.area}
        />
        </Link>
        </Grid.Column>
    );
  }
}
export default ProjectCard;
