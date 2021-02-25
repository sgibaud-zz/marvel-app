import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Allies from '../components/allies';
import Enemies from '../components/enemies';
import Footer from '../components/footer';
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";

import Fight from "../images/futur.png"

import '../css/searchBarstyle.css';
import '../css/sliderCarousel.css';
import '../css/style.css';


class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      choice1: 'http://graphisme.draconic-graphisme.com/marvel/shadow.jpg',
      choice2: "http://graphisme.draconic-graphisme.com/marvel/shadow.jpg",
      dead: 'http://graphisme.draconic-graphisme.com/marvel/gif-deadpool-2.gif',
      sideBarOpen: false,
      openModal: false,
      lifeHero: '',
      lifeEnemie: ''
    };
  }

  //function d'état lié aux composants allies.js et enemies.js
  saveChoice1 = (image, lifeHero, strengthHero) => {
    this.setState({ choice1: image, lifeHero: lifeHero, strengthHero: strengthHero });
  }

  saveChoice2 = (image, lifeEnemie, strengthEnemie) => {
    this.setState({ choice2: image, lifeEnemie: lifeEnemie, strengthEnemie: strengthEnemie });
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
        lifeHero: this.state.lifeHero - 1,
        lifeEnemie: this.state.lifeEnemie - 1
      });
    }
    if (dice1 > this.state.strengthHero && dice2 <= this.state.strengthEnemie) {
      this.setState({ lifeHero: this.state.lifeHero - 1 });
    }
    if (dice1 <= this.state.strengthHero && dice2 > this.state.strengthEnemie) {
      this.setState({ lifeEnemie: this.state.lifeEnemie - 1 });
    }    
  }

  render() {

    //variable pour initialiser le this.state
    const { choice1, choice2, dead, lifeEnemie, lifeHero, sideBarOpen } = this.state;

    return (
      <>
        <Container>
          <>

            <div>
              <NavBar open={this.handleOpen} />

              <SideNavBar close={this.handleClose} display={sideBarOpen} />
            </div>

            <div className="titleGame">
              <img className="imageGame" src={Fight} alt='picto fight'/>
            </div>


    

            <Row>
                {/* heros : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}

                <div className="containerFightersChoosen">

                  <div className='heroCard'>
                    <div className='area'>{lifeHero !== 0 ? `${lifeHero}` : null}</div>
                    <img className="heroFight" src={lifeHero !== 0 ? `${choice1}` : `${dead}`} alt='' />
                  </div>

                  <button className='btn btnGame' onClick={() => this.attackCard()}>FIGHT</button>

                  {/* Enemies : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}
                  <div className='heroCard'>
                    <div className='area'>{lifeEnemie !== 0 ? `${lifeEnemie}` : null}</div>
                    <img className="heroFight" src={lifeEnemie !== 0 ? `${choice2}` : `${dead}`} alt='' />
                  </div>

                </div>
             
            </Row>

            <div className="gameRules">
              <h4 className="rulestitle">RÈGLES DU JEU</h4>
              <p className="rules">Choisis 1 ALLIÉ et 1 ENNEMI pour les faire combattre en cliquant sur le bouton FIGHT. En cliquant sur FIGHT, tu lances des attaques qui font perdre des points de vies aux héros. Le premier héro sans point de vie perd la partie.</p>
            </div>

            {/* Card heros and enemies */}

            <div className="containerAlliesandEnnemies">

              <div>
                <h4 className='titleSlider'> LES ALLIÉS</h4>
                <Allies saveChoice1={this.saveChoice1} />
              </div>

              <div>
                <h4 className='titleSlider'>LES ENNEMIS</h4>
                <Enemies saveChoice2={this.saveChoice2} />
              </div>
            </div>

          </>
        </Container>

        <Footer />
      </>
    )
  }
}


export default Game;
