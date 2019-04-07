import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {
    return (
      <div className='main-container'>  
        <h1 className='jumbotron-title'>Takuto Mitsuhashi</h1>
        <div className='portfolio'><span style={{ color: '#2dd8ca' }}>Portfolio</span> Website</div>
        <div className='skip-to-content' onClick={this.props.onChange}>Skip Slide</div>
      </div>
    );
  }
}

export default JumbotronComponent;
