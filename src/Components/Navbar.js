import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/events" activeClassName="active">Available Events</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
