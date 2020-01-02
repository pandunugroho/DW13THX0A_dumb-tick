import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route, } from 'react-router-dom'
import Category from './pages/category'
import Profile from './pages/profile';
import Homepage from './pages/homepage';
import EventsByCategory from './pages/eventsByCategory';
import EventDetail from './pages/eventDetail';

import Header from './components/header';
import ModalLogin from './components/modalLogin';
import Footer from './components/footer';
import MenuListComposition from './components/menu';


class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "pink" }}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a> */}
        <Router>
        <Header />
          <div>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/login">
                <ModalLogin />
              </Route>
              <Route exact path="/profile/:id">
                <Profile />
              </Route>
              <Route exact path="/category/:id/events">
                <EventsByCategory />
              </Route>
              <Route exact path="/event/:id">
                <EventDetail />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
