import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {
  render() {
    return (
      <div className="jumbotron-container">
        <h1 className="jumbotron-title">A Programmer</h1>
        <div className="jumbotron-subtitle">
          <span style={{ color: '#2dd8ca' }}>Takuto Mitsuhashi</span>
        </div>
        <div className="small-container">
          <img
            className="jumbotron-image"
            src={'/images/kuma.png'}
            alt={'top'}
          />
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
