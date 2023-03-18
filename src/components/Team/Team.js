import React from 'react';

import classes from './Team.module.css';
import TeamAward from './TeamAward';


const Team = () => {
  return (
    <div className={classes.teamContainer} id="about">
        <h1 className={classes.title}>We are London/Hertfordshire based painters and decorators <br></br>with <span className={classes.excellent}>excellent</span> customer service</h1>
        <p>What makes our painters and decorators different?</p>
        <div className={classes.container}>
            <TeamAward />
        </div>
    </div>
  );
};

export default Team;