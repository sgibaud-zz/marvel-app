import React from "react";
import "../css/layout.css";
import MenuIcon from '@material-ui/icons/Menu';

import {Link} from "react-router-dom";


const NavBar = ({ open }) => {
  return (
    <nav className="nav-bar">
      <picture className='nav-logo logo'></picture>
      <div className="nav-space" />
      <div className="nav-items">
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/personnages">Personnages</Link>
          <Link to="/comics">Comics</Link>
        </div>
      </div>
      <div onClick={open} className="nav-icon">
        <MenuIcon fontSize="large"/>
      </div>
    </nav>
  );
};

export default NavBar;