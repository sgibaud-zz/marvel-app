import React, { Component } from 'react';
import Slider from 'react-slick';

// import CSS
import './marvelCat.css';

class MultipleItems extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3
    };
    return (
      <div >

        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
          <div>
          <img src={"./clean_1_19.jpg"} alt='black widow' className='marvelCatImg'/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MultipleItems;