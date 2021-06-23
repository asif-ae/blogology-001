import './App.css';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* Route Not Matched */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
