import React, { Component } from 'react';

class JumbotronComponent extends Component {

  render() {
    return (
      <div 
        style={{ position: 'relative', top: -55, paddingTop: '200px', height: '400px', backgroundImage: `url('/background.jpg')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center'  }}
      >
          <h1>tackt</h1>
      </div>
    );
  }
}

export default JumbotronComponent;
