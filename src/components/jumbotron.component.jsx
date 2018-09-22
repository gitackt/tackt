import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = {
  profile: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/profile.jpg')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  record: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/babelbubble.png')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  work: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/work.jpg')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  shop: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/shop.jpg')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  blog: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/blog.png')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  sns: {
    width: '95%',
    height: '170px',
    color: 'white',
    maxWidth: '400px',
    background: `linear-gradient(rgba(34, 64, 61, 0.2),rgba(26, 33, 33, 0.5)), url('/images/list/sns.jpg')`,
    borderRadius: '20px',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
  list_text: {
    fontSize: '20px',
    color: 'white',
    marginTop: '85px'
  },
  list_small_text: {
    fontSize: '15px',
    color: 'white',
    marginTop: '5px'
  }
};

class JumbotronComponent extends Component {

  render() {

    return (
      <div 
        style={{ backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center' }}
      >
        <div
          style={{ position: 'relative', height: '100%', color: 'white', paddingTop: '10px', paddingBottom: '80px', marginTop: '70px'  }}
        >

          <Grid container justify={'center'} style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Grid item xs={6}>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
                <div style={styles.profile}>
                  <div style={styles.list_text}>自己紹介</div>
                  <div style={styles.list_small_text}>Profile</div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/engeneer" style={{ textDecoration: 'none' }}>
                <div style={styles.record}>
                  <div style={styles.list_text}>製作実績</div>
                  <div style={styles.list_small_text}>Portfolio</div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/comic" style={{ textDecoration: 'none' }}>
                <div style={styles.work}>
                  <div style={styles.list_text}>作品紹介</div>
                  <div style={styles.list_small_text}>Works</div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <a
                href="https://tackt.official.ec/"
                style={{ textDecoration: 'none' }}
              >
                <div style={styles.shop}>
                  <div style={styles.list_text}>ショップ</div>
                  <div style={styles.list_small_text}>Shop</div>
                </div>
              </a>
            </Grid>
            <Grid item xs={6}>
              <a
                href="https://monetizealchemist.com/"
                style={{ textDecoration: 'none' }}
              >
                <div style={styles.blog}>
                  <div style={styles.list_text}>ブログ</div>
                  <div style={styles.list_small_text}>Blog</div>
                </div>
              </a>
            </Grid>
            <Grid item xs={6}>
              <Link to="/sns" style={{ textDecoration: 'none' }}>
                <div style={styles.sns}>
                  <div style={styles.list_text}>連絡先</div>
                  <div style={styles.list_small_text}>Contacts</div>
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
