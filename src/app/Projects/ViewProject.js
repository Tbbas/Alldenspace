import React,{Component} from 'react';
import {
  Grid,
  Header,
  Container,
  Segment,
  Divider,
  Button, Image,Icon
} from 'semantic-ui-react';
import { Router, Route, Link } from 'react-router-dom';

class ViewProject extends Component{
  constructor() {
    super();
    this.state={
      currentProject: undefined,
    }
  }

pProps() {
  console.log("PROPS: ", this.props.match.params.id)
}


  render() {

    return (
    <Container fluid style={{paddingTop: '2em', paddingBottom: 0}}>
    <Segment
      >
      <Image src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'  size={'massive'} centered />
      </Segment>
      <Container text textAlign='center'>
        <Header as='h1' color= {'blue'} content="cat"/>
        <Header as='h6' color={'red'} content={'2018'} style={{marginTop: 0}} />
        <Grid columns={4} className="centered" style={{padding: '.8em 0em'}}>
          <Button basic circular simple content="cool!" />
        </Grid>
        {this.computeLink("https://github.com/tbbas")}
        <Divider />
        <Container text>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, est quis luctus pharetra, nisl metus faucibus ex, ut fringilla diam purus congue nibh. Mauris sit amet orci ut augue faucibus fringilla. Aliquam congue nec risus a gravida. Mauris volutpat ligula mauris, non mollis sem pharetra quis. Sed id posuere sapien. Phasellus finibus fermentum dolor ut rhoncus. Mauris maximus metus in dui efficitur, sit amet sagittis tellus mattis. Aenean venenatis scelerisque dui, molestie elementum arcu posuere sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque lobortis enim dignissim mattis interdum.

  Aenean elit metus, vehicula ut neque nec, mollis accumsan nibh. Suspendisse id sapien vulputate sapien volutpat tristique. In laoreet arcu ut lectus maximus, sit amet elementum mauris pretium. Quisque vitae varius purus. Nullam sit amet ligula metus. Nullam ante erat, condimentum fringilla fermentum a, hendrerit ac est. Praesent vel eros dui. Quisque maximus venenatis arcu non gravida. Aliquam nec tincidunt dui. Ut ornare cursus augue ut porta.

  Phasellus luctus pulvinar ante, ut tincidunt lectus faucibus a. Nunc volutpat leo a nisl ultrices, et volutpat dui blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut at bibendum dolor, ac fermentum metus. Mauris massa arcu, finibus non mollis non, feugiat quis nisi. Donec est elit, placerat a consequat eu, varius a turpis. Fusce porta pellentesque scelerisque. Praesent ut egestas risus, et accumsan orci. Curabitur venenatis nisi sem, nec pharetra nisl dapibus porttitor. Maecenas sem magna, vestibulum non libero sit amet, gravida ultrices purus. Nulla condimentum porttitor lobortis. Cras orci diam, molestie sit amet nunc sed, molestie fermentum velit.

  Vestibulum porta semper orci ac pulvinar. Nunc laoreet eros sed magna volutpat ornare. Proin euismod mi fermentum consequat elementum. Fusce fermentum placerat lectus, id pretium lacus elementum vitae. Nunc tristique vitae nisl pulvinar pretium. Nullam vulputate et sem nec rhoncus. Pellentesque sed condimentum odio. Pellentesque lacus velit, tempus in cursus at, rutrum bibendum enim. In sollicitudin euismod arcu, quis dictum neque suscipit gravida. Aliquam velit velit, gravida vel viverra hendrerit, dictum id justo.

  Aenean faucibus tellus felis, nec semper augue convallis ut. Donec posuere interdum velit a ultricies. Vestibulum enim dui, sollicitudin eu aliquam ut, cursus quis metus. Phasellus eget semper sapien. Aliquam condimentum, justo viverra vulputate luctus, ipsum diam viverra enim, ac vestibulum sapien purus eget elit. Cras volutpat id erat ut accumsan. Curabitur porttitor condimentum augue, ac imperdiet elit pulvinar sed. Nullam tristique ex odio, sit amet sagittis augue dapibus at. Praesent ligula est, pretium ut sem sed, bibendum vehicula magna. Suspendisse feugiat enim sit amet volutpat ullamcorper. Nunc facilisis metus vitae turpis dictum iaculis. Etiam molestie pulvinar mollis. Nunc gravida eros non justo sollicitudin auctor at vel dui. Fusce ultricies leo felis, ac pretium risus eleifend sit amet. In hendrerit eros orci, in luctus quam lobortis at. Duis dictum ipsum at ornare sagittis.
          </p>
        </Container>
        </Container>
      <Grid columns={2} padded>
        <Grid.Column>
        <Link to='#'>
          <Container fluid textAlign='center'>
          <Segment  color={'blue'}>
            <Header as='h3' color={'blue'} content='Previous' />
            <Icon name='long arrow alternate left' size='huge'/>
            </Segment>
          </Container>
          </Link>
        </Grid.Column>
        <Grid.Column>
        <Link to='#'>
        <Container fluid textAlign='center'>
        <Segment fluid  color={'blue'}>
          <Header as='h3' color={'blue'} content='Next' />
          <Icon name='long arrow alternate right' size='huge'/>
          </Segment>
        </Container>
        </Link>
        </Grid.Column>
      </Grid>
  </Container>
  );
}

computeLink = (link) => {
  if(link.includes('github')) {
    return (
      <div style={{marginTop: '0.5em'}}>
      <a href = {link} style={{color: '#912A7E'}}>
      <p><Icon name={'github'} style={{color: 'black'}} /> {link}</p>
      </a>
      </div>
    )
  }
}
}
export default ViewProject;
