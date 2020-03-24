import React from 'react'
import { Header, Image, Input, Segment, Card } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    Axios.get('api/posts').then(res => this.setState({ posts: res.data }))
  }

  allPosts = () => {
    const { posts } = this.state
    console.log(posts);
    if (posts.length > 1) {
      posts.map((p, index) => {
        return (
          <Card key={index}>
            <Card.Content>
              <Card.Header>{p.body}</Card.Header>
            </Card.Content>
            <Card.Meta>by: {this.props.nickname}</Card.Meta>
            <Card.Content>Replies go here</Card.Content>
          </Card>
        )
      })
    }
    else {
      return(
      <Header as='h3' textAlign='center'> No Post Exist Yet</Header>
      )
    }
  }

  render() {
    const { auth: { user } } = this.props
    return (
      <>
        <Segment>
          <Header as='h1'>Create A Post</Header>
          <Header as='h3'>
            <Image
              size='mini'
              circular
              src={require('./images/photo.png')}
              style={style.image}
            />
            <Input
              placeholder='Write Your Post Here'
              style={style.inputBox}
            >
            </Input>
          </Header>
        </Segment>
        <Segment>
          {this.allPosts()}
        </Segment>
      </>
    )
  }
}

const ConnectedHome = (props) => {
  return (
    <AuthConsumer>
      {auth =>
        <Home {...props} auth={auth} />
      }
    </AuthConsumer>
  )
}

const style = {
  inputBox: {
    padding: '0px',
    width: '85%'
  },
  segments: {
    backgroundColor: 'white',
    margin: '.5% 2.5%',
    width: '95%',
  },
  image: {
    width: '6%',
    margin: '2%'
  }
}

export default ConnectedHome