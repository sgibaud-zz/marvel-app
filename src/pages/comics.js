import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

//component Marvel
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Footer from '../components/footer';
import ComicsCard from '../components/comicsCard';
import ModalComic from '../components/modalComic';


class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false
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


  clickComic(id, title, thumbnail) {
    this.setState({ openModalComic: true, comicId: id, title: title, comicImg: thumbnail});
  }


  closeModalComic = () => {
    this.setState({ openModalComic: false });
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

        <ComicsCard cardTitle="Les comics Marvel"
          onClickCard={(id, title, thumbnail) => this.clickComic(id, title, thumbnail.path + '.' + thumbnail.extension)} />

        <ModalComic
          openModalComic={this.state.openModalComic}
          closeModalComic={this.closeModalComic}
          comicId={this.state.comicId}
          title={this.state.title}
          comicImg={this.state.comicImg}
        />

        <Footer />
      </Container>

    );
  }
}

export default Comics;