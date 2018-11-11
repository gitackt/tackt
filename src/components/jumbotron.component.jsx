import React, { Component } from 'react';

const styles = {
  container: {
    paddingBottom: '80px',
    position: 'relative',
    height: '320px',
    paddingTop: '100px',
    textAlign: 'center',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '240px',
    height: 'auto',
  },
  title: {
    marginTop: '-100px',
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
            src="/images/profile_pure.png"
            alt={'profile_pure'}
          />
          <div style={styles.title}>
            <h1>Gothic Style.</h1>
            <p>This is Mitsuhashi Takuto's portfolio website.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
