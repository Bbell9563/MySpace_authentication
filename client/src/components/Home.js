import React from 'react'
import { Header, Image, Input, Segment, Card } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
import Axios from 'axios'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = { posts: [], users: [] }

  componentDidMount() {
    Axios.get(`api/posts`).then(res => this.setState({ posts: res.data })).catch(e => console.log(e))
    Axios.get('/users')
      .then(res => this.setState({ users: res.data })).catch(e => console.log(e))
  }

  getUser = (id) => {
    const { users } = this.state

    return (
      users.filter(p =>
        p.id === id
      )
    )
  }

  allPosts = () => {
    const { posts } = this.state
    var postStuff = ''
    if (posts.length > 0) {
      postStuff = posts.map((p) => {
        var userArray = this.getUser(p.user_id)
        var user = userArray[0]
        return (
          <Segment key={`post-${p.id}`}>
            <Header as='h3'>
              <Link to={`/users/${p.user_id}`}>
                <Avatar round size='25px' name={`${user.nickname}`} style={{ margin: '0 1% 0 0' }} />
                {user.nickname}
              </Link>
            </Header>
            <p>{p.body}</p>
          </Segment>

        )
      })
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
          <Header as="h1">Create A Post</Header>
          <Header as="h3">
            <Image
              size="mini"
              circular
              src={this.props.auth.user.image}
              style={style.image}
            />
            <Input
              placeholder="Write Your Post Here"
              style={style.inputBox}
            ></Input>
          </Header>
        </Segment>
        <Segment>
          {this.allPosts()}
        </Segment>



      </>
    );
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
  image: {
    width: '6%',
    margin: '2%'
  }
}

export default ConnectedHome