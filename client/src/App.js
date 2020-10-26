import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/index';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
