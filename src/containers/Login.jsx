import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import logo from '../logo.svg';
import './App.css';

class Login extends Component {
  render() {
    console.log('aiueo');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/dashboard">About</Link>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  };
}

const mapDispatchToProps = () => {
  return {

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
