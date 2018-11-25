import React, { Component } from 'react';

const styles = {
  container: {
    position: 'relative',
    height: '320px',
    paddingTop: '100px',
    textAlign: 'center',
    backgroundImage: `url('/images/profile_pure.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '240px',
    height: 'auto',
  },
  title: {
    textShadow: 'black 7px 0 100px',
  },
  address: {
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '300px',
    background: 'rgba(224, 222, 215, 0.8)',
    color: '#44373c',
    borderRadius: '10px',
    padding: '10px',
    paddingBottom: '30px',
    textAlign: 'center',
    fontSize: '16px',
  },
  eth: {
    fontSize: '10px',
    marginTop: '2px',
    marginBotton: '30px',
  }
}

class JumbotronComponent extends Component {

  render() {

    return (
      <div
        style={{ color: 'white', background: '#FCF3F7' }}
      >
        <div
          style={styles.container}
        >
          <div style={styles.title}>
            <h1>Gothic Style.</h1>
            <p>This is Mitsuhashi Takuto's portfolio website.</p>
          </div>
          <div style={styles.address}>
            <h3 style={{ fontSize: '17px' }}>Ethereum</h3>
            <div style={styles.eth}>
              <br />
              0xc487a5bcd3578a4dbaf6e7d8622130f54d3e3a06
              <br />
              <br />
              <br />
              <br />
            </div>
            Please Donate ETH!!
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
