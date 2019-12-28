import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route, } from 'react-router-dom'
import Contact from './pages/contact'
import Header from './components/header';
import Homepage from './pages/homepage';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:"pink"}}>
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
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
          </div>
        </Router>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
