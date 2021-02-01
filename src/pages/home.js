import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import HeroCarousel from "../components/HeroCarousel";
import SliderCharacter from '../components/slideCharacter';
import SliderComics from '../components/slideComics';
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelModal from '../components/modal';
import ModalComic from '../components/modalComic';

/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';
import "../css/layout.css";
import '../css/sliderCarousel.css';




class Home extends Component {
  state = {
    sideBarOpen: false,
    openModal: false,
    //characterId: '',
    //heroName: '',
    //characterImg: {},
    //description: '',
    //comicId: '',
    //comicImg: {},
    //title: ''
  };

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

/*  openModalWithId(id, name, thumbnail, description) {
    this.setState({ openModalCharacter: true, characterId: id, heroName: name, characterImg: thumbnail, description: description });
  }

  openModalWithComic(digitalId, title, thumbnail) {
    //alert('test');
    this.setState({ openModalComic: true, comicDigital: digitalId, title: title, comicImg: thumbnail });
  }*/

/*  closeModalCharacter = () => {
    this.setState({ openModalCharacter: false });
  }

  closeModalComic = () => {
    this.setState({ openModalComic: false });
  }*/

  /*
        <MarvelModal
          openModalCharacter={this.state.openModalCharacter}
          closeModalCharacter={this.closeModalCharacter}
          characterId={this.state.characterId}
          heroName={this.state.heroName}
          characterImg={this.state.characterImg}
          description={this.state.description}
        />

        <ModalComic
          openModalComic={this.state.openModalComic}
          closeModalComic={this.closeModalComic}
          comicDigital={this.state.digitalId}
          title={this.state.title}
          comicImg={this.state.comicImg}
        />

 onClickCard={(id, name, thumbnail, description) =>
            this.openModalWithId(id, name, thumbnail.path + '.' + thumbnail.extension, description)}


  */


  render() {
    return (
      <Container>
        <div>
          <NavBar open={this.handleOpen} />
          {this.state.sideBarOpen ? (
            <div>
              <BackDrop close={this.handleClose} />{" "}
            </div>
          ) : null}
          <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />
        </div>

        <HeroCarousel />


        <SliderCharacter categorieTitle="Les personnages"
         
        />
        <SliderComics categorieTitle="Les comics"
         /* onClickComic={(id, title, thumbnail) => this.openModalWithComic(digitalId, title, thumbnail.path + '.' + thumbnail.extension)}*/ 
         />








        <Footer />
      </Container>
    );
  }
}

export default Home;