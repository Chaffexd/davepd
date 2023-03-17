import React from 'react';
import Button from '../UI/Button';
import externalPhoto from '../../assets/external2.jpg';

import classes from './Pledge.module.css';

const Pledge = () => {
  return (
    <div className={classes.pledgeContainer}>
        <div className={classes.pledgeItems}>
            <h1>Excellent service guaranteed, delivered by our painters and decorators across London and Hertfordshire</h1>
            <p>We value the trust that our clients place in us.</p>
            <p>Here is our pledge to you:</p>
            <ul>
                <li className={classes.pledgeLi}>We will be honest and trustworthy</li>
                <li className={classes.pledgeLi}>We will give you a realistic timescales, so you know how long your painting and decorating project will take</li>
                <li className={classes.pledgeLi}>We will provide a final cost before starting painting and decorating</li>
                <li className={classes.pledgeLi}>We will keep you updated continuously</li>
                <li className={classes.pledgeLi}>We will respect your property and maintain a clean environment</li>
                <li className={classes.pledgeLi}>We will arrange a professional cleaning service if needed</li> 
                <li className={classes.pledgeLi}>We will be complying with Health & Safety regulations and The Best Practice.</li> 
            </ul>
            <Button name="GET A QUOTE" link="https://www.trustatrader.com/traders/daves-painting-decorating-painters-decorators-st-albans" />
        </div>
        <div className={classes.imageContainer}>
            <img src={externalPhoto} alt="House" className={classes.image} />
        </div>
    </div>
  );
};

export default Pledge;