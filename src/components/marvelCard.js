import React from 'react';
import { Container } from 'react-bootstrap';
import md5 from 'md5';


//Import CSS
import '../css/sliderCarousel.css'

//Commentaires : se référer à comicsCard.js
class MarvelCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: []
        }
    }

    componentDidMount() {
        const timestamp = Number(Date.now());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        fetch(`https://gateway.marvel.com/v1/public/characters?orderBy=-modified&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=75`)
            .then(resp => resp.json())
            //.then(data => console.log({ images: data.data.results }))
            .then(data => this.setState({ character: data.data.results }));
    }


    clickCard(id, name, thumbnail, description) {
        this.props.onClickCard(id, name, thumbnail, description);
    }

    render() {

        const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
        const noGif = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708';

        return (
            <Container>
                <div>
                    <div>
                        <h3 className="titleSlider textCenter">{this.props.cardTitle}</h3>

                        <div className="cardContainer margin-card">

                            {
                                this.state.character
                                    .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif && image.description !== '')
                                    .map(({ id, thumbnail, name, description }, i) => (

                                        <div className='transitionCharacter' key={i} id={id} description={description}
                                            onClick={() => this.clickCard(id, name, thumbnail, description)}  >

                                            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard' />
                                            <h4 className='overlayCharacter'>{name}</h4>
                                        </div>

                                    ))}

                        </div>
                    </div>

                </div>

            </Container>
        )
    }
};

export default MarvelCard;