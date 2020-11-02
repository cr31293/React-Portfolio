import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "block"
  },
  GitHub: {
    display: "inline"
  },
}));

function TwitterCard() {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <TwitterIcon style={{ fontSize: 80 }} className={classes.GitHub} color={ 'primary' }/>
    </Box>
  );
}

export default TwitterCard;