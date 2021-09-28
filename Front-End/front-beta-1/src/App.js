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
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@coreui/coreui/dist/css/coreui.css';

function App() {
  return (
    <Router>



      <Typography variant="h2" component="div" gutterBottom align='center' >
        People of ANDC
      </Typography>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Form' component={Form} />
      </Switch>

    </Router>
  );
}

export default App;
