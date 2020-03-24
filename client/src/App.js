import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register';
import FetchUser from './components/FetchUser'
import ShowUser from './components/ShowUser'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <>
      <NavBar />
        <FetchUser>
          <Container>
            <Switch>
              <ProtectedRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/showUser' component={ShowUser} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </FetchUser>
    </>
  );
}



export default App;
