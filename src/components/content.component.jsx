import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { EachComponent } from './each.component';
import { listData } from './services';

const styles = {
  root: {
    flexGrow: 1,
  },
  container2: {
    marginTop: '10px',
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
  title: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 7px #F3F1EE',
  },
};

class ContentComponent extends Component {

  render() {
    return (
      <div style={{ paddingTop: '5px', textAlign: 'center', background: 'white' }}>
        <h2 style={styles.title}>Services</h2>
        <Grid container justify={'center'} style={styles.container2}>
          {listData.map((each) => (
            <Grid item xs={12} sm={6} md={4} style={styles.grid}>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ContentComponent;

