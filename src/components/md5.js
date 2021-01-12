import React from 'react';
import { Component } from 'react';
import md5 from 'md5';

class Fetch extends Component {
    componentDidMount() {
        const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
    
        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.setState({ character: data.data.results }));
    }

    render(){
        return(
            <>
            <p>tes md5</p>
            </>
        )
    }
}

export default Fetch;