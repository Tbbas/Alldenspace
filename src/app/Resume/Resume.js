/*
* Showcase my Resume
*/
import React, {Component} from 'react';
import {
  Container,
  Header,
  Segment,
  Divider
} from 'semantic-ui-react'
import {
  primary_dark
} from '../Common/ColorScheme';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import {connect} from 'react-redux';
import {
  changeTab
} from '../actions/index';
import Contact from '../Home/Contact';



class ViewResume extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
    if(this.props.currentActiveMenuItem != 'resume') {
      dispatch(changeTab('resume'))
    }
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {

  return (
  <Container fluid style={{padding: '3em 0em', backgroundColor: primary_dark, minHeight: '100vh'}}>
  <Container text textAlign="center" >
  <Segment>
    <Header as='h1' centered>
    My Resume
    </Header>
    <Divider />
    <Document
              file="Allden_Resume.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={this.state.pageNumber} />
  </Document>
    </Segment>
    </Container>
    <Divider/>
    <Contact />
  </Container>
);
}
}

const mapDispatchToProps = () =>{
  changeTab
}


const mapStateToProps = (state) => ({
  currentActiveMenuItem: state.currentActiveMenuItem
});

const Resume = connect (mapStateToProps)(ViewResume);

export default Resume;
