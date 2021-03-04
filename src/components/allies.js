import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../css/sliderCarousel.css';


class Allies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allies: null,
    };
  }

  // appel de l'api au chargement du Composant
  // mise à jour du state de allies avec le tableau de l'api 
  componentDidMount = () => {
    fetch("https://marvel-b5afa-default-rtdb.firebaseio.com/character/allies.json") //database créée sur sur firebase
      .then((resp) => resp.json())
      .then((data) => this.setState({ allies: data }));
  };


  render() {

    // si le tableau est retourné par l'api alors j'affiche les 5 heros alliés sur ma page
    // j'utilise un .map qui parcourt le tableau et affiche l'image et les caractéristiques de chaque allié
    // sur le click de l'image, j'envoi les info du héro selectionné sur le composant parent (Game)

    return (
      
        <div className="containerFightersHero">
          {
            this.state.allies != null &&
            this.state.allies.map(({ image, durability, strength, id, lifeHero }, i) =>
              <div>
                <img className="transitionGame" id={id}
                  onClick={() => this.props.saveChoice1(image, strength, lifeHero)} src={image}
                  key={i} alt='' />
                <Row className='characteristic'>
                  <h5 className='characteristicBase'>Fighting skills: {strength}</h5>
                  <h5 className='characteristicBase'>Life: {durability}</h5>
                </Row>
              </div>
            )
          }
        </div>

    )
  }
}

export default Allies;
