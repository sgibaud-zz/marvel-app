import React, { Component } from "react";


import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";
import BackDrop from "./components/BackDrop";
import HeroCarousel from "./components/HeroCarousel";
import ImageSlider from './components/marvelCat';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';
import MarvelCard from './components/marvelCard';
import SearchAppBar from './components/searchBar';

/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import "../css/layout.css";




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

          <Container>
          <ImageSlider />
          <SearchAppBar />
          <MarvelCard />
          <Footer />
          </Container>
        </div>


        


      </div>
    );
  }
}

export default App;