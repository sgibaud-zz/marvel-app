import React from 'react';
import { Component } from 'react';
import md5 from 'md5';


const convertMd5 = require('md5');
//console.log(convertMd5('message'));

//const timestamp = Date.now();
const timestamp = + new Date();
console.log(timestamp);


const calcul = timestamp+"b33c027ee2ac943837154a74921e893c303b6b17"+"1959e8a64b9daff6def9e57305fa592";


class Fetch extends Component {
    fetch("https://gateway.marvel.com/v1/public/characters?ts="+timestamp+"&apikey=1959e8a64b9daff6def9e57305fa592f&hash="+hash)


    /*const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;

    const hash = '1959e8a64b9daff6def9e57305fa592f';
    
    const date = new Date();
    const timestamp = date.getTime();
    
        searchMovie(){
        let searchText = this.state.searchText; // stocker le texte dans une variable;

        fetch("https://gateway.marvel.com/v1/public/characters?ts=+{"timestamp"}+&apikey=1959e8a64b9daff6def9e57305fa592f&hash="hash")

        
            .then((resp)=> resp.json())
            .then((data)=> this.getMovie(data));
    }
        */
  


    render(){
        return(
            <>
            <h1>titre md5</h1>
            </>
        )
    }
}

export default Fetch;