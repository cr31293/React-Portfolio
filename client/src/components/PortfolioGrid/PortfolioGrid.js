import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import tileData from "./tileData.json";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    height: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    width: "50%",
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: 1,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.075)",
    },
  tileBar: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "2rem",
    display: "inline",
    
  },
  
}));

export default function PortfolioGrid() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const colMatches = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileCol = 1;
  const nonMobileCol = 2;
  const gridListTileDisplay = colMatches ? "listItems" : "flex";
  const gridListTileWidth = colMatches ? "100%" : "50%";

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} className={classes.gridList}>
        <GridListTile 
          key="Subheader" 
          cols={ colMatches ? 1 : 2 } 
          
        >
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.image}
            style={{
              width: gridListTileWidth,
              height: "15rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingBottom: "2rem",
              display: gridListTileDisplay,
              margin: "auto"
            }}
          >
            <Link 
              href={tile.live}
              target="_blank"
              rel="noopener"
              >
            <img src={process.env.PUBLIC_URL + tile.image} alt={tile.title} />
            </Link>
            <GridListTileBar
              className={classes.tileBar}
              style={{
                backgroundColor: "rgba(0, 0, 0, .85)"
              }}
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <>
                  <Link 
                    href={tile.repo}
                    target="_blank"
                    rel="noopener"
                  >
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                  <Button onClick={handleClick}><InfoIcon className={classes.icon}/></Button>
                  <Snackbar
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    open={open}
                    onClose={handleClose}
                    message={`figure out .md parser to show our readme here. Styling should be center screen.`}
                    action={
                      <>
                        <IconButton 
                          aria-label="close" 
                          color="inherit"
                          onClick={handleClose}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </>
                    }
                  />
                </>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
