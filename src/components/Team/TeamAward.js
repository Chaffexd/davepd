import React from 'react';

import classes from './TeamAward.module.css';

const icons = [
    {
        icon: require('../../assets/clock.png'),
        id: 0,
        title: "Speedy Service",
        text: "We respond to any inquiry within two hours; we are available for consultation as soon as the next day. Get your London property transformed and book your house painters and decorators for the same week!"
    },
    {
        icon: require('../../assets/process-improvement.png'),
        id: 1,
        title: "Easy Process",
        text: "With our hassle-free painting and decorating service, you can leave everything to us. You’re our priority. All you need to do is to book your consultation. We then inspect, advise, and paint!"
    },
    {
        icon: require('../../assets/shield.png'),
        id: 2,
        title: "Top Quality",
        text: "We have been painting London properties for years and our experienced painters and decorators use only superior materials. Plus, you can call us back anytime."
    },
    {
        icon: require('../../assets/paint-bucket.png'),
        id: 3,
        title: "Experienced Team",
        text: "Our team has a minimum of 5 years of experience, knowing the best tools and materials depending on the desired service. Our professionalism and quality makes us stand out from the crowd."
    }
]

const TeamAward = () => {
  return (
    icons.map(icon => 
        <div key={icon.id} className={classes.TeamAwardContainer}>
            <img className={classes.icon} src={icon.icon} alt="" />
            <h2 className={classes.title}>{icon.title}</h2>
            <p>{icon.text}</p>
        </div>
    )
  );
};

export default TeamAward;