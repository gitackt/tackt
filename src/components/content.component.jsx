import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BabelBubbleComponent } from './services/babel.bubble.component';
import { VcuComponent } from './services/vcu.component';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: { 
    marginTop: '10px', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
  },
  grid: { 
    textAlign: 'left', 
    marginBottom: '10px', 
    marginTop: '10px' ,
    padding: '40px',
  },
};

class ContentComponent extends Component {

  render() {
    return (
      <Grid container justify={'center'} style={styles.container}>
        <Grid item xs={12} md={4} style={styles.grid}>
          <BabelBubbleComponent />
        </Grid>
        <Grid item xs={12} md={4} style={styles.grid}>
          <VcuComponent />
        </Grid>
      </Grid>
    );
  }
}

export default ContentComponent;

