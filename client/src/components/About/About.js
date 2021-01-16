import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "../../assets/images/green_cup.png";
import Profile from "../../assets/images/profilepic.jpg";
import Grow from "@material-ui/core/Grow";

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
  },
  profile: {
    objectPosition: "center",
    marginTop: "1em"
  }
}))

function About() {
const classes = useStyles();
const [checked, setChecked] = React.useState(false);

const handleChange = () => {
  setChecked((prev) => !prev);
};

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary className={classes.expand}
        expandIcon={
        <ExpandMoreIcon 
          className={classes.expandIcon}
          onClick={handleChange}
        />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        
        >
        </AccordionSummary>
        <Container maxWidth='sm'>

          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
          >
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
          
          <Grow
            in={checked}
            style={{ transformOrigin: '10em 75% 10em' }}
            {...(checked ? { timeout: 3000 } : {})}
          >
          <img src={Profile} className={classes.profile}/>

          </Grow>

          
          </Typography>

          </Grow>
        </Container>
    </Accordion>

    );
}

export default About;