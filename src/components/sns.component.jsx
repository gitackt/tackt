import React, { Component } from 'react';
import {
  FacebookIcon,
  TwitterIcon,
} from 'react-share';

const styles = {
  container: {
    position: 'fixed',
    right: '6%',
    bottom: '8%',
    width: '70px',
  },
  button: {
    textDecoration: 'none',
  }
}

class SnsComponent extends Component {

  render() {
    return (
      <div style={styles.container}>
        <a
          href="https://twitter.com/picos_tackt?lang=ja"
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon size={64} round={true} style={{ boxShadow: '2px 2px 50px rgba(0,0,0,0.2)' }} />
        </a>
        <br />
        <a
          href="https://www.facebook.com/profile.php?id=100013371464347"
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon size={64} round={true} style={{ boxShadow: '2px 2px 50px rgba(0,0,0,0.2)' }} />
        </a>
        {/* <br />
        <a
          href="https://github.com/gitackt"
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
     </a> */}
        {/* <br />
        <a
          href="https://www.pixiv.net/member_illust.php?id=29647166&type=illust"
          style={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixiv
     </a> */}
      </div>
    );
  }
}

export default SnsComponent;

