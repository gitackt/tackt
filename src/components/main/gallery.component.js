import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

import { galleryData } from '../../params/gallery';

const styles = {
  list: {
    width: '95%',
    maxWidth: '60px',
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
    borderRadius: '10px 10px 10px 10px',
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
      </div >
    </div >
  );
}

class GalleryComponent extends PureComponent {

  render() {
    return (
      <div style={{ paddingTop: '70px', textAlign: 'center' }}>
        <Grid container justify={'center'} className='container'>
          {galleryData.map((each) => (
            <Grid item xs={2} sm={1} className='grid'>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default GalleryComponent;

