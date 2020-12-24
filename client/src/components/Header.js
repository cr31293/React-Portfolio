import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  app: {
    backgroundColor: "#929985",
    color: "#424242",
    minHeight: "4.5em",
    width: "100%"
  },
  tabs: {
    marginTop: ".8em",

  }
}));

export default function SimpleTabs() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.app}>
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