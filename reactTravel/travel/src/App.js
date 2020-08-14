import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Destination from './components/Destination/Destination';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer'

import './App.scss';

class App extends Component {
  render () {
  return (
    <React.Fragment>
        <Navbar />
          <main>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/destination" component={Destination} />
                  <Route exact path="/contact" component={Contact} />
                  <Route component={Error} />
                </Switch>
          </main>
        <Footer />
  </React.Fragment>
  );
  }
}

export default App;
