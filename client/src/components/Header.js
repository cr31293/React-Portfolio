import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  group: {
    marginTop: theme.spacing(3),
    color: '#333',
    display:'flex',
    position: 'static',
    textAlign: 'center',
    width: '100%',
    
  },
  heroButtons: {
    marginTop: theme.spacing(2),
    width: '50%'
  },
  headerName: {
    marginTop: theme.spacing(2),
    width: '25%'

  },
  ticker: {
    marginTop: theme.spacing(2),
    width: '25%',
    flexDirection: 'row-reverse'
    
  }
}));

function Header() {
  const classes = useStyles();

  return(

    <div className={"classes.group"}>
      <ButtonGroup 
        variant="text"
        color="textSecondary"
        aria-label="text primary button group"
        className={classes.headerName}
      >
        <Button className={classes.headerName} to="/" >Chris Reed</Button>
        </ButtonGroup>
      <ButtonGroup 
        variant="text"
        color="textSecondary"
        aria-label="text primary button group"
        className={classes.heroButtons}
      >
        <Button className={classes.heroButtons} to="/portfolio">Portfolio</Button>
        <Button className={classes.heroButtons}>Resume</Button>
        <Button className={classes.heroButtons}>Contact</Button>
      </ButtonGroup>
      <ButtonGroup 
        variant="text"
        color="textSecondary"
        aria-label="text primary button group"
        className={classes.ticker}
      >
        <Button className={classes.ticker} to="/" >TICKER</Button>
        </ButtonGroup>
    </div>
  );
}
export default Header;
