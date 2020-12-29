import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import tileData from "./tileData.json";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    boxSizing: "content-box",
  },
  gridList: {
    height: "80%",
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
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


export default function PortfolioGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={"auto"} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} >
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.image}
            style={{
              height: "15rem",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingBottom: "2rem",
            }}
          >
            <img src={process.env.PUBLIC_URL + tile.image} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <>
                  <Link href={tile.repo}>
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
