import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../css/sliderCarousel.css';


class Enemies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      enemies: null
    };
  }

  // appel de l'api au chargement du Composant
  // mise à jour du state du 'méchant' avec le tableau de l'api 
  componentDidMount = () => {
    fetch("https://marvel-b5afa-default-rtdb.firebaseio.com/character/enemies.json") //database créée sur sur firebase
      .then((resp) => resp.json())
      .then((data) => this.setState({ enemies: data }));
  };


  render() {

    // si le tableau est retourné par l'api alors j'affiche les 5 heros 'méchants' sur ma page
    // j'utilise un .map qui parcourt le tableau et affiche l'image et les caractéristiques de chaque 'méchant'
    // sur le click de l'image, j'envoi les info du 'méchant' selectionné sur le composant parent (Game)

    return (
      
        <div className="containerFightersEnemi">
          {
            this.state.enemies != null &&
            this.state.enemies.map(({ image, durability, strength, id, lifeEnemi }, i) =>
              <div>
                <img key={i} id={id} className="transitionGame" onClick={() => this.props.saveChoice2(image, strength, lifeEnemi)} src={image} alt='' />
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


export default Enemies;
