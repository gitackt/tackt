import React, { Component } from 'react';
import Slider from "react-slick";

class JumbotronComponent extends Component {

  state = {
    open: false
  };

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div 
        style={{ position: 'relative', top: -55, paddingTop: '80px', paddingBottom: '100px', height: '470px', backgroundImage: `url('/bubble.png')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center', marginBottom: '20px' }}
        // style={{ position: 'relative', top: -55, paddingTop: '230px', height: '470px' }}
      >
        <h1>
          <img
            style={{ position: 'relative', width: '170px', height: 'auto' }}
            src="/tackt_logo.png"
            alt={'tackt'}
          />
        </h1>

        <div
          style={{ width: '300px', marginLeft: 'auto', paddingTop: '20px', marginRight: 'auto' }}
        >
          <Slider {...settings}>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
          </Slider>
        </div>

        <br />
        <img
          style={{ position: 'relative', width: '180px', marginTop: '70px', height: 'auto' }}
          src="/profile_button.png"
          alt={'profile_button'}
          onClick={() => this.setState({ open: true })}
        />
        
      </div>
    );
  }
}

export default JumbotronComponent;
