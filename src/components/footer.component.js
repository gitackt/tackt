import React, { PureComponent } from 'react';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#313942',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  coin: {
    maxWidth: '50px',
    borderRadius: '10px',
  },
};

class FooterComponent extends PureComponent {

  render() {

    return (
      <div>
        <div style={styles.container}>
        <div>
          <img
            style={styles.coin}
            src={'/images/balls/bubble_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/gum_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/cake_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/honey_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/cocoa_coin.png'}
            alt={'bubble'}
          />
          <img
            style={styles.coin}
            src={'/images/balls/mono_coin.png'}
            alt={'bubble'}
          />
        </div>
          <h6>Copyright 2016~{new Date().getFullYear()} Takuto Mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
