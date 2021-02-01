import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import MarvelModal from '../components/modal';






class Personnages extends Component {
  state = {
    sideBarOpen: false,
    openModal: false,
    characterId: null,
    heroName: null,
    characterImg:null,
    description:null,
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
    this.setState({ openModal: true, characterId: id, heroName: name, characterImg:thumbnail, description:description })
  }

  closeModal = () => {
    this.setState({ openModal: false })
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
        <MarvelCard cardTitle="Les personnages Marvel" onClickCard={(id, name, thumbnail, description) => this.openModalWithId(id, name, thumbnail, description)} />

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