/*
* Showcase my Resume
*/
import React, {Component} from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Grid
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
  <div style={{padding: '3em 0', backgroundColor: primary_dark, minHeight: '100vh'}}>
  <Grid centered>
  <Grid.Row only="tablet computer">
  <Grid.Column width={8}>
  <Segment textAlign="center" >
    <Header as='h1' centered style={{maxWidth: '60vw'}}>
    My Resume
    </Header>
    <Divider />
    <Document
              file="/Allden_Resume.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={this.state.pageNumber} />
  </Document>
    </Segment>
    </Grid.Column>
  </Grid.Row>
  <Grid.Row only="mobile tablet">
  <Grid.Column width={16}>>
      <Segment textAlign="center">
        <Header as='h1' centered>
        My Resume
        </Header>
        <Divider />
        <Document
                  file="/Allden_Resume.pdf"
                  onLoadSuccess={this.onDocumentLoad}
                >
                  <Page scale={0.5} pageNumber={this.state.pageNumber} />
      </Document>
        </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider/>
    <Contact />
  </div>
);
}
}



const mapStateToProps = (state) => ({
  currentActiveMenuItem: state.currentActiveMenuItem
});

const Resume = connect (mapStateToProps)(ViewResume);

export default Resume;
