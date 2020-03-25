<<<<<<< HEAD
import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import Avatar from 'react-avatar';
=======
import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, Input, Icon, Image } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4

class Navbar extends React.Component {
  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <>
          <Link to="/showUser">
            <Menu.Item
              active={location.pathname === "/showUser"}
              style={{ padding: "1px 5px" }}
            >
<<<<<<< HEAD
              <Avatar round size='35px' name={`${user.nickname}`}/>
              <p style={{ margin:'0 0 0 5px'}}>{user.nickname}</p>
=======
              <Image
                style={{ width: "35px", height: "35px" }}
                circular
                src={require("./images/photo.png")}
              />
              <p style={{ margin: "0 0 0 5px" }}>{user.nickname}</p>
>>>>>>> d4d77a0cd6f7963e2b7dc0f50315570fe5314ce4
            </Menu.Item>
          </Link>

          <Link to="/login">
            <Menu.Item
              name="logout"
              onClick={() => {
                handleLogout(this.props.history);
              }}
            />
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </>
      );
    }
  };

  render() {
    return (
      <Menu className="large inverted pointing secondary" size='large' style={{ backgroundColor: '#222' }}>
        <Link to='/'>
          <Menu.Item
            name="MyZone"
            id="home"
            active={this.props.location.pathname === "/"}
          />
        </Link>
        <Link to={`/friends`}>
          <Menu.Item
            name="Friends"
            active={this.props.location.pathname === `/friends`}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              size="mini"
              icon={<Icon name="search" inverted circular link />}
              placeholder="Search"
            />
          </Menu.Item>

          {this.rightNavItems()}
        </Menu.Menu>
      </Menu>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);
