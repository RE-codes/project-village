import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import LandingPage from './components/layout/LandingPage';
import About from './components/layout/About';
import NewsFeed from './components/news-feed/NewsFeed';
import VillageMap from './components/map/VillageMap';
import Footer from './components/layout/Footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news-feed" component={NewsFeed} />
          <Route exact path="/map" component={VillageMap} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
