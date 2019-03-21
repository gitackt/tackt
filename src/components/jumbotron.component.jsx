import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '80px',
    paddingBottom: '70px',
    textAlign: 'center',
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
  button: {
    height: '20px',
    width: '80%',
    borderRadius: '5px',
    // border: 'solid 1px white',
    background: '#2ed1ea',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '17px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '20px',
  },
}

class JumbotronComponent extends Component {
  render() {

    return (
      <div
        style={{ background: '#1a6aed' }}
      >
        <div
          style={styles.container}
        >           
          <Grid container justify={'center'}>
            <Grid item xs={12} style={{ textAlign: 'center', marginLeft: '5%', marginRight: '5%' }}>
              <div style={styles.title}>
                <h1>Takuto Mitsuhashi. Portfolio Website.</h1>
                {/* <h2 style={{ fontSize: '20px' }}><br />Portfolio Website</h2> */}
                <p style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
                フリーランスWebエンジニア。Webに関わるご相談やサイト制作はお任せ下さい。Webサイト制作のお悩み全てに対応いたします。
                Freelance Web Engineer. Please leave the consultation and site production related to the web. I cope with all the worries of website production.<br /><br />
                </p>
                  <div style={{ width: '250px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <a
                      href={'https://github.com/gitackt'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', textAlign: 'center' }}
                    >
                      <div style={styles.button}>
                        Github
                      </div>
                    </a>
                  </div>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
