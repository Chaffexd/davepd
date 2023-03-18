import React from 'react';
import Button from '../UI/Button';

import landingImage from '../../assets/landing.jpg';
import classes from './Intro.module.css';

const Intro = (props) => {
  return (
    <div className={classes.introContainer}>
        <div className={classes.introText}>
            <h1 className={classes.introTitle}><span className={classes.span}>Residential</span> and <span className={classes.span}>commericial</span> Painter and Decorator in London, 
              <br></br>  Hemel Hempstead, St. Albans and surrounding areas</h1>
            <Button 
            name="GET A QUOTE" 
            link="https://www.trustatrader.com/traders/daves-painting-decorating-painters-decorators-st-albans" />
        </div>
        <div className={classes.introPhoto}>
            <img src={landingImage} alt="House painting" className={classes.image} />
        </div>
    </div>
  );
};

export default Intro;