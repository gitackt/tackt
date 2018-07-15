import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class WorkComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ height: '300px' }}>
        <h2>works</h2>
      </div>
    );
  }
}

export default WorkComponent;
