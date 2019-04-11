import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';
import { particle } from '../../params/particle';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '50px',
    paddingBottom: '100px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px',
  },
}

class JumbotronSmallComponent extends PureComponent {

  render() {
    return (
      <div className='small-jumbo'>
        <div
          style={styles.container}
        >  
          <div style={styles.title}>
            <h1>TAKUTO MITSUHASHI</h1>
            <Particles params={particle} style={{ marginTop: '-200px', width: '100%' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default JumbotronSmallComponent;
