import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Input, Icon } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
          <Link to='/showUser'>
            <Menu.Item
              name={`${user.nickname}`}
              active={location.pathname === '/showUser'} />
          </Link>

          <Link to='/login'>
            <Menu.Item
              name='logout'
              onClick={() => {
                handleLogout(this.props.history)
              }}
            />
          </Link>
        </>
      )
    } else {
      return (
        <>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </>
      )
    }
  }

  render() {
    return (
      <Menu className="large inverted pointing secondary" style={{ backgroundColor: '#222' }}>
        <Link to='/'>
          <Menu.Item
            name='MyZone'
            id='home'
            active={this.props.location.pathname === '/'}
          />
        </Link>
        <Menu.Menu position='right'>
        <Menu.Item>
            <Input
              size='mini'
              icon={<Icon name='search' inverted circular link />}
              placeholder='Search'
            />
          </Menu.Item>
          {this.rightNavItems()}
        </Menu.Menu>
      </Menu>

    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);