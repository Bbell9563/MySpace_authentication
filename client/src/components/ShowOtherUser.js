import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Image, Header, Item, Segment, Input } from 'semantic-ui-react'
import Axios from 'axios'

import Avatar from 'react-avatar';

export default class ShowOtherUser extends React.Component {
  state = {
    user_id: this.props.match.params.id,
    user: null,
    allPost: [],
    userPost: []
  }

  // componentDidMount() {
  //   const {user_id} = this.state
  //   Axios.get(`${this.props.match.params.id}`).then(res => this.setState({user: res.data})).catch(e => console.log(e))
  //   // Axios.get(`api/posts`).then(res => this.setState({ allPost: res.data })).catch(e => console.log(e))
  // }

  getUser = () => {
    const { user_id } = this.state
    Axios.get(`${user_id}`).then(res => this.setState({ user: res.data })).catch(e => console.log(e))
  }

  getAllPost = () => {
    const { user_id } = this.state
    Axios.get(`api/posts`).then(res =>{

     this.setState({ allPost: res.data})
     this.context.history.push(`/user/${user_id}`)
    })
    
    .catch(e => console.log(e))
  }

  getUsersPost = () => {
    const { allPost, userPost, user } = this.state
    var postStuff = ''
    this.getAllPost()
    if (allPost.length > 0) {
      postStuff = allPost.map((p) => {
        if (p.user_id === user.id) {
          return (
            <Segment key={`post-${p.id}`}>
              <Header as='h5'>
                <Avatar round size='25px' name={`${user.nickname}`} style={{ margin: '0 1% 0 0' }} />
                {user.nickname}
              </Header>
              <p>{p.body}</p>
            </Segment>
          )
        }
      })
    }
    else {
      return (
        postStuff = <Header as='h3' textAlign='center'> No Post Exist Yet</Header>
      )
    }
    return postStuff
  }


  render() {
    const { user, user_id } = this.state
    this.getUser()
    if (user !== null) {
      return (
        <>
          <Segment>
            <Item.Group>
              <Item>
                <Avatar round size='100px' name={`${user.nickname}`} style={{ margin: '0 1% 0 0' }} />
                <Item.Content>
                  <Item.Header as='h1'>{user.nickname}</Item.Header>
                  <Item.Meta>More About {user.nickname}</Item.Meta>
                  <Item.Description>
                    <p>Email:   {user.email}</p>
                    <p>Friends:  0</p>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
         
          <Segment>
            {this.getUsersPost()}
          </Segment>
        </>
      )
    }
    else{return(<div>None</div>)}
  }
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