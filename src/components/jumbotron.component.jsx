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
  // button: {
  //   height: '20px',
  //   width: '80%',
  //   borderRadius: '10px',
  //   border: 'solid 1px #ff517c',
  //   background: 'transparent',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   color: '#ff517c',
  //   fontSize: '13px',
  //   padding: '20px',
  //   textDecoration: 'none',
  //   marginTop: '70px',
  // },
  button: {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '50px',
    width: '50px',
    borderRadius: '300px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '17px',
    padding: '10px',
    textDecoration: 'none',
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
            <Grid item xs={12} sm={6} style={{ textAlign: 'left', marginLeft: '5%', marginRight: '5%' }}>
              <div style={styles.title}>
                <h1 style={{ fontSize: '30px' }}>TAKUTO MITSUHASHI</h1>
                <h2 style={{ fontSize: '20px' }}><br />Portfolio Website</h2>
                <p>
                  フリーランスWebエンジニア。Webに関わるご相談やサイト制作はお任せ下さい。Webサイト制作のお悩み全てに対応いたします。<br /><br />
                </p>
                  {/* <div style={{ width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <a
                      href={''}
                      target="_blank"
                      style={{ textDecoration: 'none', textAlign: 'center' }}
                    >
                      <div style={styles.button}>
                        依頼
                      </div>
                    </a>
                  </div> */}
            </div>
            </Grid>
            <Grid item xs={12} sm={3} style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%' }}>
              {/* <img
                style={styles.image}
                src={'/images/screen.png'}
                alt={'screen'}
              /> */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
