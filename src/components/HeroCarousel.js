import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/HeroCarousel.css";


class HeroCarousel extends Component {
    render () {
        return (
            <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/34819_marvel_mania_tb?$tb$"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/34819_marvel_mania_tb?$tb$"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/34819_marvel_mania_tb?$tb$"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        )
    }
}


export default HeroCarousel;
