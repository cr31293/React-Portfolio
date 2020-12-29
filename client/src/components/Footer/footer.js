import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles((theme) => ({

  footer: {
    display: "center",
    left: "0em",
    right: "0em",
    bottom: "0em",
    height: "2em",
    width: "100%",
    marginTop: "40vh - 10em",
    "& .MuiBottomNavigation-root": {
      backgroundColor: "inherit"
    }
  },
  bottomNav: {
    paddingTop: "1em",
    paddingBottom: "1em",
  }
}
))

export default function Footer() {
  const classes = useStyles();

  return(
    <>
    <div className={classes.footer}>
    <BottomNavigation className={classes.bottomNav}>
      <BottomNavigationAction className={classes.icon} label="GitHub" href="https://github.com/cwr31293" icon={<GitHubIcon />} />
      <BottomNavigationAction className={classes.icon} label="Twitter" href="https://twitter.com/chrisreed32" icon={<TwitterIcon />} />
      <BottomNavigationAction className={classes.icon} label="LinkedIn" href="https://www.linkedin.com/in/chris-reed-0b9b097b" icon={<LinkedInIcon />} />
    </BottomNavigation>
    </div>
    </>
  );
}