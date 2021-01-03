import React from 'react';
import ReactDOM from 'react-dom';

import ImageSlider from './components/marvelCat';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';

/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import SearchAppBar from './components/searchBar';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <ImageSlider />
      <SearchAppBar />
      <Footer />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);