import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { EachComponent } from './each.component';
import { listData } from './services';

const styles = {
  root: {
    flexGrow: 1,
  },
  container2: {
    marginTop: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '80px',
    maxWidth: '1200px',
  },
  grid: {
    textAlign: 'left',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '20px',
  },
  title: {
    color: '#6D6C6A',
    maxWidth: '400px',
    textAlign: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTop: 'solid 2px #F3F1EE',
    borderRight: 'solid 2px #F3F1EE',
    borderBottom: 'solid 3px #F3F1EE',
    borderLeft: 'solid 2px #F3F1EE',
  },
};

class ContentComponent extends Component {

  render() {
    return (
      <div style={{ paddingTop: '50px', textAlign: 'center', background: 'white', borderBottom: 'solid 6px #F3F1EE' }}>
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

