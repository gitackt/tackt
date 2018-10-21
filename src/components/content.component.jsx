import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { EachComponent } from './services/each.component';
import { ProfileComponent } from './services/profile.component';
import { listData } from './services';

const styles = {
  root: {
    flexGrow: 1,
  },
  container1: {
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '90px',
    maxWidth: '1200px',
  },
  container2: {
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
  },
  grid: {
    textAlign: 'left',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '20px',
  },
};

class ContentComponent extends Component {

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Grid container justify={'center'} style={styles.container1}>
          <Grid item xs={12} style={styles.grid}>
            <ProfileComponent />
          </Grid>
        </Grid>
        <h2>Services</h2>
        <Grid container justify={'center'} style={styles.container2}>
          {listData.map((each) => (
            <Grid item xs={12} md={4} style={styles.grid}>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ContentComponent;

