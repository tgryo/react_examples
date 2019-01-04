import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import classNames from 'classnames';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import PerfectScrollbar from 'perfect-scrollbar';
import '../css/perfect-scrollbar.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { mainListItems, secondaryListItems } from '../components/listItems';
import SimpleLineChart from '../components/SimpleLineChart';
import SimpleTable from '../components/SimpleTable';
import Sidebar from '../components/Sidebar';
import logo from '../logo.svg';

import dashboardRoutes from '../routes/dashboard';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
//    overflow: 'auto',
  },
//  mainPanel: {
//    [theme.breakpoints.up("md")]: {
//      width: `calc(100% - ${drawerWidth}px)`
//    },
//    overflow: "auto",
//    position: "relative",
//    float: "right",
//    maxHeight: "100%",
//    width: "100%",
//    overflowScrolling: "touch"
//  },
//  content: {
//    marginTop: "70px",
//    padding: "30px 15px",
//    minHeight: "calc(100vh - 123px)"
//  },
  container: {
    marginTop: '40px'
  },
});

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route exact path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== '/maps';
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener('resize', this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position='absolute'
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <Typography
                component='h1'
                variant='h6'
                color='inherit'
                noWrap
                className={classes.title}
              >
                Dashboard
              </Typography>
              <IconButton color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Sidebar
            routes={dashboardRoutes}
            logoText={'yeah!'}
            handleDrawerToggle={this.handleDrawerToggle}
            open={this.state.mobileOpen}
            color='blue'
            {...rest}
          />
          <div className={classes.content} ref="mainPanel">
            {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
            {this.getRoute() ? (
              <div className={classes.content}>
                <div className={classes.container}>{switchRoutes}</div>
              </div>
            ) : (
              <div className={classes.map}>{switchRoutes}</div>
            )}
          </div>
          {this.getRoute() ? null : null}
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
  )(Dashboard);
