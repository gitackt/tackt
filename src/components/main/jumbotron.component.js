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
      },
      button: {
        height: '30px',
        width: '80%',
        borderRadius: '5px',
        background: '#FFAF00',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: '18px',
        padding: '15px',
        textDecoration: 'none',
        marginTop: '10px',
        border: 'solid 3px #eda50b',
        borderTop: 'solid 2px #eda50b',
        borderBottom: 'solid 4px #eda50b',
      },
      twitter: {
        height: '30px',
        width: '80%',
        borderRadius: '5px',
        background: '#35d3ff',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: '18px',
        padding: '15px',
        textDecoration: 'none',
        marginTop: '10px',
        border: 'solid 3px #2ac3ed',
        borderTop: 'solid 2px #2ac3ed',
        borderBottom: 'solid 4px #2ac3ed',
      },
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
        <div style={{ width: '200px', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto' }}>
          <a
            href={'https://twitter.com/picos_tackt?lang=ja'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            <div style={styles.twitter}>
              Twitter
            </div>
          </a>
          <a
            href={'https://github.com/gitackt'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            <div style={styles.button}>
              Github
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
