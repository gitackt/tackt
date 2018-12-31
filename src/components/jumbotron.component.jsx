import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { TwitterIcon } from 'react-share';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '100px',
    textAlign: 'center',
    borderBottom: 'solid 6px #F3F1EE',
    // background: 'url(/images/background.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right',
    // backgroundSize: '60%',
  },
  image: {
    zIndex: 10, 
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
  },
  grid: {
    textAlign: 'center',
    padding: '30px',
    marginTop: '-50px',
    marginBottom: '50px',
  },
  dis: {
    width: '100%',
    textAlign: 'left',
  },
  address: {
    marginTop: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '320px',
    background: 'white',
    color: '#44373c',
    borderRadius: '10px',
    padding: '5px',
    paddingBottom: '30px',
    textAlign: 'center',
    fontSize: '16px',
  },
  eth: {
    fontSize: '13px',
    marginTop: '2px',
    marginBotton: '30px',
  },
  button: {
    height: '50px',
    width: '200px',
    marginTop: '50px',
    marginBottom: '40px',
    borderRadius: '10px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
  },
  twitter: {
    marginTop: '50px'
  },
}

class JumbotronComponent extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    let particles = []

    function random_value(m,n) {
      m = parseInt(m, 10);
      n = parseInt(n, 10);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
    }

    const heartcount = (500/50)*5;
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
      <div
        style={{ background: 'white' }}
      >
        <div
          style={styles.container}
        >
          <Grid container justify={'center'}>
            <Grid item xs={12} md={4}>
              <div style={styles.title}>
              <h1>穴を見つけて<br/>穴を埋める</h1>
              <h2>それっぽいものを作る専門家</h2>
              <br/><br/>
              <p style={styles.dis}>
                「今風のそれっぽいサイトを作りたい！」
                当サイトは私の様々な分野における実績や作品が掲載されたポートフォリオサイトです。
              </p>
              <br/>
              <Button onClick={this.handleOpen} style={styles.button}>イーサリアムで繋がる</Button>
              <Modal
                open={this.state.open}
                onClose={this.handleClose}
              >
                <div style={styles.address}>
                  <h3 style={{ fontSize: '19px' }}>Ethereum Adreess</h3>
                  <div style={styles.eth}>
                    <br />
                    0x9Ddb22480BD6F3D56de73457Fe657520D5da6693
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </Modal>
            </div>
            </Grid>
            <Grid item xs={12} md={4} style={styles.grid}>
            </Grid>
          </Grid>
          <div class="textcontainer">
            <span class="particletext hearts toptext">
              {particles}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
