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
        <Link to='/form'>People of ANDC</Link>
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
