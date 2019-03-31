import React, { PureComponent } from 'react';
import { ProfileComponent } from './profile.component';


const styles = {
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
  image: {
    width: '50px',
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

class FooterComponent extends PureComponent {

  render() {

    return (
      <div>
        <div style={styles.container}>
          <h2 style={styles.title}>Profile</h2>
          <ProfileComponent />
          <div style={{ marginTop: '100px' }}>
            <img
              style={styles.image}
              src={'/images/balls/bubble_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/balls/gum_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/balls/cake_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/balls/honey_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/balls/cocoa_coin.png'}
              alt={'bubble_coin'}
            />
            <img
              style={styles.image}
              src={'/images/balls/mono_coin.png'}
              alt={'bubble_coin'}
            />
          </div>
          <br />
          <br />
          <h6>Copyright 2018~{new Date().getFullYear()} Takuto Mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
