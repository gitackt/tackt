import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class DesignerComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%', background: 'white', color: '#2a2929' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/designer.png"
            alt={'designer'}
          />
        </h2>
      </div>
    );
  }
}

export default DesignerComponent;
