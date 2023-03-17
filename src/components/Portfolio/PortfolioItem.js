import React from 'react';
import Button from '../UI/Button';

import classes from './PortfolioItem.module.css';

const workImages = [
    {
        image: require('../../assets/residential.jpeg'),
        id: 0,
        title: "Commercial painting and decorating",
        info: "Quality painting and decorating services in London and surrounding areas"
    },
    {
        image: require('../../assets/residential2.jpeg'),
        id: 1,
        title: "Residential painting and decorating",
        info: "Any type of residential projects, regardless of size, area, or colour."
    },
    {
        image: require('../../assets/commercial.jpeg'),
        id: 2,
        title: "Exterior painting and decorating",
        info: "Creating an exterior which is smart and aesthetically beautiful."
    },
    {
        image: require('../../assets/external.jpeg'),
        id: 3,
        title: "Office painting and decorating",
        info: "Any office, big or small, with no disturbance to your business."
    }
];

const PortfolioItem = () => {
  return (
    <div className={classes.portfolioItemContainer}>
        {workImages.map(workImage =>
        <div className={classes.portfolioItem} key={workImage.id}>
            <img className={classes.image} src={workImage.image} alt="images of work" />
            <div className={classes.portfolioText}>
                <p className={classes.text}>{workImage.title}</p>
                <p className={classes.text}>{workImage.info}</p>
                <Button name="LEARN MORE" />
            </div>
        </div>
        )}
    </div>
  );
};

export default PortfolioItem;