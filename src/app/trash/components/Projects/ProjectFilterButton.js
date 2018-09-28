import React,{Component} from 'react';
import { Button } from 'semantic-ui-react';

class ProjectFilterButton extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }
  render() {
    return (
      <Button basic inverted toggle active={this.state.active} onClick = {this.handleClick}>
        {this.props.filterName}
      </Button>
    )};

handleClick = () => {
  if(this.state.active) {
    this.props.removeFilterMethod(this.props.filterName);
    this.setState({active: false})
  } else {
    this.props.addFilterMethod(this.props.filterName);
    this.setState({active: true})
  }
}
}

export default ProjectFilterButton;
