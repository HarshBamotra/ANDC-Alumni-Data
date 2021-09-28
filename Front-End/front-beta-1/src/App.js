import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Form} from './Components/Form';
import {Home} from './Components/Home';

function App() {
  return (
    <Router>
      <h1>People of ANDC</h1>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Form' component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
