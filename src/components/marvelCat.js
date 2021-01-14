import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class ImageSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 350,
            slidesToShow: 5,
            slidesToScroll: 3,
            cssEase: 'ease-in-out',
            //centerPadding: '5px',
            draggable: false,
            className: 'carouselSlider',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false,
                        centerPadding: '30px'
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '10px',
                        initialSlide: 0,
                        centerMode: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '10px',
                        infinite: false,
                        dots: false
                    }
                }
            ]
        };


        return (
            <Container>
                    <Row>
                        <h3 className='titleSlider'>{this.props.categorieTitle}</h3>
                        <Slider {...settings}>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                            <Col ><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </Col>
                        </Slider>
                    </Row>

            </Container>
        );
    }
}

export default ImageSlider;