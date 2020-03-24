import React from 'react'
import { Header, Card, Image} from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'

class Home extends React.Component {
  render(){
  const { auth: { user } } = this.props
  return (
    <>
      <Header as='h1' textAlign='center'>
        MyZone
    </Header>
        <Header as='h1'><Image size='mini' src={require('./images/photo.png')} />{user.nickname}</Header>
    </>
  )}
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