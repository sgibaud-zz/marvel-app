import React, { Component } from 'react';
import md5 from 'md5';
import Slider from 'react-slick';
import { Container, Col } from 'react-bootstrap';
import MarvelModal from './modal';

// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//const characterMarvel = ['thor', 'spider-man', 'wolverine'];

export default class SliderCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }


    // appel du fetch avec gestion timestamp
    componentDidMount() {
        //gestion du timestamp avec le hash de la clé pour l'appel de l'api
        const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        // appel du fetch 
        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=-modified&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.setState({ images: data.data.results }));
    }

    componentDidUpdate() {
        //localStorage.getItem('images') && this.setState({ images: JSON.parse(localStorage.getItem('images')) });
        //localStorage.setItem('images', JSON.stringify(nextState.images));
        localStorage.setItem('imagesDate', Date.now());
    }



    //Function qui met à jour les states et ouvre la modal
    clickCard(id, name, thumbnail, description) {
        this.setState({ openModalCharacter: true, characterId: id, heroName: name, characterImg: thumbnail.path + '.' + thumbnail.extension, description: description });
    }

    //Function qui met à jour le state et ferme la modal
    closeModalCharacter = () => {
        this.setState({ openModalCharacter: false });
    }


    render() {

        //paramètres du slider
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
            initialeState: 0,
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

        // pour ne pas afficher les heros sans images
        const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
        const { images } = this.state;
        //map qui génére le slider
        //function clickCard qui renvoi les paramètres pour les passer en props dans la modal

        return (

            <Container>


                <h3 className='titleSlider'>{this.props.categorieTitle}</h3>

                <Slider {...settings}>
                    {
                        images
                            .filter(image => image.thumbnail.path !== noImage && image.description !== '')
                            .map(({ id, thumbnail, name, description }, i) => (
                                <Col key={i} id={id} description={description}
                                    onClick={() => this.clickCard(id, name, thumbnail, description)}>
                                    <div className='transition'>
                                        <img src={`${thumbnail.path}.${thumbnail.extension}`}
                                            alt={name}
                                            className='marvelCatImg' />
                                        <h4 className='overlay'>{name}</h4>
                                    </div>
                                </Col>
                            ))}
                </Slider>

                <MarvelModal //On transmet par des props les states à l'enfant (modal.js)
                    openModalCharacter={this.state.openModalCharacter}
                    closeModalCharacter={this.closeModalCharacter}
                    characterId={this.state.characterId}
                    heroName={this.state.heroName}
                    characterImg={this.state.characterImg}
                    description={this.state.description}
                />
            </Container>
        );
    }
}