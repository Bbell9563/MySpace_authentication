import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

class NavBar extends React.Component {
  render(){
    return(
      <Menu>
        <Menu.Menu>
          <Link to='/'>
            <Menu.Item 
              name='Home'
            />
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(NavBar)