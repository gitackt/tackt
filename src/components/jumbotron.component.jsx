import React, { Component } from 'react';

class JumbotronComponent extends Component {

  render() {
    return (
      <div 
        // style={{ position: 'relative', top: -55, paddingTop: '200px', height: '450px', backgroundImage: `url('/background.jpg')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center' }}
        style={{ position: 'relative', top: -55, paddingTop: '230px', height: '470px' }}
      >
        <h1>
          <img
            style={{ position: 'relative', width: '250px', height: 'auto' }}
            src="/tackt.png"
            alt={'tackt'}
          />
        </h1>
      </div>
    );
  }
}

export default JumbotronComponent;
