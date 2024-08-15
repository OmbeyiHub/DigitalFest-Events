import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faMagnifyingGlass,faAddressCard } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link"><FontAwesomeIcon icon={faHome} />Home</Link></li>
        <li className="navbar-item"><Link to="/events" className="navbar-link"><FontAwesomeIcon icon={faMagnifyingGlass} />Available Events</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link"><FontAwesomeIcon icon={faAddressCard} />About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
