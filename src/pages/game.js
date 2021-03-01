import React, { Component } from 'react';
import { Container, Row, ProgressBar } from 'react-bootstrap';
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
      choice1: 'http://wildcodeschool.draconic-graphisme.com/marvel/shadow.jpg',
      choice2: "http://wildcodeschool.draconic-graphisme.com/marvel/shadow.jpg",
      dead: 'http://wildcodeschool.draconic-graphisme.com/marvel/dead.gif',
      winner: "http://wildcodeschool.draconic-graphisme.com/marvel/gif-deadpool-2.gif",
      sideBarOpen: false,
      openModal: false,
      lifeHero: '',
      lifeEnemi: ''
    };
  }

  //function d'état lié aux composants allies.js et enemies.js
  saveChoice1 = (image, strengthHero, lifeHero) => {
    this.setState({ choice1: image, strengthHero: strengthHero, lifeHero: lifeHero});
  }

  saveChoice2 = (image, strengthEnemie, lifeEnemi) => {
    this.setState({ choice2: image, strengthEnemie: strengthEnemie, lifeEnemi: lifeEnemi});
    //alert(`${this.state.lifeEnemi}`);

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
    const { choice1, choice2, dead, lifeEnemi, lifeHero, sideBarOpen } = this.state;

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
            </div>




            <Row>
              {/* heros : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}

              <div className="containerFightersChoosen">

                <div className='heroCard'>
                  {/*<progress className="file" max="100" value="100"></progress>*/}
                  <Row className='rowProgressBar'>
                    <h4 className='titleProgressBar'>HP: </h4>
                    <ProgressBar className='progressBar' animated now={lifeHero} />
                  </Row>

                  <img className="heroFight" src={lifeHero !== 0 ? `${choice1}` : `${dead}`} alt='' />
                </div>

                <div className='btn btnGame' onClick={() => this.attackCard()}>FIGHT</div>

                {/* Enemies : Card qui affiche les points de vie ou null et condition suite état combat win or lose */}
                <div className='heroCard'>
                  <Row className='rowProgressBar'>
                    <h4 className='titleProgressBar'>HP: </h4>
                    <ProgressBar className='progressBar' animated now={lifeEnemi} />
                  </Row>
                  <img className="heroFight" src={lifeEnemi !== 0 ? `${choice2}` : `${dead}`} alt='' />
                </div>

              </div>

            </Row>

            <div className="gameRules">
              <h4 className="rulestitle">RÈGLES DU JEU</h4>
              <p className="rules">Choisis <strong>1 ALLIÉ</strong> et <strong>1 ENNEMI</strong> pour les faire combattre en cliquant sur le bouton <strong>FIGHT</strong>.<br/> 
              Cliques autant de fois sur <strong>FIGHT</strong> pour faire combattre les personnages, jusqu'à ce que la barre de vie arrive à 0.<br />
              Une fois le combat fini, tu peux choisir de nouveaux combattants.</p>
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
