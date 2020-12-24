import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  media: {
    width: "auto",
    height: "auto",
    margin: "auto",
    marginBottom: "5%",
    marginTop: "7em"

  },
});


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
