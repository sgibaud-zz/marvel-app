import React, { Component } from 'react';
import Allies from '../components/allies';
import Enemies from '../components/enemies';

import '../css/searchBarstyle.css';


class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      choice1: 'https://thumbs.dreamstime.com/z/super-hero-pink-starfish-cartoon-shape-vector-illustration-143008646.jpg',
      choice2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBe1NPvkc1bGRyj8THt_EjVCEQ7zD0Z_SqA&usqp=CAU"
    };
  }

  saveChoice1 (){
    this.setState({choice1:'http://graphisme.draconic-graphisme.com/marvel/loki.jpg'});
  }

  saveChoice2 = (m.image) => {
    this.setState({choice2: m.image});
    //alert('tests');
  }


  render() {
    return (
      <>
        <div>
          <img id="choice" src={this.state.choice1} alt='' />
          <button>PLAY</button>
          <img id="choice" src={this.state.choice2} alt='' />
        </div>

        <Allies onClick={this.saveChoice1}/>
        <br></br>
        <Enemies saveChoice2={this.saveChoice2(m.image)}/>

      </>
    )
  }
}


export default Game;
