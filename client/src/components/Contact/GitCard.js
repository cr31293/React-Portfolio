import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  Box: {
    display: "block"
  },
  GitHub: {
    display: "inline"
  },
}));

function GitCard() {
  const classes = useStyles();

  return (
    <Box component="span" m={1}>
      <GitHubIcon style={{ fontSize: 80 }} className={classes.GitHub} color={ 'primary' }/>
    </Box>
  );
}

export default GitCard;
