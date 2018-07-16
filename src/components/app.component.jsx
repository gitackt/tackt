import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class AppComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%', background: '#1D1E19', color: 'white' }}>
        <h2>apps</h2>
      </div>
    );
  }
}

export default AppComponent;
