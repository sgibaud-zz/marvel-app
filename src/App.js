import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";
import BackDrop from "./components/BackDrop";
import "./components/layout.css";
import HeroCarousel from "./components/HeroCarousel";




class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  
  render() {
    return (
      <div>

        <div>
          <NavBar open={this.handleOpen} />
          {this.state.sideBarOpen ? (
            <div>
              <BackDrop close={this.handleClose} />{" "}
            </div>
          ) : null}
          <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        </div>
        
        <div>
          <HeroCarousel />
        </div>


      </div>
    );
  }
}

export default App;