import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.button}>
            <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
        </button>
    );
};

export default Button;