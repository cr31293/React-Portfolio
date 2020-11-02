import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  app: {
    backgroundColor: "#929985",
    color: "#424242",
    minHeight: 70,
    width: "100%"
    
  },
  tabs: {
    marginTop: ".5%"
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Tabs  aria-label="Navigation Tabs" centered textColor="inherit" className={classes.tabs}>
          <Tab label="Home" href="./" />
          <Tab label="Portfolio" href="./portfolio" />
          <Tab label="Resume" href="./resume" />
          <Tab label="Contact" href="./contact" />
        </Tabs>
      </AppBar>
    </div>
  );
}