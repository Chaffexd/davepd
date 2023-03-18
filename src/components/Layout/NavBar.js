import React from 'react';
import classes from './NavBar.module.css';

const navItems = [
    {
        navTitle: 'About',
        id: 0,
        href: '#about'
    },
    {
        navTitle: 'Residential',
        id: 1,
        href: '#residential'
    },
    {
        navTitle: 'Commericial',
        id: 2,
        href: '#residential'
    },
    {
        navTitle:'Contact',
        id: 3,
        href: '#contact'
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
                    <a href={item.href} className={classes.navLi}>{item.navTitle}</a>
                    </li>    
                )}
            </ul>
        </div>
    );
};

export default NavBar;