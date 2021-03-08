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

    // appel de l'api au chargement du Composant
    // mise à jour du state des couvertures de Comics avec le tableau de l'api

    //ComponentDidMount se compose de 3 vaiables : un TimeStamp (obligatoire pour l'Api Marvel), 
    //2 variables Key dont les infos sont issues d'un fichier environnement en amont du dossier
    //1 variable Hash pour concaténer les 3 variables en amont
    //Ces 3 variables sont injectées en écriture objet dans l'adresse du fetch   
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

    //Initialisation de la function clickCard.
    //ClickCard appelle la function onClickCard qui fait passer des informations via les paramètres de la function vers le composant parent (comics.js).
    clickCard(id, name, thumbnail, urls) {
        this.props.onClickCard(id, name, thumbnail, urls);
    }

    render() {
        //2 variables pour filtrer les informations non interessantes
        const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
        const noGif = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708';


        //On initialise une condition de filtrage sur les variables en amont. 
        //On utilise un map qui affiche les couvertures des comics.
        //Lors du click sur l'image on appelle la fonction 'clickCard' à laquelle on passe les infos du comics en paramètre.
        return (
            <Container>
                <div>
                    <div>
                        <h3 className="titleSlider textCenter">{this.props.cardTitle}</h3>

                        <div className="cardContainer margin-card">

                            {
                                this.state.comics
                                    .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif)
                                    .map(({id, thumbnail, title, urls}, i) => (
                                        <picture className='transitionCharacter' key={i} id={id} urls={`${urls[0].url}`}
                                            onClick={() => this.clickCard(id, title, thumbnail, urls)}  >
                                            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} className='comicsCard' />
                                    
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