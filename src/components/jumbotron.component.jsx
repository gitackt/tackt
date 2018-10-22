import React, { Component } from 'react';

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    paddingTop: '30px',
    paddingBottom: '60px',
    textAlign: 'center',
    background: "url('/images/gradations/test1.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  image: {
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '200px',
    height: 'auto',
  },
  title: {
    marginTop: '-20px',
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
