import React, { Component } from 'react';

import '../css/searchBarstyle.css';


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
          .then((data) => this.setState({allies:data}));
      };


    render() {
        return (
                <>
                    {
                        this.state.allies != null &&
                        this.state.allies.map((m, i) => 
                        <>
                            <img id="choiceAllie" 
                            onClick={() => this.props.saveChoice1()} 
                            key={i} src={m.image} alt=''/>
                            <p>{m.strength}</p>
                            <p>{m.energy}</p>
                        </>
                        )
                    }
                </>
        )
    }
}


export default Allies;
