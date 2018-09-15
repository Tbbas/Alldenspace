import React,{Component} from 'react';
import { Button } from 'semantic-ui-react';

// A simple button class for applying a filter to the projects showing
class ProjectFilterButton extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }
  render() {
    if(this.state.active) {
      return (
        <Button color={'blue'} onClick = {this.handleClick}>
          {this.props.name}
        </Button>
      );
    } else {
      return (
        <Button basic color={'white'}  onClick = {this.handleClick}>
          {this.props.name}
        </Button>
      );
    }
  }

handleClick = () => {
  if(this.state.active) {
    this.setState({
      active: false,
    })
    this.props.applyFilterMethod(false, this.props.name)
  } else {
    this.setState({
      active: true,
    })
    this.props.applyFilterMethod(true, this.props.name)
  }
}
}
export default ProjectFilterButton;
