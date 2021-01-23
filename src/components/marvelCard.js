import React from 'react';
import '../css/marvelCard.css';
import Container from 'react-bootstrap/Container';
import md5 from 'md5';
import Modal from './modal';




//Modal.setAppElement('#root')

class MarvelCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        }

    }



    componentDidMount() {
        const timestamp = Number(Date.now());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
    
        fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}&limit=20`)
            .then(resp => resp.json())
            .then(data => this.setState({ images: data.data.results }));
            console.log(this.state.searchHero)
    }

clickCard (id) {
    this.props.onClickCard(id);
}

    render() {

const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

    return (
        <Container>
            <div>
                <div>
                    <h3 className="titleSlider textCenter">{this.props.cardTitle}</h3>
                    
                    <div className="cardContainer">

                        
                        {
                            this.state.images
                            .filter(image => image.thumbnail.path !== noImage)
                            .map(({id, thumbnail, name}, i) => (
                            <picture key={i} id={id} onClick={() => this.clickCard(id)} >                                
                                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard'/>
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