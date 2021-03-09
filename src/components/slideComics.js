import React, { Component } from 'react';

import Slider from 'react-slick';
import { Container, Col } from 'react-bootstrap';
import ModalComic from './modalComic';

//import Fetch from './md5Fetch';
import md5 from 'md5';


// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Commentaires identiques à slideCharacter.js
export default class SliderComics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comics:[]
        }
    }

    // appel du fetch avec gestion TS
    componentDidMount=() => {
        //gestion du timestamp avec le hash de la clé pour l'appel de l'api
        const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        // appel du fetch 
        fetch(`https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&hasDigitalIssue=false&offset=10&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.setState({comics:data.data.results}));
    }

    clickComic(id, thumbnail, title, urls) {
        this.setState({ openModalComic: true, comicId: id, title: title, comicImg: thumbnail.path + '.' + thumbnail.extension, urls: urls[0].url });
    }


    closeModalComic = () => {
        this.setState({ openModalComic: false });
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 2,
            cssEase: 'ease-in-out',
            draggable: false,
            className: 'carouselSlider',
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        draggable: true, 
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        draggable: true, 
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        draggable: true, 
                    }
                },
                {
                    breakpoint: 416,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        draggable: true,
                        infinite: true, 
                    }
                },

            ]
        };

        // pour ne pas afficher les heros sans vignette
        const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';


        //map qui génére le slider
        //function clickCard qui renvoi les paramètres pour les passer en props dans la modal
        return (

            <Container>
                

                    <h3 className='titleSlider'>{this.props.categorieTitle}</h3>

                    <Slider {...settings}>
                        {
                            this.state.comics
                                .filter(image => image.thumbnail.path !== noImage)
                                .map(({ id, thumbnail, title, urls }, i) => (
                                    <Col key={i} id={id} urls={`${urls[0].url}`}
                                        onClick={() => this.clickComic(id, thumbnail, title, urls)}>
                                        <div className='transition'>
                                            <img src={`${thumbnail.path}.${thumbnail.extension}`}
                                                alt={title} className='marvelCatImg marveCatComics' />
                                        </div>
                                    </Col>
                                ))}
                    </Slider>
       

                <ModalComic
                    openModalComic={this.state.openModalComic}
                    closeModalComic={this.closeModalComic}
                    comicId={this.state.comicId}
                    title={this.state.title}
                    comicImg={this.state.comicImg}
                    urls ={this.state.urls}
                />
            </Container>
        );
    }
}