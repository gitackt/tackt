import React, { Component } from 'react';

class JumbotronComponent extends Component {

  state = {
    open: false
  };

  render() {
    return (
      <div 
        style={{ position: 'relative', top: -55, paddingTop: '200px', height: '470px', backgroundImage: `url('/bubble.png')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center', marginBottom: '20px' }}
        // style={{ position: 'relative', top: -55, paddingTop: '230px', height: '470px' }}
      >
        <h1>
          <img
            style={{ position: 'relative', width: '250px', marginTop: '50px', height: 'auto' }}
            src="/tackt_logo.png"
            alt={'tackt'}
          />
          <br />
          <img
            style={{ position: 'relative', width: '180px', marginTop: '130px', height: 'auto' }}
            src="/profile_button.png"
            alt={'profile_button'}
            onClick={() => this.setState({ open: true })}
          />
        </h1>
      </div>
    );
  }
}

export default JumbotronComponent;
