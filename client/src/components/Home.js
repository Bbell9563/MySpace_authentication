import React from 'react'
import { Header, Card, Image, Button, Icon} from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends React.Component {
  state = { posts: []}

  componentDidMount() {
    Axios.get('api/posts').then(res => this.setState({ posts: res.data}))
  }

  posts = () => {
    const { posts } = this.state
    console.log(this.state.posts);
    posts.map((p, index) =>(
      <Card key={index}>
        <Card.Content>
          <Card.Header>{p.body}</Card.Header>
        </Card.Content>
        <Card.Meta>by: {this.props.nickname}</Card.Meta>
        <Card.Content>Replies go here</Card.Content>
      </Card>
    ))
    return posts
      
    }
  
  render(){
  const { auth: { user } } = this.props
  const posts = this.posts()
  return (
    <>
      <Header as="h1" textAlign="center">
        MyZone
      </Header>
      <Header as="h1">
        <Image size="mini" src={require("./images/photo.png")} />
        {user.nickname}
      </Header>
      <div>
        <br />
        <Header as="h2">My Feed</Header>
        <br />
         {this.posts()}
      </div>
    </>
  );}
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

export default ConnectedHome