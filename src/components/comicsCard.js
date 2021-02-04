import React from 'react';
import Container from 'react-bootstrap/Container';
import md5 from 'md5';

//Import CSS
import '../css/sliderCarousel.css'


class ComicsCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: []

        }

    }

    componentDidMount() {
        const timestamp = Number(Date.now());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        fetch(`https://gateway.marvel.com/v1/public/comics?format=comic&hasDigitalIssue=false&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            //.then(data => console.log({ images: data.data.results }))
            .then(data => this.setState({ comics: data.data.results }));
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
                                this.state.comics
                                    .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif && image.description !== '')
                                    .map(({ id, thumbnail, name, description }, i) => (
                                        
                                            <picture className='transitionCharacter' key={i} id={id} description={description}
                                                onClick={() => this.clickCard(id, name, thumbnail, description)}  >
                                                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard' />
                                            </picture>
                                        
                                    ))}

                        </div>
                    </div>

                </div>

            </Container>
        )
    }
};






export default ComicsCard;