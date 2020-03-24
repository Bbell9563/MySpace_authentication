import React from 'react'
import { Header, Image, Input, Segment, Card } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    Axios.get(`api/users/1/posts`).then(res => this.setState({ posts: res.data })).catch(e => console.log(e))
  }

  getUser = (id) => {
    Axios.get(`api/users/${id}`).then(res=>
      console.log(res)).catch(e => console.log(e))
  }

  allPosts = () => {
    const { posts } = this.state
    var postStuff = ''
    console.log(posts);
    if (posts.length > 0) {
      postStuff = posts.map((p) => {
        this.getUser(p.user_id)
        return(
        <Segment key={`post-${p.id}`}>
          <p>{p.body}</p>
          <p>{p.user_id}</p>
        </Segment>
      )})
    }
    else {
      return (
        postStuff = <Header as='h3' textAlign='center'> No Post Exist Yet</Header>
      )
    }
    return (postStuff)
  }

  render() {
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