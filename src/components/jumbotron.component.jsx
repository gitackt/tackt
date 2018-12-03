import React, { Component } from 'react';

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    paddingTop: '100px',
    paddingBottom: '60px',
    textAlign: 'center',
    backgroundImage: `url('/images/ice.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
          <img
            style={styles.image}
            src={'/images/profile_pure.png'}
          />
          <div style={styles.title}>
            <h1>23160823085212</h1>
            <p>This is Mitsuhashi Takuto's portfolio website.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
