import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

//component Marvel
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import MarvelModal from '../components/modal';


//Import CSS
import '../css/sliderCarousel.css';

class Personnages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false,
    };
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

        <Footer />

      </Container>
    );
  }
}

export default Personnages;