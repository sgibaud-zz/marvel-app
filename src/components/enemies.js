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
    fetch("https://marvel-api-81035-default-rtdb.firebaseio.com/character/enemies.json") //database créée sur sur firebase
      .then((resp) => resp.json())
      .then((data) => this.setState({ enemies: data }));
  };


  render() {

    // si le tableau est retourné par l'api alors j'affiche les 5 heros 'méchants' sur ma page
    // j'utilise un .map qui parcourt le tableau et affiche l'image et les caractéristiques de chaque 'méchant'
    // sur le click de l'image, j'envoi les info du 'méchant' selectionné sur le composant parent (Game)

    return (
      <Row>
        <>

          {
            this.state.enemies != null &&
            this.state.enemies.map(({ image, durability, strength, id, energy }, i) =>
              <>
                <img key={i} id={id} className="transitionGame" onClick={() => this.props.saveChoice2(image, durability, strength)} src={image} alt='' />
                <p>{strength}</p>
                <p>{energy}</p>
              </>
            )
          }
        </>
      </Row>
    )
  }
}


export default Enemies;
