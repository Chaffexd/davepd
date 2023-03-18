import React from 'react';
import classes from './NavBar.module.css';

const navItems = [
    {
        navTitle: 'About',
        id: 0
    },
    {
        navTitle: 'Residential',
        id: 1
    },
    {
        navTitle: 'Commericial',
        id: 2
    },
    {
        navTitle:'Contact',
        id: 3
    }
];

const NavBar = () => {

    return (
        <div className={classes.navContainer}>
            <h1 className={classes.davesPD}>Dave's Painting & Decorating</h1>
            <ul className={classes.navItems}>
                {navItems.map(item => 
                    <li 
                    className={classes.item}
                    key={item.id}
                    >
                    {item.navTitle}
                    </li>    
                )}
            </ul>
        </div>
    );
};

export default NavBar;