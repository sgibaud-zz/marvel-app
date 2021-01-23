import React from 'react';
import md5 from 'md5';
import { Container, Row, Col } from 'react-bootstrap';


// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class DetailsComics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            character: []
        }
    }

    // appel du fetch avec gestion TS
    componentDidMount() {
        //gestion du timestamp avec le hash de la clé pour l'appel de l'api
        const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
        //const id = this.props.match.params.slug;

        // appel du fetch 
        fetch(`https://gateway.marvel.com/v1/public/characters/'${this.props.match.params.slug}'?ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            //.then(data => console.log({ character: data.data.results }))
            .then(data => this.setState({ character: data.data.results }));
    }


    render() {
        return (
            <Container>
                <>
                    {
                        this.state.character
                            //.filter(image => image.thumbnail.path !== noImage)
                            .map(({ name, thumbnail, description, ComicList, resourceURI }, i) => (

                                <Row key={i}>
                                    <Col>
                                        <img src={`${thumbnail.path}.${thumbnail.extension}`}
                                            alt={name}  />
                                    </Col>
                                    <Row>
                                        <Col><h2>{name}</h2>
                                            <p>{description}</p>
                                            <p>{resourceURI}</p>
                                            <p>READ PROFILE</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p>{ComicList}</p>
                                    </Row>
                                </Row>
                            ))}
                </>
            </Container>
        )
    }
}

export default DetailsComics;