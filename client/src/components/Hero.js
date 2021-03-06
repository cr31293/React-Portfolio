import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(10, 0, 6),
    display: 'flex'
  },
  heroButtons: {
    marginTop: theme.spacing(5),
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>

      </div>
    </>
  );
}

export default Hero;
