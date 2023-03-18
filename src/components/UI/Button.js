import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <a href="https://www.trustatrader.com/traders/daves-painting-decorating-painters-decorators-st-albans" target="_blank" rel="noreferrer">
        <button className={classes.button}>
            GET A QUOTE
        </button>
        </a>
    );
};

export default Button;