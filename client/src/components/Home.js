import React from 'react'
import { Header, Image, Input, Segment, Placeholder } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'

class Home extends React.Component {
  render() {
    const { auth: { user } } = this.props
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
          <Header as='h3' textAlign='center'>
            No Post Have Been Made
          </Header>
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