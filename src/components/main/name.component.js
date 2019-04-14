import React, { PureComponent } from 'react';
import Slider from "react-slick";
import { listData } from '../../params/services';
import { EachComponent } from './service.component';

export class NameComponent extends PureComponent {

  settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  render() {

    return (
      <div style={{ marginTop: '40px',marginBottom: '60px', padding: '20px' }}>
        <Slider {...this.settings}>
          {listData.map((each) => (
            <EachComponent data={each} />
          ))}
        </Slider>
      </div>
    );
  }
}

