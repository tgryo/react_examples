import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
