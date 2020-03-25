import React from 'react'
import { Header, Image, Input, Segment, Card } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends React.Component {
  state = { posts: [], postCreator:{} }

  componentDidMount() {
    Axios.get('api/posts').then(res => this.setState({ posts: res.data })).catch(e=>console.log(e))
  }

  getPostUser = (id)=> {
    console.log(id)
    Axios.get(`/api/posts/getUser${id}`)
      .then(res => {
        console.log(res);
        // return res.data
        // res.data.filter((user)=>{
        // return (id === user.id)

        // })
        // console.log(postCreator)
        // return postCreator;
      })
      .catch(e => console.log(e));
    
  }

  allPosts = () => {
    console.log(this.getPostUser(1))
    const { posts } = this.state
    var postStuff = null
    if (posts.length > 0) {
      return postStuff = posts.map(p => (
        <div key={p.id}>
          {/* {console.log(p.user_id)} */}
          {/* {console.log(this.getPostUser(p.user_id))} */}
          {/* <Image src={this.getPostUser(p.user_id).image}/> */}

          
          <p>{p.body}</p>
        </div>
      ));} else {
      return(
       postStuff = <Header as='h3' textAlign='center'> No Post Exist Yet</Header>
      )
    }
    return postStuff
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
        <Segment>{this.allPosts()}</Segment>
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