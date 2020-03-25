import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Image, Header, Item, Segment, Input} from 'semantic-ui-react'
import Axios from 'axios'

class ShowUser extends React.Component {
  state={allPost: [], userPost: []}

  componentDidMount() {
    Axios.get(`api/posts`).then(res => this.setState({ allPost: res.data })).catch(e => console.log(e))
  }

  getUsersPost = () => {
    const {allPost, userPost} = this.state
    const { auth: { user}} = this.props;
    var postStuff = ''
    if (allPost.length > 0) {
      postStuff = allPost.map((p) => {
        if(p.user_id === user.id){
          return(
            <Segment key={`post-${p.id}`}>
              <Header as='h5'>
                <Image size='mini' circular src={require('./images/photo.png')}/>
                {user.nickname}
              </Header>
              <p>{p.body}</p>
            </Segment>
          )
        }
      })
    }
    else{
      return (
        postStuff = <Header as='h3' textAlign='center'> No Post Exist Yet</Header>
      )
    }
    return postStuff
  }

  render() {
    const { auth: { user}} = this.props;
    return (
      <>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={require('./images/photo.png')} circular size='small' />
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
          <Header as='h5'>Create A Post</Header>
          <Header as='h5'>
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
        {this.getUsersPost()}
      </Segment>
      </>
    )
  }
}

export class ConnectedShowUser extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <ShowUser {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
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

export default ConnectedShowUser