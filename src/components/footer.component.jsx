import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class FooterComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', paddingTop: '150px', height: '100px', background: 'white', color: '#2a2929' }}>
        <a
          href="https://www.facebook.com/profile.php?id=100013371464347"
          target="_blank"
        >
          <img
            style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
            src="/facebook.png"
            alt={'facebook'}
          />
        </a>
        <a
          href="https://twitter.com/picos_tackt"
          target="_blank"
        >
          <img
            style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
            src="/twitter.png"
            alt={'twitter'}
          />
        </a>
        <a
          href="https://github.com/gitackt/tackt"
          target="_blank"
        >
          <img
            style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
            src="/github.png"
            alt={'github'}
          />
        </a>
        <a
          href="https://valu.is/tackt3"
          target="_blank"
        >
          <img
            style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
            src="/valu.png"
            alt={'valu'}
          />
        </a>
        <a
          href="https://www.pixiv.net/member.php?id=29647166"
          target="_blank"
        >
          <img
            style={{ position: 'relative', width: '50px', height: '18px', marginTop: '30px', marginLeft: '5px', marginRight: '5px' }}
            src="/pixiv.png"
            alt={'pixiv'}
          />
        </a>
        <h6>copyright 2018 tackt mitsuhashi</h6>
      </div>
    );
  }
}

export default FooterComponent;
