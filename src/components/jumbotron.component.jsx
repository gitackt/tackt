import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
// import { TwitterIcon } from 'react-share';

const styles = {
  container: {
    position: 'relative',
    height: '450px',
    paddingTop: '100px',
    paddingBottom: '60px',
    textAlign: 'center',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '240px',
    height: 'auto',
  },
  title: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
  },
  dis: {
    width: '300px',
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
    borderRadius: '10px',
    background: '#eb346b',
    color: 'white',
  },
  twitter: {
    marginTop: '50px'
  }
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
        style={{ color: '#202A38', background: 'white' }}
      >
        <div
          style={styles.container}
        >
          {/* <img
            style={styles.image}
            src={'/images/profile_pure.png'}
          /> */}
          <div style={styles.title}>
            <h1>穴を見つけて<br/>穴を埋める</h1>
            <h2>投資と開発でみんなHappy</h2>
            <p style={styles.dis}>
              三橋拓人の制作実績や作品が掲載されたオフィシャルサイトです。
            </p>
            <Button onClick={this.handleOpen} style={styles.button}>イーサリアムで繋がる</Button>
            {/* <div 
              style={styles.twitter}
            >
              <a
                href="https://twitter.com/picos_tackt?lang=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon size={52} round={true} style={{ boxShadow: '2px 2px 50px rgba(0,0,0,0.2)' }} />
              </a>
            </div> */}
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
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
