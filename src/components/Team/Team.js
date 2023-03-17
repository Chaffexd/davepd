import React from 'react';

import classes from './Team.module.css';


const Team = () => {
  return (
    <div className={classes.teamContainer}>
        <h1 className={classes.title}>We are London/St.Albans based painters and decorators <br></br>with <span className={classes.excellent}>excellent</span> customer service</h1>
        <p>What makes our painters and decorators different?</p>
    </div>
  );
};

export default Team;