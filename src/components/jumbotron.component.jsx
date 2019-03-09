import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '100px',
    paddingBottom: '70px',
    textAlign: 'center',
    borderBottom: 'solid 6px #F3F1EE',
    minHeight: '400px',
  },
  image: {
    width: '100%',
    maxWidth: '200px',
    marginBottom: '50px',
    borderRadius: '10px',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    textAlign: 'center',
    padding: '30px',
    marginTop: '-50px',
    marginBottom: '50px',
  },
}

class JumbotronComponent extends Component {
  render() {

    return (
      <div
        style={{ background: 'white' }}
      >
        <div
          style={styles.container}
        >           
          <Grid container justify={'center'}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {/* <img
                style={styles.image}
                src={'/images/screen.png'}
                alt={'screen'}
              /> */}
              <div style={styles.title}>
              <h1 style={{ fontSize: '23px' }}>TAKUTO MITSHUKASHI</h1>
              <h2 style={{ fontSize: '18px' }}>Portfolio Website</h2>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
