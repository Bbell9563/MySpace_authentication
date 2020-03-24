import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Image, Header, Item, } from 'semantic-ui-react'

class ShowUser extends React.Component {
  render() {
    const { auth: { user, handleLogout, }, location, } = this.props;
    return (
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

export default ConnectedShowUser