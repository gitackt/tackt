import React, { PureComponent } from 'react';

class JumbotronComponent extends PureComponent {

  render() {

    const styles = {
      topImage: {
        width: '80%',
        maxWidth: '350px',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '350px',
      },
      button: {
        height: '20px',
        width: '100px',
        borderRadius: '5px',
        background: '#FFAF00',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: '14px',
        padding: '10px',
        textDecoration: 'none',
        marginTop: '10px',
        border: 'solid 3px #eda50b',
        borderTop: 'solid 2px #eda50b',
        borderBottom: 'solid 4px #eda50b',
      },
      twitter: {
        height: '20px',
        width: '100px',
        borderRadius: '5px',
        background: '#2AD8C9',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        fontSize: '14px',
        padding: '10px',
        textDecoration: 'none',
        marginTop: '10px',
        border: 'solid 3px #26ccbb',
        borderTop: 'solid 2px #26ccbb',
        borderBottom: 'solid 4px #26ccbb',
      },
    };

    return (
      <div className='main-container'>  
        <h1 className='jumbotron-title'>Takuto Mitsuhashi</h1>
        <div className='portfolio'><span style={{ color: '#2dd8ca' }}>Portfolio</span> Website</div>
        <img
          style={styles.topImage}
          src={'/images/gallery/honey.png'}
          alt={'top'}
        />
        <table  style={{ marginTop: '60px', marginLeft: 'auto', marginRight: 'auto' }}>
          <tr>
          <td>
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
          </td>
          <td>
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
          </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default JumbotronComponent;
