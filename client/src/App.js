import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setCurrentUser } from './actions';
import store from './store';

import Header from './components/layout/Header';
import LandingPage from './components/layout/LandingPage';
import About from './components/layout/About';
import NewsFeed from './components/news-feed/NewsFeed';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import VillageMap from './components/map/VillageMap';
import Footer from './components/layout/Footer';
import PrivateRoute from './components/auth/PrivateRoute';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));
  store.dispatch(setCurrentUser(user));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/news-feed" component={NewsFeed} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/map" component={VillageMap} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
