import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { EachComponent } from './each.component';
import { listData } from './services';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  container2: {
    marginTop: '30px',
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
    width: '70%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    // borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderTop: 'solid 2px #F3F1EE',
    // borderRight: 'solid 2px #F3F1EE',
    borderBottom: 'solid 7px #F3F1EE',
    // borderLeft: 'solid 2px #F3F1EE',
  },
};

class ContentComponent extends Component {

  render() {
    return (
      <div style={{ paddingTop: '50px', textAlign: 'center', background: 'white' }}>
        <h2 style={styles.title}>Services</h2>
        <Typography component="p" style={{ fontSize: '15px', color: '#6D6C6A', width: '85%', maxWidth: '800px', textAlign: 'left', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
          今までの制作実績を表示します。自分で運営しているサービスや依頼を受けて制作したサービスが含まれます。
        </Typography>
        <Grid container justify={'center'} style={styles.container2}>
          {listData.map((each) => (
            <Grid item xs={12} sm={6} style={styles.grid}>
              <EachComponent data={each} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default ContentComponent;

