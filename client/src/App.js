import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Portfolio from './pages/Portfolio/index';
import './index.css';
import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
          </Switch>
        </div>
          <Footer />
      </Router>
    );
  }
}

export default App;
