import React from 'react';
import Hero from '../../components/Hero';
import Header from "../../components/Header";
import PortfolioGrid from '../../components/PortfolioGrid/PortfolioGrid';


function Portfolio () {

    return (
        <React.Fragment>
            <Header />
            <Hero />
            <PortfolioGrid />
        </React.Fragment>
    );
};

export default Portfolio;