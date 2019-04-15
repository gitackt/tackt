import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {

    const styles = {
      topImage: {
        width: '80%',
        maxWidth: '400px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    };

    return (
      <div className='main-container'>  
        <h1 className='jumbotron-title'>Takuto Mitsuhashi</h1>
        <div className='portfolio'><span style={{ color: '#2dd8ca' }}>Portfolio</span> Website</div>
        <img
          style={styles.topImage}
          src={'/images/profile.png'}
          alt={'top'}
        />
      </div>
    );
  }
}

export default JumbotronComponent;
