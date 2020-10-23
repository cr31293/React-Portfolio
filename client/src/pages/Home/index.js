import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { container } from '@material-ui/core';

const makeStyles = useStyles({
    cover: {
        backgroundImage: url("../assets/images/green_cup.png"),
        maxWidth="xl"
    }
})

function Home () {
    const classes = useStyles();

    return (
        <container/>
    );
};

export default Home;