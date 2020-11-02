import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "block"
  },
  GitHub: {
    display: "inline"
  },
}));

function LinkedInCard() {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <LinkedInIcon style={{ fontSize: 80 }} className={classes.GitHub} color={ 'primary' }/>
    </Box>
  );
}

export default LinkedInCard;