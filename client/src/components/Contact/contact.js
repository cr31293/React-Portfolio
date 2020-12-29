import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import GitCard from "./GitCard";
import TwitterCard from "./TwitterCard";
import LinkedInCard from "./LinkedInCard";
import EmailIcon from "./EmailCard";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import EmailCard from "./EmailCard";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    height: "auto",
    margin: 0,
    padding: 0,
    textAlign: "center",
    listStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: 1,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.075)",
    },
  },
  reachOut: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "7.5rem"
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "7.5rem"
    },
    width: "100%",
    textAlign: "center",
    paddingTop: "2%",
    color: "#424242",
  },
  thanks: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "7.5rem"
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "7.5rem"
    },
    width: "100%",
    textAlign: "center",
    marginBottom: "2%",
    color: "#424242",
  },
  box: {
    margin: "5%",
    boxShadow: "5px 5px 5px 5px #888888",
  },
}));

function ContactInfo() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <div>
          <h1 className={classes.reachOut}>
            Please reach out via cell at 865-712-8932 or by the medias below.
          </h1>
          <h2 className={classes.thanks}>
          Thank you for visiting! 
          </h2>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <div>
            <GridList cellHeight={250} className={classes.gridList}>
              <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
                <ListSubheader component="div"></ListSubheader>
              </GridListTile>
              <GridListTile>
                <Button>
                  <Link 
                  href="https://github.com/cr31293"
                  target="_blank"
                  rel="noopener"
                  >
                    <GitCard />
                  </Link>
                </Button>
              </GridListTile>
              <GridListTile>
                <Button>
                  <Link 
                  href="https://twitter.com/chrisreed32"
                  target="_blank"
                  rel="noopener"
                  >
                    <TwitterCard />
                  </Link>
                </Button>
              </GridListTile>
              <GridListTile>
                <Button>
                  <Link 
                  href="https://www.linkedin.com/in/chris-reed-0b9b097b/"
                  target="_blank"
                  rel="noopener"
                  >
                    <LinkedInCard />
                  </Link>
                </Button>
              </GridListTile>
              <GridListTile>
                <Button>
                <Link href="mailto:cr31293@gmail.com">
                    <EmailIcon />
                  </Link>
                </Button>
              </GridListTile>
            </GridList>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default ContactInfo;
