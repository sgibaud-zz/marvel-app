import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import MarvelModal from '../components/modal';
import SearchCharacter from '../components/SearchCharacter';
import md5 from 'md5';




class Personnages extends Component {
  state = {
    //sideBarOpen: false,
    //openModal: false,
    //characterId: '',
    //heroName: '',
    //characterImg: {},
    //description: ''
    researchResult:null,
    isContentshow:true
  };


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

  openModalWithId(id, name, thumbnail, description) {
    this.setState({ openModalCharacter: true, characterId: id, heroName: name, characterImg: thumbnail, description: description });
  }

  closeModalCharacter = () => {
    this.setState({ openModalCharacter: false });
  }


  render() {

    const noImage = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';


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


        <SearchCharacter
        handleSearch={this.handleSearch}/>

        <div className="cardContainer">
        {
          this.state.researchResult != null &&
          this.state.researchResult
            .filter(image => image.thumbnail.path !== noImage && image.description !== '')
            .map(({id, thumbnail, name}, i) => (
              <picture key={i} id={id}>
                   <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='heroesCard' />
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
          <MarvelCard cardTitle="Les personnages Marvel"
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