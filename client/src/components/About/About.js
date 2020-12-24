import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container, FormControlLabel } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { mergeClasses } from "@material-ui/styles";
import Image from "../../assets/images/green_cup.png";


const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '100%',
    backgroundImage: `url(${Image})`,
    boxShadow: 'none',
    
  },
  expand: {
    marginLeft: "49.75%",
    marginRight: "50.25%",
    boxShadow: 'none',
    padding: "0",
  },
  expandIcon: {
    fontSize: "1.5em",
  }
}))

function About() {
const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary className={classes.expand}
        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        </AccordionSummary>
        <Container maxWidth='sm'>
          <Typography 
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            I&apos;m a Full-Stack Web Developer with a previous background in
            business where I&apos;ve worked as an analyst supporting Sales and
            Supply and Distributions, leveraging both in-house applications and
            Tableau to help drive data-based bussiness decisions. Recently
            I&apos;ve completed a Full-Stack Web Development program at
            Vanderbilt University where I&apos;ve developed skills in HTML, CSS,
            and Javascript with focuses on <strong>M</strong>ongoDB{" "}
            <strong>E</strong>xpress <strong>R</strong>
            eact and <strong>N</strong>odeJS.
          </Typography>
        </Container>
    </Accordion>

    );
}

export default About;