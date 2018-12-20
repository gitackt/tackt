import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    paddingTop: '15px',
    paddingBottom: '15px',
    background: '#202A38',
    color: '#cecece',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    textDecoration: 'none',
  },
  twitter: {
    maxWidth: '300px',
    paddingTop: '30px',
    paddingBottom: '30px',
    marginLeft: 'auto',
    marginRight: 'auto', 
  }
};

class FooterComponent extends Component {

  render() {
    return (
      <div>
        <div style={styles.twitter}>
          <a class="twitter-timeline" data-lang="ja" data-height="500" href="https://twitter.com/picos_tackt?ref_src=twsrc%5Etfw">
            Tweets by picos_tackt
          </a> 
        </div>
        <div className={styles.root} style={styles.container}>
          <h6>copyright 2018 tackt mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
