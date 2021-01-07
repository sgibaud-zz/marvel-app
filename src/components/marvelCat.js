import React, { Component } from 'react';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';


// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/sliderCarousel.css';



class ImageSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 350,
            slidesToShow: 5,
            slidesToScroll: 3,
            cssEase: 'ease-in-out',
            centerPadding: '5px',
            draggable: false,
            className: 'carousel',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
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
                    <div >
                        <h3 className='titleSlider'>{this.props.categorieTitle}</h3>
                        <Slider {...settings}>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                            <div className='marvelImage'><a href='#'>
                                <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg' /></a>
                            </div>
                        </Slider>
                    </div>

            </Container>
        );
    }
}

export default ImageSlider;