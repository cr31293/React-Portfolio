import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "block"
  },
  GitHub: {
    display: "inline"
  },
}));

function EmailCard() {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <EmailIcon style={{ fontSize: 80 }} className={classes.GitHub} color={ 'primary' }/>
    </Box>
  );
}

export default EmailCard;