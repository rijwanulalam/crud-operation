import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import ExistingUser from './components/ExistingUser/ExistingUser';
import CreateUser from './components/CreateUser/CreateUser';


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/existinguser">
            <ExistingUser />
          </Route>
          <Route path="/createuser">
            <CreateUser />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
