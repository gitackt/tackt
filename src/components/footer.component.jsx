import React, { Component } from 'react';
import { ProfileComponent } from './profile.component';


const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    paddingTop: '15px',
    paddingBottom: '15px',
    background: '#000000',
    color: '#cecece',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    textDecoration: 'none',
  },
  image: {
    width: '50px',
  },
  twitter: {
    maxWidth: '300px',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  title: {
    width: '85%',
    color: '#b7b5b2',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class FooterComponent extends Component {

  render() {

    return (
      <div>
        <div className={styles.root} style={styles.container}>
          <h2 style={styles.title}>Profile</h2>
          <ProfileComponent />
          <div style={{ marginTop: '100px' }}>
            <img
              style={styles.image}
              src={'/images/bubble_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/gum_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/cake_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/honey_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/cocoa_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/mono_coin.png'}
              alt={'bubble_coin'}
            />
          </div>
          <br />
          <br />
          <h6>Copyright 2018~{new Date().getFullYear()} Takuto Mitsuhashi All Rights Reserved.</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
