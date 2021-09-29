import React from 'react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Form} from './Components/Form';
import {Home} from './Components/Home';
import { NavMenu } from './Components/NavMenu';

import '@fontsource/roboto/300.css';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Form' component={Form} />
      </Switch>

    </Router>
  );
}

export default App;
