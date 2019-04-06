import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {
    return (
      <div>
        <div className='main-container'>   
          <div style={{ textAlign: 'center' }}>        
            <div className='main-title'>
              <h1>Takuto Mitsuhashi</h1>
            </div>
            <div className='portfolio'>
              <span style={{ color: '#2dd8ca' }}>Portfolio</span> Website
            </div>
            <div className='content-button-small' onClick={this.props.onChange}>
              Skip Slide
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
