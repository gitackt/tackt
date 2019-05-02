import React, { PureComponent } from 'react';
import Slider from "react-slick";
import { listData } from '../../params/services';

const styles = {
  card: {
    width: '90%',
    background: 'white',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
  },
  image: {
    position: 'relative',
    width: '100%',
    borderRadius: '10px',
  },
};

const CardContentComponent = (props) => {

  return (
    <div>
      {props.data.status === 'sold' && (
        <div className='tag sold'>
          Sold
        </div>
      )}
      {props.data.status === 'active' && (
        <div className='tag active'>
          Active
        </div>
      )}
      {props.data.status === 'deactive' && (
        <div className='tag deactive'>
          Deactive
        </div>
      )}
      {props.data.status === 'github' && (
        <div className='tag github'>
          Github
        </div>
      )}
      {props.data.status === 'ios' && (
        <div className='tag ios'>
          iOS
        </div>
      )}
      {props.data.status === 'android' && (
        <div className='tag android'>
          Andoid
        </div>
      )}
      {props.data.status === 'line' && (
        <div className='tag line'>
          LINE Bot
        </div>
      )}
      <div style={{ overflow: 'hidden', maxHeight: '150px', borderRadius: '10px' }}>
        <a
          href={props.data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={styles.image}
            src={props.data.image}
            alt={props.data.name}
          />
        </a>
      </div>
    </div>
  )
}

export const EachComponent = (props) =>{

  return (
    <div>
      <div style={styles.card}>
        <CardContentComponent data={props.data} />
      </div >
    </div >
  );
}

export class NameComponent extends PureComponent {

  settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <div style={{ marginTop: '30px', marginBottom: '5px', padding: '30px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        <Slider {...this.settings}>
          {listData.map((each) => (
            <EachComponent data={each} />
          ))}
        </Slider>
      </div>
    );
  }
}

