import './App.css';
import {Home} from './Components/Home';
import { Form } from './Components/Form';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <h1>People of ANDC</h1> 
        <Switch>
          
          <Route path='/'>
            <Home />
          </Route>

          <Route exact path='/about'></Route>
          
          <Route exact path='/form' component={Form} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
