import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Allies from '../components/allies';
import Enemies from '../components/enemies';
import Footer from '../components/footer';
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";

import '../css/searchBarstyle.css';
import '../css/sliderCarousel.css';


class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      choice1: 'http://graphisme.draconic-graphisme.com/marvel/shadow.jpg',
      choice2: "http://graphisme.draconic-graphisme.com/marvel/shadow.jpg",
      sideBarOpen: false,
    openModal: false
    };
  }

  saveChoice1 = (image) => {
    this.setState({ choice1: image });
  }

  saveChoice2 = (image) => {
    this.setState({ choice2: image });
    //alert('tests');
  }

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
      <>
      <Container>
        <>

        <div>
          <NavBar open={this.handleOpen} />

          <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        </div>
          <Row>
            <div className='heroCard'>
              <img className="heroFight" src={this.state.choice1} alt='' />
              <button className='btn'>PLAY</button>
              <img className="heroFight" src={this.state.choice2} alt='' />
            </div>
          </Row>

          <h4 className='titleSlider textCenter'>Alliés</h4>
          <Allies saveChoice1={this.saveChoice1} />
          
          <h4 className='titleSlider textCenter'>Ennemis</h4>
          <Enemies saveChoice2={this.saveChoice2} />

        </>
      </Container>

      <Footer />
      </>
    )
  }
}


export default Game;
