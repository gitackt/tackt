import React, { Component } from 'react';
// import Slider from "react-slick";
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import SmallProfileComponent from './small.profile.component';
import Button from '@material-ui/core/Button';

class JumbotronComponent extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div 
        style={{ position: 'relative', top: -85, paddingTop: '250px', paddingBottom: '70px', height: '420px', backgroundImage: `url('/bubble.png')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center', marginBottom: '20px' }}
        // style={{ position: 'relative', top: -55, paddingTop: '230px', height: '470px' }}
      >
        <h1>
          <img
            style={{ position: 'relative', width: '210px', height: 'auto' }}
            src="/tackt_logo.png"
            alt={'tackt'}
          />
        </h1>

        <div
          style={{ width: '300px', marginLeft: 'auto', paddingTop: '20px', marginRight: 'auto' }}
        >
          {/* <Slider {...settings}>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
            <div>
              <img
                style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '30px' }}
                src="/vcu.png"
                alt={'vcu'}
              />
            </div>
          </Slider> */}
        </div>

        <br />
        {/* <img
          style={{ position: 'relative', width: '180px', marginTop: '70px', height: 'auto' }}
          src="/profile_button.png"
          alt={'profile_button'}
          onClick={this.handleOpen}
        /> */}
        <Button 
          variant="outlined" 
          size="large"
          onClick={this.handleOpen}
          style={{ color: '#1DD6D1', borderColor: '#1DD6D1' }}
        >
          profile
        </Button>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Card style={{ background: "white", margin: "5%" }}>
            <SmallProfileComponent />
          </Card>
        </Modal>
        
      </div>
    );
  }
}

export default JumbotronComponent;
