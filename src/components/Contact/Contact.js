import React from 'react';

import classes from './Contact.module.css';

const contactUsItems = [
    {
        source: require("../../assets/phone-call.png"),
        title: "Call us",
        text: "07988107552",
        id: 0,
        alt: "phone icon"
    },
    {
        source: require("../../assets/whatsapp.png"),
        title: "Whatsapp",
        text: "07988107552",
        id: 1,
        alt: "whatsapp icon"
    },
    {
        source: require("../../assets/location.png"),
        title: "Office Hours",
        text: "Mon - Sat 8am - 8pm",
        id: 2,
        alt: "office icon"
    },
    {
        source: require("../../assets/mail.png"),
        title: "Email",
        text: "davidchaff@hotmail.co.uk",
        id: 3,
        alt: "email icon"
    }
]

const Contact = () => {
  return (
    <div className={classes.contactContainer} id="contact">
        <h1 className={classes.title}>Contact us</h1>
        <div className={classes.contactItemContainer}>
            {contactUsItems.map(contactUsItem =>
            <div className={classes.icons} key={contactUsItem.id}>
                <img src={contactUsItem.source} alt={contactUsItem.alt} className={classes.icon} /> 
                <p>{contactUsItem.title}</p> 
                <p>{contactUsItem.text}</p>
            </div>  
            )}
        </div>
    </div>
  );
};

export default Contact;