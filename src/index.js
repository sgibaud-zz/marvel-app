import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/marvelCat';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';
import MarvelCard from './components/marvelCard';
import SearchAppBar from './components/searchBar';
/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';




ReactDOM.render(
  <React.StrictMode>
    <Container>
      <ImageSlider />
      <SearchAppBar />
    <MarvelCard />
      <Footer />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

