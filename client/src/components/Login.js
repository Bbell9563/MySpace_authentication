import React from 'react'
import { AuthConsumer} from '../providers/AuthProvider'
import {Button, Form, Segment, Header } from 'semantic-ui-react'

class Login extends React.Component {
  state ={
    email:'',
    password:'',
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {email, password} = this.state
    this.props.auth.handleLogin({email,password}, this.props.history)
  }


  render(){
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>
          Login
        </Header>

        <Form onSubmit={this.handleSubmit}>

          <Form.Input 
            required
            label
          />

        </Form>
      </Segment>
    )
  }
}