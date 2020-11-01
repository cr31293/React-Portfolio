import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/footer';
import Home from './pages/Home/index';
import Portfolio from './pages/Portfolio/index';
import Resume from './pages/Resume/index';
import Contact from './pages/Contact/index';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
            <Route exact path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
            <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          </Switch>
        </div>
          <Footer />
      </Router>
    );
  }
}

export default App;
