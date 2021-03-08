import React, { Component } from 'react';
import { Container, Row, ProgressBar, Col } from 'react-bootstrap';
import Allies from '../components/allies';
import Enemies from '../components/enemies';
import Footer from '../components/footer';
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import ModalRule from '../components/modalRule';

import Fight from "../images/futur.png"

import '../css/searchBarstyle.css';
import '../css/sliderCarousel.css';
import '../css/style.css';



class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      choice1: 'http://wildcodeschool.draconic-graphisme.com/marvel/shadow.jpg',
      choice2: "http://wildcodeschool.draconic-graphisme.com/marvel/shadow.jpg",
      dead: 'http://wildcodeschool.draconic-graphisme.com/marvel/dead.gif',
      winner: "http://wildcodeschool.draconic-graphisme.com/marvel/gif-deadpool-2.gif",
      sideBarOpen: false,

      lifeHero: '',
      lifeEnemi: ''
    };
  }

  //function d'état lié aux composants allies.js et enemies.js
  saveChoice1 = (image, strengthHero, lifeHero) => {
    this.setState({ choice1: image, strengthHero: strengthHero, lifeHero: lifeHero });
  }

  saveChoice2 = (image, strengthEnemie, lifeEnemi) => {
    this.setState({ choice2: image, strengthEnemie: strengthEnemie, lifeEnemi: lifeEnemi });
    //alert(`${this.state.lifeEnemi}`);

  }

  modal() {
    this.setState({ openModal: true });
  }

  closeModal = () => {
    this.setState({ openModal: false });
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


  //function fight hero <-> enemies
  attackCard() {
    //jet de dé random
    const rollDice = () => Math.floor(Math.random() * 12);
    const dice1 = rollDice();
    const dice2 = rollDice();

    // Conditions de réussite et de dégâts
    if (
      dice1 <= this.state.strengthHero &&
      dice2 <= this.state.strengthEnemie
    ) {
      this.setState({
        lifeHero: this.state.lifeHero - 20,
        lifeEnemi: this.state.lifeEnemi - 20
      });
    }
    if (dice1 > this.state.strengthHero && dice2 <= this.state.strengthEnemie) {
      this.setState({ lifeHero: this.state.lifeHero - 20 });
    }
    if (dice1 <= this.state.strengthHero && dice2 > this.state.strengthEnemie) {
      this.setState({ lifeEnemi: this.state.lifeEnemi - 20 });
    }
  }

  render() {

    //variable pour initialiser le this.state
    const { choice1, choice2, dead, lifeEnemi, lifeHero, sideBarOpen, openModal } = this.state;

    return (
      <>
        <Container>
          <>

            <div>
              <NavBar open={this.handleOpen} />

              <SideNavBar close={this.handleClose} display={sideBarOpen} />
            </div>

            <div className="titleGame">
              <img className="imageGame" src={Fight} alt='picto fight' />
              <div className='gameRules btn-center'>
                <div className="btn-rule" onClick={() => this.modal()}>Game rules</div>
              </div>
            </div>



            <Row>
              {/* heros : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}

              <div className="containerFightersChoosen">

                <div className='heroCard'>
                  <h4 className='titleSlider'>ALLIES</h4>


                  <img className="heroFight" src={lifeHero !== 0 ? `${choice1}` : `${dead}`} alt='' />

                  <Row className='rowProgressBar'>
                    <h4 className='titleProgressBar'>HP: </h4>
                    <ProgressBar className='progressBar' animated now={lifeHero} />
                  </Row>
                </div>

                <div className='btn btnGame' onClick={() => this.attackCard()}>FIGHT</div>

                {/* Enemies : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}
                <div className='heroCard'>
                  <h4 className='titleSlider'>ENEMIES</h4>

                  <img className="heroFight" src={lifeEnemi !== 0 ? `${choice2}` : `${dead}`} alt='' />

                  <Row className='rowProgressBar'>
                    <h4 className='titleProgressBar'>HP: </h4>
                    <ProgressBar className='progressBar' animated now={lifeEnemi} />
                  </Row>
                </div>

              </div>

            </Row>

            {/* Card heros and enemies */}
            <Row>

                <Col>
                  <Allies saveChoice1={this.saveChoice1} />
                </Col>

                <Col>
                  <Enemies saveChoice2={this.saveChoice2} />
                </Col>
              
            </Row>

            <ModalRule
              openModal={openModal}
              closeModal={this.closeModal} />
          </>
        </Container>

        <Footer />
      </>
    )
  }
}


export default Game;
