import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {

    const styles = {
      topImage: {
        width: '80%',
        maxWidth: '450px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '350px',
      },
      coin: {
        maxWidth: '50px',
        borderRadius: '10px',
      },
    };

    return (
      <div className='main-container'>  
        <h1 className='jumbotron-title'>A Programmer</h1>
        <div className='portfolio'><span style={{ color: '#2dd8ca' }}>Takuto Mitsuhashi</span></div>
        <br />
        <br />
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
      </div>
    );
  }
}

export default JumbotronComponent;
