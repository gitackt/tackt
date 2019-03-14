import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '100px',
    paddingBottom: '70px',
    textAlign: 'left',
    // borderBottom: 'solid 6px #F3F1EE',
    minHeight: '500px',
    color: 'white',
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
        style={{ background: '#183260' }}
      >
        <div
          style={styles.container}
        >           
          <Grid container justify={'center'}>
            <Grid item xs={12} style={{ textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>
              {/* <img
                style={styles.image}
                src={'/images/screen.png'}
                alt={'screen'}
              /> */}
              <div style={styles.title}>
                <h1 style={{ fontSize: '30px' }}>TAKUTO MITSUHASHI</h1>
                <h2 style={{ fontSize: '20px' }}><br />Portfolio Website</h2>
                <p>
                  個人だから出来る柔軟な対応。確かな制作実績と信頼性。明瞭な価格設定と安心のサポート。
                  Webサイト制作のお悩み全てに対応いたします。サイト制作はお任せ下さい。
                </p>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
