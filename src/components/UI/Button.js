import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
        <button className={classes.button}>
            {props.name}
        </button>
        </a>
    );
};

export default Button;