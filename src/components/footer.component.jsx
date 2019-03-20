import React, { Component } from 'react';
import { ProfileComponent } from './profile.component';


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
    width: '80%',
    color: '#b7b5b2',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 7px #F3F1EE',
  },
};

class FooterComponent extends Component {

  render() {

    return (
      <div>
        <br />
        {/* <h2 style={styles.title}>Twitter</h2>
        <div style={styles.twitter}>
          <a class="twitter-timeline" data-lang="ja" data-height="500" href="https://twitter.com/picos_tackt?ref_src=twsrc%5Etfw">
            Tweets by picos_tackt
          </a> 
        </div> */}
        <div className={styles.root} style={styles.container}>
          <h2 style={styles.title}>Profile</h2>
          <ProfileComponent />
          <h6>copyright 2018~2019 takuto mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
