import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';



class Comics extends Component {
  state = {
    sideBarOpen: false
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
        <MarvelCard cardTitle="Les comics Marvel" />

        <Footer />
      </Container>

    );
  }
}

export default Comics;