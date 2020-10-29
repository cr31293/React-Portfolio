import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

function About() {

  return (
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
    );
}

export default About;