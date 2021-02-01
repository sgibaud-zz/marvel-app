import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import MarvelModal from '../components/modal';
<<<<<<< HEAD




=======
>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8


class Personnages extends Component {
  state = {
<<<<<<< HEAD
    sideBarOpen: false,
    openModal: false,
    characterId: null,
    heroName: null,
    characterImg:null,
    description:null,
=======
    //sideBarOpen: false,
    //openModal: false,
    //characterId: '',
    //heroName: '',
    //characterImg: {},
    //description: ''
>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8
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

  openModalWithId(id, name, thumbnail, description) {
<<<<<<< HEAD
    this.setState({ openModal: true, characterId: id, heroName: name, characterImg:thumbnail, description:description })
  }

  closeModal = () => {
    this.setState({ openModal: false })
  }


=======
    this.setState({ openModalCharacter: true, characterId: id, heroName: name, characterImg: thumbnail, description: description });
  }

  closeModalCharacter = () => {
    this.setState({ openModalCharacter: false });
  }

>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8

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
<<<<<<< HEAD
        <MarvelCard cardTitle="Les personnages Marvel" onClickCard={(id, name, thumbnail, description) => this.openModalWithId(id, name, thumbnail, description)} />
=======

        <MarvelCard cardTitle="Les personnages Marvel"
          onClickCard={(id, name, thumbnail, description) => this.openModalWithId(id, name, thumbnail.path + '.' + thumbnail.extension, description)} />

        <MarvelModal
          openModalCharacter={this.state.openModalCharacter}
          closeModalCharacter={this.closeModalCharacter}
          characterId={this.state.characterId}
          heroName={this.state.heroName}
          characterImg={this.state.characterImg}
          description={this.state.description}
        />
>>>>>>> f56a478e0c6c335465c247be899d51437b6704f8

        <MarvelModal 
          openModal={this.state.openModal}
          closeModal={this.closeModal}
          characterId={this.state.characterId}
          heroName={this.state.heroName}
          characterImg={this.state.thumbnail}
          description={this.state.description}
         />
        <Footer />
      </Container>
    );
  }
}

export default Personnages;