import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom";


const SideNavBar = ({ close, display }) => {
  
  // variable appelant la classe CSS lors du mode responsive
  let Classes = "side-nav-bar";
  if (display) {
    Classes = "side-nav-bar open";
  }

  return (
    <nav className={Classes}>
        <div onClick={close}>
          <CloseIcon />
        </div>
        
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/personnages">Characters</Link>
          <Link to="/comics">Comics</Link>
          <Link to="/game">Game</Link>
        </div>
    </nav>
  );
};

export default SideNavBar;