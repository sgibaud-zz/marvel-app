import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

//component Marvel
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import HeroCarousel from "../components/HeroCarousel";
import SliderCharacter from '../components/slideCharacter';
import SliderComics from '../components/slideComics';
import Footer from '../components/footer';
//import Combat from  '../components/combatMarvel';

/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';
import "../css/layout.css";
import '../css/sliderCarousel.css';




class Home extends Component {
  state = {
    sideBarOpen: false,
    openModal: false
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
      <Container>
        <div>
          <NavBar open={this.handleOpen} />
          <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        </div>
        <HeroCarousel />

        <SliderCharacter categorieTitle="Marvel Characters" />
        <SliderComics categorieTitle="Marvel Comics" />

        <Footer />
        
      </Container>
    );
  }
}

export default Home;