import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../css/searchBarstyle.css';
import '../css/sliderCarousel.css';


class Enemies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      enemies: null
    };
  }

  componentDidMount = () => {
    fetch("https://marvel-api-81035-default-rtdb.firebaseio.com/character/enemies.json")
      .then((resp) => resp.json())
      .then((data) => this.setState({ enemies: data }));
  };


  render() {
    return (
      <Row>
        <>
       
          {
            this.state.enemies != null &&
            this.state.enemies.map((m, i) =>
              <>
                <img key={i} id={m.id} className="transitionGame" onClick={() => this.props.saveChoice2(m.image)} src={m.image} alt='' />
                <p>{m.strength}</p>
                <p>{m.energy}</p>
              </>
            )
          }
        </>
      </Row>
    )
  }
}


export default Enemies;
