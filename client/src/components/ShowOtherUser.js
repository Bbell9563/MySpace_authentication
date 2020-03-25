import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Image, Header, Item, Segment, Input } from "semantic-ui-react";
import Axios from "axios";

<<<<<<< HEAD
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
=======
import Avatar from "react-avatar";
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4

class ShowOtherUser extends React.Component {
  state = {
    user_id: this.props.match.params.id,
    user: null,
    allPost: [],
<<<<<<< HEAD
  }
=======
    userPost: []
  };
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4

  getUser = () => {
    const { user_id } = this.state;
    Axios.get(`${user_id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(e => console.log(e));
  };

  getAllPost = () => {
    const { user_id } = this.state
    Axios.get(`api/posts`).then(res => {
      this.setState({ allPost: res.data })
    })

      .catch(e => console.log(e))
  }

  getUsersPost = () => {
    const { allPost, userPost, user } = this.state
    var postStuff = ''
    if (allPost.length === 0) {
      return (<>{this.getAllPost()}</>)
    }
    else if (allPost.length !== 0) {
      postStuff = allPost.map((p) => {
        if (p.user_id === user.id) {
          return (
            <Segment key={`post-${p.id}`}>
            <div>
              <Link to={`/users/${p.user_id}`} style={{ color: 'black' }}>
                <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                  <Avatar round size='35px' name={`${user.nickname}`} />
                </div>
                <div style={{ margin: '0', padding: '0 0 0 1%', display: 'inline-block' }}>
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{user.nickname.charAt(0).toUpperCase()}{user.nickname.slice(1)} </div>
                  <div style={{ color: '#999', fontSize: '12px' }}>{p.date}</div>
                </div>
              </Link>
            </div>
            <h4>{p.body}</h4>
          </Segment>
          )
        }
      });
    } else {
      return (postStuff = (
        <Header as="h3" textAlign="center">
          {" "}
          No Post Exist Yet
        </Header>
      ));
    }
<<<<<<< HEAD
    return postStuff
  }

  getUserPostNumber = () => {
    const {allPost, user_id} = this.state
    var numberOfPost = 0
    if(allPost !== 0){
      allPost.map((p)=> {
        if(p.user_id === parseInt(user_id)){
          return numberOfPost +=1
        }
      })
    }
    return numberOfPost
  }

  render() {
    const { user, user_id} = this.state
    var userPostLength = this.getUserPostNumber()
=======
    return postStuff;
  };

  render() {
    const { user, user_id } = this.state;
    this.getUser();
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4
    if (user !== null) {
      return (
        <>
          <Segment>
            <Item.Group>
              <Item>
<<<<<<< HEAD
                <Avatar round size='150px' name={`${user.nickname}`} style={{ margin: '0 1% 0 0' }} />
                <Item.Content>
                  <Item.Header as='h1' style={{ margin: '1% 0' }}>{user.nickname.charAt(0).toUpperCase()}{user.nickname.slice(1)}</Item.Header>
                  <Item.Meta>More About {user.nickname.charAt(0).toUpperCase()}{user.nickname.slice(1)}</Item.Meta>
                  <Item.Description>
                    <p>Email:   {user.email}</p>
                    <p>Friends:  0</p>
                    <p>Number of Post: {`${userPostLength}`}</p>
=======
                <Avatar
                  round
                  size="100px"
                  name={`${user.nickname}`}
                  style={{ margin: "0 1% 0 0" }}
                />
                <Item.Content>
                  <Item.Header as="h1">{user.nickname}</Item.Header>
                  <Item.Meta>More About {user.nickname}</Item.Meta>
                  <Item.Description>
                    <p>Email: {user.email}</p>
                    <p>Friends: 0</p>
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>

<<<<<<< HEAD
          <Segment>
            {this.getUsersPost()}
          </Segment>
=======
          <Segment>{this.getUsersPost()}</Segment>
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4
        </>
      );
    } else {
      return <div>None</div>;
    }
<<<<<<< HEAD
    else { return (<>{this.getUser()}</>) }
  }
}


export default ShowOtherUser


=======
  }
}

>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4
const style = {
  inputBox: {
    padding: "0px",
    width: "85%"
  },
  image: {
    width: "6%",
    margin: "2%"
  }
};
