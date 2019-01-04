import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { compose } from 'redux';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import heroImage from '../images/HeroImage.jpg'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Learnjs extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <main className={classes.layout}>
          <h1>It works!</h1>
          <div>
            <span>You're ready to start!</span>
            <span>Skeleton 2, jQuery 2, and AWS libraries are included.</span>
          </div>
          <Card className={classes.card}>
             <CardActionArea>
               <CardMedia
                 className={classes.media}
                 image={heroImage}
                 title="Contemplative Reptile"
               />
             </CardActionArea>
           </Card>
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
  )(Learnjs);
