import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
import Landing from './components/Layout/Landing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
