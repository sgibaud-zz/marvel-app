import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

import Fight from "../images/futur.png"
import Comics from "../images/Comics.png"



//import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";


class HeroCarousel extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2000} >
          <img
            className="d-block w-100 imgCarousel"
            src="https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/34819_marvel_mania_tb?$tb$"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} >
          <img
            className="d-block w-100"
            src={Comics}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} >
          <img
            className="d-block w-100"
            src={Fight}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HeroCarousel;
