import React, { Component } from 'react';
import {
  FacebookIcon,
  TwitterIcon,
} from 'react-share';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    padding: '10px',
    paddingTop: '100px',
    background: '#44373c',
    color: 'rgb(135, 135, 135)',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inner: {
    width: '70px',
    marginTop: '10px',
    marginBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    textDecoration: 'none',
  }
};

class FooterComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={styles.container}>
        <div style={styles.inner}>
          <a
            href="https://twitter.com/picos_tackt?lang=ja"
            style={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={64} round={true} style={{ boxShadow: '2px 2px 50px rgba(0,0,0,0.2)' }} />
          </a>
          <br />
          <a
            href="https://www.facebook.com/profile.php?id=100013371464347"
            style={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={64} round={true} style={{ boxShadow: '2px 2px 50px rgba(0,0,0,0.2)' }} />
          </a>
        </div>
        <h6>copyright 2018 tackt mitsuhashi</h6>
      </div>
    );
  }
}

export default FooterComponent;
