import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
    header: {
        backgroundColor: "#32a877",
    }
})

function Header() {
    const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Chris Reed
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
