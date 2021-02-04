import React, { Component } from 'react';

import NavBar from "../components/NavBar";
import SideNavBar from "../components/SideNavBar";
import BackDrop from "../components/BackDrop";
import Container from 'react-bootstrap/Container';
import Footer from '../components/footer';
import MarvelCard from '../components/marvelCard';
import SearchComic from '../components/searchComic';
import md5 from 'md5';




class Comics extends Component {
  state = {
    sideBarOpen: false,
    researchResult:null,
    isContentshow:true
  };

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


        <SearchComic
        handleSearch={this.handleSearch}/>

        <div className="cardContainer">
        {
          this.state.researchResult != null &&
          this.state.researchResult
            .map(({id, thumbnail, title}, i) => (
              <picture key={i} id={id}>
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
          <MarvelCard cardTitle="Les comics Marvel"
            onClickCard={(id, name, thumbnail, description) => this.openModalWithId(id, name, thumbnail.path + '.' + thumbnail.extension, description)} />
        }

        <Footer />
      </Container>

    );
  }
}

export default Comics;