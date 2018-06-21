import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
import Landing from './components/Layout/Landing.js';
import Login from './components/Auth/Login.js';
import Register from './components/Auth/Register.js';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path ="/" component={ Landing } />
        <div className="container">
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
