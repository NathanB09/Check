import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ username, logout, page }) => {
  return (
    <div className="nav_container">
      <ul>
        <li><Link to={`/${page}`}><button>{page}</button></Link></li>
        <li><img className='nav_logo' src="/assets/cards-logo.png" alt="card-logo" /></li>
        <li><button onClick={logout}>Logout {username}</button></li>
      </ul>
    </div>
  );
};

export default Nav;