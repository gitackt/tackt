import React, { Component } from 'react';

const styles = {
  container: {
    paddingBottom: '80px',
    position: 'relative',
    height: '300px',
    paddingTop: '50px',
    textAlign: 'center',
  },
  image: {
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '200px',
    height: 'auto',
  },
  title: {
    marginTop: '-290px',
    textShadow: 'black 7px 0 100px',
  },
}

class JumbotronComponent extends Component {

  render() {

    return (
      <div
        style={{ color: 'white' }}
      >
        <div
          style={styles.container}
        >
          <img
            style={styles.image}
            src="/images/flower_girl.png"
            alt={'flower_girl'}
          />
          <div style={styles.title}>
            <h2>I need jobs.</h2>
            <p>This is Mitsuhashi Takuto's portfolio website.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
