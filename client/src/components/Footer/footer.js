import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icons: {
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    marginTop: "40vh - 40px",
  },
}
))

export default function Footer() {
  const classes = useStyles();

  return(
    <>
    <div className={classes.icons}>
      <Button><Link href="https://github.com/cr31293"><GitHubIcon color="disabled"/></Link></Button>
      <Button><Link href="https://twitter.com/chrisreed32"><TwitterIcon color="disabled"/></Link></Button>
      <Button><Link href="https://www.linkedin.com/in/chris-reed-0b9b097b/"><LinkedInIcon color="disabled"/></Link></Button>
    </div>
    </>
  );
}