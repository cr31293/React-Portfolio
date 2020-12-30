import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down("md")]: {
      width: "-webkit-fill-available",
    },
    width: "auto",
    margin: "auto",
    marginBottom: "5%",
    marginTop: "7em"

  },
}));


function ResumeDoc() {
  const classes = useStyles();
  return (
    <>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image="/images/resume.png"
          title="Contemplative Reptile"
          className={classes.media}
        />
    </>
  );
}

export default ResumeDoc;
