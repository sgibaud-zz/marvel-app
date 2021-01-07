import React from "react";
import "../css/layout.css";
import MenuIcon from '@material-ui/icons/Menu';
import Home from '../pages/home.js';
import Personnages from '../pages/personnage';






const NavBar = ({ open }) => {
  return (
    <nav className="nav-bar">
      <picture id='logo' className='nav-logo'></picture>
      <div className="nav-space" />
      <div className="nav-items">
        <ul>
        <input id="searchBar" type="text" placeholder="Rechercher"></input>
        <li><a href={<Home />}>Accueil</a></li>
        <li><a href={<Personnages />}>Personnages</a></li>
        <li><a href="../pages/createur.js">Créateurs</a></li>
        </ul>
      </div>
      <div onClick={open} className="nav-icon">
        <MenuIcon fontSize="large"/>
      </div>
    </nav>
  );
};

export default NavBar;