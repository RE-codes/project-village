import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
