import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class WebsiteComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ height: '300px' }}>
        <h2>websites</h2>
      </div>
    );
  }
}

export default WebsiteComponent;
