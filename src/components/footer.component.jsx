import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    paddingTop: '15px',
    paddingBottom: '15px',
    background: '#F9F8F6',
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
  },
  title: {
    color: '#6D6C6A',
    maxWidth: '400px',
    textAlign: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTop: 'solid 2px #F3F1EE',
    borderRight: 'solid 2px #F3F1EE',
    borderBottom: 'solid 3px #F3F1EE',
    borderLeft: 'solid 2px #F3F1EE',
  },
};

class FooterComponent extends Component {

  render() {
    return (
      <div>
        <br />
        <h2 style={styles.title}>Twitter</h2>
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
