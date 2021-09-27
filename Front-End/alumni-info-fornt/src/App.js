import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">People of ANDC</header>
        <Switch>
          <Route path='/'></Route>
          <Route path='/about'></Route>
          <Route path='/form'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
