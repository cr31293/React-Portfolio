import React from "react";
import Typist from "react-typist";
import Typography from "@material-ui/core/Typography";
import './index.scss';
import About from "./About";
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    display: 'inline',    
  },
  chris: {
    height: 180,
  },
  reed: {
    height: 180,
    marginLeft: 20,
  },
  container: {
    display: 'inline',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function Hello() {
  const classes = useStyles();
  const [checked, setChecked] = React. useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={"classes.container"}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        <Typist
          className="TypistExample-message"
          cursor={{
            show: false,
            element: '_',
          }}
          avgTypingDelay={70}
          startDelay={2000}
        >
          <span className={classes.chris}>Hi, my name is Christopher Reed</span>
          </Typist>
      </Typography>
    </div>
  );
}
