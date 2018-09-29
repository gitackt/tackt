import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FooterComponent from '../components/footer.component';

const styles = {
  list: {
    height: '100%',
    color: 'white',
    borderRadius: '20px',
    textAlign: 'left',
    margin: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px',
  },
  list_text_nomal: {
    fontSize: '20px',
    color: 'white',
    textShadow: '0px 0px 50px rgba(50, 50, 50, 1)'
  },
  list_small_text: {
    fontSize: '10px',
    color: 'white',
  },
  list_text_container: {
    height: '20px',
    marginTop: '-60px',
    borderRadius: '0px 0px 20px 20px',
    padding: '20px',
    paddingLeft: '30px',
  },
  image: { 
    width: '100%', 
    height: 'auto', 
    borderRadius: '20px 20px 20px 20px' 
  }
};

class JumbotronComponent extends Component {

  render() {

    return (
      <div 
        style={{ backgroundSize: 'cover', color: 'white' }}
      >
        <div
          style={{ position: 'relative', height: '100%', paddingTop: '80px', paddingBottom: '80px', textAlign: 'center'  }}
        >

          <img
            style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', width: '200px', height: 'auto'}}
            src="/images/common/jack_the_ripper.png"
            alt={'jack the ripper'}
          />

          <br />

          <img
            style={{ marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', width: '170px', height: 'auto' }}
            src="/images/common/website.png"
            alt={'website'}
          />

          <Grid container justify={'center'} style={{ maxWidth: '800px', marginTop: '200px', marginLeft: 'auto', marginRight: 'auto', paddingRight: '5%', paddingLeft: '5%' }}>
            <Grid item xs={12}>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div style={styles.list}>
                  <img
                    style={styles.image}
                    src="/images/profile.jpg"
                    alt={'Tackt Mitsuhashi'}
                  />
                  <div style={styles.list_text_container}>
                    <div style={styles.list_text_nomal}>Profile</div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/engeneer" style={{ textDecoration: 'none' }}>
                <div style={styles.list}>
                  <img
                    style={styles.image}
                    src="/images/profile.jpg"
                    alt={'Tackt Mitsuhashi'}
                  />
                  <div style={styles.list_text_container}>
                    <div style={styles.list_text_nomal}>Portfolio</div>
                    
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to="/comic" style={{ textDecoration: 'none' }}>
                <div style={styles.list}>
                  <img
                    style={styles.image}
                    src="/images/profile.jpg"
                    alt={'Tackt Mitsuhashi'}
                  />
                  <div style={styles.list_text_container}>
                    <div style={styles.list_text_nomal}>Works</div>
                    
                  </div>
                </div>
              </Link>
            </Grid>
            
            <Grid item xs={12}>
              <a
                href="https://tackt.official.ec/"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={styles.list}>
                  <img
                    style={styles.image}
                    src="/images/profile.jpg"
                    alt={'Tackt Mitsuhashi'}
                  />
                  <div style={styles.list_text_container}>
                    <div style={styles.list_text_nomal}>Shop</div>
                    
                  </div>
                </div>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a
                href="https://monetizealchemist.com/"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={styles.list}>
                  <img
                    style={styles.image}
                    src="/images/profile.jpg"
                    alt={'Tackt Mitsuhashi'}
                  />
                  <div style={styles.list_text_container}>
                    <div style={styles.list_text_nomal}>Blog</div>
                  </div>
                </div>
              </a>
            </Grid>
          </Grid>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default JumbotronComponent;
