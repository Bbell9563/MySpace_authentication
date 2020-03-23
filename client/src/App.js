import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Register from './components/Register';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
