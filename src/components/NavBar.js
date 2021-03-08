import React from "react";
import "../css/layout.css";
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";



const NavBar = ({ open }) => {
  return (
    <nav className="nav-bar">
      <picture className='nav-logo logo'></picture>
      <div className="nav-space" />
      <div className="nav-items">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/personnages">Characters</Link>
          <Link to="/comics">Comics</Link>
          <Link to="/game">Game</Link>
        </div>
      </div>
      <div onClick={open} className="nav-icon">
        <MenuIcon fontSize="large" />
      </div>
    </nav>
  );
};

export default NavBar;