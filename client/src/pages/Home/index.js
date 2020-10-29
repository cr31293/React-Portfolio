import React from 'react';
import Hero from '../../components/Hero';
import Header from "../../components/Header";
import Hello from "../../components/About/Hello";
import About from "../../components/About/About";


function Home () {

    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Hello />
            <About />
        </React.Fragment>
    );
};

export default Home;