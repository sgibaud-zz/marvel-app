import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../css/searchBarstyle.css';
import '../css/sliderCarousel.css';


class Allies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allies: null,
    };
  }

  componentDidMount = () => {
    fetch("https://marvel-api-81035-default-rtdb.firebaseio.com/character/allies.json")
      .then((resp) => resp.json())
      .then((data) => this.setState({ allies: data }));
  };


  render() {
    return (
      <Row>
        <>
          
          
            {
              this.state.allies != null &&
              this.state.allies.map((m, i) =>
                <>
                  <img className="transitionGame" id={m.id}
                    onClick={() => this.props.saveChoice1(m.image)} src={m.image}
                    key={i} alt='' />
                  <p>{m.strength}</p>
                  <p>{m.energy}</p>
                </>
              )
            }
         
        </>
      </Row >
    )
  }
}


export default Allies;
