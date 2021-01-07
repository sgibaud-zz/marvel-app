import React from "react";
import "../css/layout.css";
import CloseIcon from '@material-ui/icons/Close';


const SideNavBar = ({ close, display }) => {
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={close}>
          <CloseIcon />
        </li>
        <input id="searchBarMobile" type="text" placeholder="Rechercher"></input>
        <li><a href="/">Accueil</a></li>
        <li><a href="/">Personnages</a></li>
        <li><a href="/">Créateurs</a></li>
      </ul>
    </nav>
  );
};

export default SideNavBar;