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
    width: '70%',
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

    let particles = []

    function random_value(m,n) {
      m = parseInt(m, 10);
      n = parseInt(n, 10);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
    }

    const heartcount = (200/50)*5;
    for(let i = 0; i <= heartcount; i++) {
      let size = (random_value(60,120)/10);
      const particle_style = {
        top: random_value(20,80) + '%',
        left: random_value(0,95) + '%',
        width: size + 'px',
        height: size + 'px',
        animationDelay: (random_value(0,30)/10) + 's'
      }
      particles.push(<span class="particle" style={particle_style}></span>);
    };

    return (
      <div>
        <br />
        <h2 style={styles.title}>Twitter</h2>
        <div style={styles.twitter}>
          <a class="twitter-timeline" data-lang="ja" data-height="500" href="https://twitter.com/picos_tackt?ref_src=twsrc%5Etfw">
            Tweets by picos_tackt
          </a> 
        </div>
        {/* <div class="textcontainer">
          <span class="particletext hearts toptext">
            {particles}
          </span>
        </div> */}
        <div className={styles.root} style={styles.container}>
          <h6>copyright 2018 tackt mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
