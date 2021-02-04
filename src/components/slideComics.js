import React, { Component } from 'react';

import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import ModalComic from './modalComic';

//import Fetch from './md5Fetch';
import md5 from 'md5';


// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SliderComics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comics: []
        }
    }

    // appel du fetch avec gestion TS
    componentDidMount() {
        //gestion du timestamp avec le hash de la clé pour l'appel de l'api
        const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        // appel du fetch 
        fetch(`https://gateway.marvel.com/v1/public/comics?format=comic&hasDigitalIssue=false&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.setState({ comics: data.data.results }));
    }

    clickComic(id, thumbnail, title) {
        this.setState({ openModalComic: true, comicId: id, title: title, comicImg: thumbnail.path + '.' + thumbnail.extension });
        //this.props.onClickComic(id, digitalId, thumbnail, title);
    }


    closeModalComic = () => {
        this.setState({ openModalComic: false });
    }
    //<ModalComic />

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 350,
            slidesToShow: 4,
            slidesToScroll: 3,
            cssEase: 'ease-in-out',
            centerPadding: '5px',
            draggable: false,
            className: 'carouselSlider',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false,

                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        //centerPadding: '10px',
                        initialSlide: 0,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '10px',
                        infinite: false,
                        dots: false
                    }
                }
            ]
        };

        // pour ne pas afficher les heros sans vignette
        const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

        return (

            <Container>
                <Row>

                    <h3 className='titleSlider'>{this.props.categorieTitle}</h3>

                    <Slider {...settings}>
                        {
                            this.state.comics
                                .filter(image => image.thumbnail.path !== noImage)
                                .map(({ id, thumbnail, title }, i) => (
                                    <Col key={i} id={id} 
                                        onClick={() => this.clickComic(id, thumbnail, title)}>
                                        <div className='transitionComic'>
                                            <img src={`${thumbnail.path}.${thumbnail.extension}`}
                                                alt={title} className='marvelCatComics' />
                                        </div>
                                    </Col>
                                ))}
                    </Slider>
                </Row>

                <ModalComic
                    openModalComic={this.state.openModalComic}
                    closeModalComic={this.closeModalComic}
                    comicId={this.state.comicId}
                    title={this.state.title}
                    comicImg={this.state.comicImg}
                />
            </Container>
        );
    }
}