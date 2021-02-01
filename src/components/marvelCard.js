import React from 'react';
import Container from 'react-bootstrap/Container';
import md5 from 'md5';
import Modal from './modal';

//Import CSS
import '../css/marvelCard.css';
import '../css/sliderCarousel.css'


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

        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=100`)
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

                        <div className="cardContainer">

                            {
                                this.state.character
                                    .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif)
                                    .map(({ id, thumbnail, name, description }, i) => (
                                       <picture key={i} id={id} description={description} 
                                       onClick={() => this.clickCard(id,name, thumbnail, description)}  >
                                            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard' />
                                        </picture>
                                    ))}

                        </div>
                    </div>

                    <Modal />
                </div>

            </Container>
        )
    }
};






export default MarvelCard;