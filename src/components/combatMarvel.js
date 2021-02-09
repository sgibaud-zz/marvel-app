import React, { Component } from "react";

class Combat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fight: null
    };
  }

  componentDidMount = () => {

    fetch("https://marvel-api-81035-default-rtdb.firebaseio.com/character.json")
      .then((resp) => resp.json())
      .then((data) => this.setState({fight:data}));
  };

  render() {
    return (
      <>
        {this.state.fight != null &&
          this.state.fight.map((m, i) => <img key={i} src={m.image} alt=''/>)}
      </>
    );
  }
}
export default Combat;
