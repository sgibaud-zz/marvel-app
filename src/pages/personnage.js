import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

//component Marvel
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import MarvelModal from '../components/modal';
import SearchCharacter from '../components/SearchCharacter';
import md5 from 'md5';


//Import CSS
import '../css/sliderCarousel.css';
import '../css/searchBarstyle.css';

//Commentaires idem ../pages/comics.js
class Personnages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false,
      researchResult: null,
      isContentshow: true
    };
  }



  handleSearch = (inputText) => {
    const timestamp = Number(new Date());
    const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
    const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
    const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

    // appel du fetch 
    fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputText}&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
      .then(resp => resp.json())
      .then(data => this.displayItem(data));
  }

  displayItem = (data) => {
    this.setState({ researchResult: data.data.results })
    this.setState({ isContentshow: false });
  }

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };


  openModalWithId(id, name, thumbnail, description) {
    this.setState({ openModalCharacter: true, characterId: id, heroName: name, characterImg: thumbnail, description: description });
  }

  closeModalCharacter = () => {
    this.setState({ openModalCharacter: false });
  }


  clickCard(id, name, thumbnail, description) {
    this.openModalWithId(id, name, thumbnail.path + '.' + thumbnail.extension, description);
  }


  render() {

    const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
    const noGif = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708';


    return (
      <Container>
        <div>
          <NavBar open={this.handleOpen} />
          <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        </div>

        <SearchCharacter
          handleSearch={this.handleSearch}
        />

        <div className="cardContainer">
          {
            this.state.researchResult != null &&
            this.state.researchResult
              .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif && image.description !== '')
              .map(({ id, thumbnail, name, description }, i) => (
                <picture className='transitionCharacter' key={i} id={id} description={description}
                  onClick={() => this.clickCard(id, name, thumbnail, description)} >
                  <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard' />
                  <h4 className='overlayCharacter titleName'>{name}</h4>
                </picture>
              ))}



        </div>

        {
          this.state.researchResult === '' &&
          <p id="noResult">Nous n'avons pas trouvé votre héro... Recommencez...</p>
        }


        {
          this.state.isContentshow === true &&
          <MarvelCard cardTitle="Marvel Characters"
            onClickCard={(id, name, thumbnail, description) => this.openModalWithId(id, name, thumbnail.path + '.' + thumbnail.extension, description)} />
        }

        <MarvelModal
          openModalCharacter={this.state.openModalCharacter}
          closeModalCharacter={this.closeModalCharacter}
          characterId={this.state.characterId}
          heroName={this.state.heroName}
          characterImg={this.state.characterImg}
          description={this.state.description}
        />

        <Footer />

      </Container>
    );
  }
}

export default Personnages;