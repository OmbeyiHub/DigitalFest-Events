import React from 'react';
import './AboutUs.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to Event Finder! We're passionate about connecting people to exciting events. Our mission is to make event discovery effortless. Explore concerts, workshops, and more. <br />
        Find us on all platforms  @eventfinder <br/>
       Contacts:+2547378904532
      </p>
      <p><FontAwesomeIcon icon={faPhone} /></p>
     

    </div>
  );
};

export default AboutUs;