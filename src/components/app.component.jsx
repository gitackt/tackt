import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class AppComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ height: '300px' }}>
        <h2>apps</h2>
      </div>
    );
  }
}

export default AppComponent;
