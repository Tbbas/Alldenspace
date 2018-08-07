import React, {Component} from 'react';
import {
  Container, Header, Segment, Grid
} from 'semantic-ui-react';

class ProjectCard extends Component {
  render() {
    return(
      <Card
        href='/'.{this.props.name}
        image={this.props.image}
        header={this.props.name}
        description={this.props.description.subString(0,25)}

/>
    );
  }

}
