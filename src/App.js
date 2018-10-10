import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import About from './About';
import Child from './Child';
import { AppBar, Button, Toolbar, IconButton, Typography, withStyles, Card, CardContent, Tab, Tabs, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = {
  card: {
    minWidth: 275,
    minHeight: 275,
    maxWidth: '1078px',
    margin: '10px auto',
    position: 'relative'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  // title: {
  //   fontSize: 14,
  // },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class App extends Component {
  state = {
    value: 'Home'
  };

  handleChange = () => {
    this.setState({ value: 'About' });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" className="menuButton" aria-label="menu"><MenuIcon /></IconButton>
            <Typography color="inherit" className={classes.grow} variant="h6">Praveen Chinta</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered  
          >
            <Tab value="Home" label="Home" component={Link} to="/"></Tab>
            <Tab value="About" label="About" component={Link} to="/About"></Tab>
            <Tab value="Contact" label="Contact" component={Link} to="/Contact"></Tab>
          </Tabs>
        </Paper>
        <Card className={classes.card}>
          <CardContent>
              <Typography variant="h6">{value}</Typography>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route path="/:id" component={Child} />
          </CardContent>
        </Card>
      </div>
      </Router>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);