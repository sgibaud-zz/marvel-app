import React, { Component } from 'react';

import md5 from 'md5';



class Testapi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: []
        }
    }

    /*componentDidMount() {
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=1959e8a64b9daff6def9e57305fa592f&hash=af36e8e343eb580639f5c42449a7ab13')
            .then(resp => resp.json())
            .then(data => this.setState({ character: data.data.results }));
        //.then(data => console.log({character: data.code}));           
    }*/



    componentDidMount() {
        const timestamp = Number(Date.now());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
    
        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.setState({ character: data.data.results }));
    }


    render() {
        return (
            <div>
                {this.state.character.map((m, i) => (
                    <div key={i}>
                        <h2>{m.name}</h2>
                        <p>{m.stories.items.length}</p>
                        <p>{m.comics.items.length}</p>
                        <p>{m.series.items.length}</p>
                        <img src={`${m.thumbnail.path}.${m.thumbnail.extension}`} alt='' />
                    </div>
                ))}
            </div>
        )
    }
}


export default Testapi;