import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

//component Marvel
import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Footer from '../components/footer';
import ComicsCard from '../components/comicsCard';
import ModalComic from '../components/modalComic';
import SearchComic from '../components/searchComic';
import md5 from 'md5';

//Import CSS
import '../css/sliderCarousel.css';
import '../css/searchBarstyle.css';


class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false,
      researchResult:null,
      isContentshow:true
    };
  }

  handleSearch = (inputText) => {
    const timestamp = Number(new Date());
        const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
        const API_PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
        const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

        // appel du fetch 
        fetch(`https://gateway.marvel.com/v1/public/comics?titleStartsWith=${inputText}&ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`)
            .then(resp => resp.json())
            .then(data => this.displayItem(data));
  }

  displayItem = (data) => {
    this.setState({researchResult:data.data.results})
    this.setState({isContentshow:false});
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

  clickCard(id, title, thumbnail, description) {
    this.clickComic(id, title, thumbnail.path + '.' + thumbnail.extension, description);
  }


  render() {

    const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
    const noGif = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708';

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



        <SearchComic
        handleSearch={this.handleSearch}/>

        <div className="cardContainer">
        {
          this.state.researchResult != null &&
          this.state.researchResult
            .filter(image => image.thumbnail.path !== noImage && image.thumbnail.path !== noGif && image.description !== '')
            .map(({id, thumbnail, title}, i) => (
              <picture className='transitionCharacter' key={i} id={id}
              onClick={() => this.clickCard(id, title, thumbnail)} >
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} className='heroesCard' />
               </picture>                       
            ))
        }
        </div>

        {
          this.state.researchResult == '' &&
          <p>pas de résultat</p>
        }

        {
          this.state.isContentshow == true &&
          <ComicsCard cardTitle="Les comics Marvel"
          onClickCard={(id, title, thumbnail) => this.clickComic(id, title, thumbnail.path + '.' + thumbnail.extension)} />
        }


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