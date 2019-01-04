import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { compose } from 'redux';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('100%' + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class Reports extends Component {
  state = {
  viewport: {
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  }
};

_goToNYC = () => {
    const viewport = {...this.state.viewport, longitude: -74.1, latitude: 40.7};
    this.setState({viewport});
}

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <ReactMapGL
            {...this.state.viewport}
            mapboxApiAccessToken={''}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
          <button onClick={this._goToNYC}>New York City</button>
        </main>
      </React.Fragment>
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

export default compose(
    withRouter,
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
  )(Reports);
