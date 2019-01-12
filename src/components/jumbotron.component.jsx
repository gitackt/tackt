import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Particles from 'react-particles-js';
// import { TwitterIcon } from 'react-share';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '160px',
    paddingBottom: '100px',
    textAlign: 'center',
    borderBottom: 'solid 6px #F3F1EE',
    // background: 'url(/images/background.png)',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right',
    // backgroundSize: '60%',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    height: '60px',
    width: '240px',
    fontSize: '16px',
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

    return (
      <div
        style={{ background: 'white' }}
      >
        <div
          style={styles.container}
        >
          <Particles 
            style={{ position: 'absolute', top: 0, left: 0 }}
            params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#2d2d2d"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#3e3e3e",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": false
            }} />
           
          <Grid container justify={'center'}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <div style={styles.title}>
              <h1 style={{ fontSize: '35px' }}>Takuto Mitsuhashi</h1>
              <h2 style={{ fontSize: '20px' }}>Portfolio Website</h2>
              <br/>
              <Button onClick={this.handleOpen} style={styles.button}>Ethereum</Button>
              <Modal
                open={this.state.open}
                onClose={this.handleClose}
              >
                <div style={styles.address}>
                  <img
                    style={styles.image}
                    src={"/images/background.png"}
                    alt={"golden baby"}
                  />   
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
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
