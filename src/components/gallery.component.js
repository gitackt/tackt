import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import { galleryData } from '../params/gallery';

const styles = {
  list: {
    width: '95%',
    maxWidth: '300px',
    background: '#ffffff',
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
    textAlign: 'center',
  },
  image: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0px 0px',
  },
  content: {
    width: '100%',
    background: 'rgb(49, 57, 66)',
    height: '70px',
    paddingTop: '3px',
    paddingBottom: '15px',
    position: 'relative',
    zIndex: 123,
    marginTop: '-5px',
    borderRadius: '0px 0px 10px 10px',
  },
  number: {
    color: 'white', 
    fontSize: '20px',
    background: '#eb346b',
    borderRadius: '60px',
    padding: '5px',
    width: '70px',
    position: 'absolute',
    zIndex: 12345,
    marginLeft: '25px',
    marginTop: '25px',
  },
};

const EachComponent = (props) =>{

  return (
    <div>
      <div style={styles.list}>
        <img
          style={styles.image}
          src={props.data.image}
          alt={props.data.name}
        />
        <div style={styles.content}>
          <h3 style={{ color: 'white', fontSize: '16px' }}>{props.data.name}</h3>
          <p style={{ color: '#b7c5cc', fontSize: '12px' }}>
            {/* {props.data.info} <br /> */}
            {props.data.term}
          </p>
        </div>
      </div >
    </div >
  );
}

class GalleryComponent extends PureComponent {

  render() {
    return (
      <div style={{ paddingTop: '5px', textAlign: 'center', background: 'white' }}>
        <h2 className='title'>Gallery</h2>
        <Grid container justify={'center'} className='container'>
          {galleryData.map((each) => (
            <Grid item xs={6} sm={3} md={2} className='grid'>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default GalleryComponent;

