import React, { Component } from 'react';

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    paddingTop: '80px',
    paddingBottom: '80px',
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
          {/* <img
            style={styles.image}
            src="/images/gradations/test1.jpg"
            alt={'title'}
          /> */}
          <h2>I need jobs.</h2>
          <p>This is Mitsuhashi Takuto's portfolio website.</p>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
