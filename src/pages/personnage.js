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
    characterId:null
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

openModalWithId(id){
  alert(id);
  this.setState({openModal:true, characterId:id})
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
        <MarvelCard cardTitle="Les personnages Marvel" onClickCard={(id)=> this.openModalWithId(id)}/>

        <MarvelModal openModal={this.state.openModal} characterId={this.state.characterId}/>
        <Footer />
      </Container>

    );
  }
}

export default Personnages;