import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {

    const styles = {
      topImage: {
        width: '80%',
        maxWidth: '350px',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '70px',
        borderRadius: '300px',
      },
    };

    return (
      <div className='main-container'>  
        <h1 className='jumbotron-title'>A Programmer</h1>
        <div className='portfolio'><span style={{ color: '#2dd8ca' }}>Takuto Mitsuhashi</span></div>
        <img
          style={styles.topImage}
          src={'/images/gallery/kuma.png'}
          alt={'top'}
        />
      </div>
    );
  }
}

export default JumbotronComponent;
