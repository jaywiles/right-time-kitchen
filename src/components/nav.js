// imports
import React from 'react';

// other components

// styles
import '../styles/nav.css';

const Nav = () => {
  return (
    <div className="main-nav">
      <span className="nav-button nav-left">Home</span>
      <span className="nav-button nav-left">About</span>
      <span className="nav-button nav-left">Contact</span>
      <span className="nav-button nav-center">Right Time Kitchen</span>
      <span className="nav-button nav-right">Logout</span>
    </div>
  )
}

export default Nav;