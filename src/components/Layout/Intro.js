import React from 'react';
import Button from '../UI/Button';

import classes from './Intro.module.css';

const Intro = (props) => {
  return (
    <div className={classes.introContainer}>
        <div className={classes.introText}>
            <h1 className={classes.introTitle}>Residential and commericial Painter and Decorator in London, 
                Hemel Hempstead, <br></br>St. Albans and surrounding areas</h1>
            <Button 
            name="GET A QUOTE" 
            link="https://www.trustatrader.com/traders/daves-painting-decorating-painters-decorators-st-albans" />
        </div>
        <div className={classes.introPhoto}>
            Photo holder
        </div>
    </div>
  );
};

export default Intro;