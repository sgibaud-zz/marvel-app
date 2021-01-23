import React from "react";
import "../css/layout.css";
import MenuIcon from '@material-ui/icons/Menu';






const HeroModal = ({ open }) => {
  return (

    <div className="modal-wrapper">
    <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span className="close-modal-btn">x</span>
    </div>
    <div className="modal-content">
        <div className="modal-body">
            <h4>Modal</h4>
            <p>lorem ipsim</p>
        </div>
        <div className="modal-footer">
            <button className="btn-cancel">Close</button>
        </div>
        <div onClick={open} className="nav-icon">
        <MenuIcon fontSize="large"/>
        </div>
    </div>
</div>

  );
};

export default HeroModal;