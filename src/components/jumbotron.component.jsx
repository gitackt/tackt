import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '160px',
    paddingBottom: '100px',
    textAlign: 'center',
    borderBottom: 'solid 6px #F3F1EE',
    // background: 'url(/images/background.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right',
    // backgroundSize: '60%',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
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
              <div style={styles.title}>
              <h1 style={{ fontSize: '35px' }}>TAKUTO MITSHUKASHI</h1>
              <h2 style={{ fontSize: '20px' }}>Portfolio Website</h2>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
