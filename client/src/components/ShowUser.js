import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Image, Card, Segment, Grid, Header, Rail } from 'semantic-ui-react'

class ShowUser extends React.Component {
  render() {
    const { auth: { user, handleLogout, }, location, } = this.props;
    return (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>

            <Image src={user.image} circular />
            <Rail position='right'>
              <Header as='h1'>{user.nickname}</Header>
              <Header as='h3'>{user.email}</Header>
            </Rail>

          </Grid.Column>
        </Grid.Row>
      </Grid>
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