import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        dashboard
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
