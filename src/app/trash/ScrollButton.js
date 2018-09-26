import React from 'react';
import FadeIn from 'react-fade-in';
import {
  Button,
  Icon
} from 'semantic-ui-react';

class ScrollButton extends React.Component {
  render() {
    return (
    <FadeIn delay={5000}>
    <Button basic circular icon inverted onClick={this.anchor} color='blue' style={{fontSize: '1em', marginTop: '-1.5em'}}>
      <Icon name="angle down"/>
    </Button>
    </FadeIn>
)
}

  anchor = () => {
    window.location.href="http://www.example.com/default.htm";
  };
}
