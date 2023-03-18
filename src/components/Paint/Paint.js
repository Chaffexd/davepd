import React from 'react';

import classes from './Paint.module.css';

const paintLogos = [
    {
        source: require('../../assets/dulux.webp'),
        id: 0
    },
    {
        source: require('../../assets/farrowball.webp'),
        id: 1
    },
    {
        source: require('../../assets/sanderson.webp'),
        id: 2
    },
    {
        source: require('../../assets/paintpaper.webp'),
        id: 3
    }
]

const Paint = () => {
    return (
        <div className={classes.paintContainer}>
            <h1 className={classes.title}>
                Our painters and decorators use superior products
                and deliver excellent quality jobs across London
            </h1>
            <p className={classes.text}>We guarantee a perfect result</p>
            <div className={classes.paintImagesContainer}>
                {paintLogos.map(logo => 
                    <img src={logo.source} key={logo.id} alt="Paint logo" className={classes.paintImages} />
                )}
            </div>
        </div>
    );
};

export default Paint;