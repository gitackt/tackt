import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProfileComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ height: '300px' }}>
        <h2>profile</h2>
      </div>
    );
  }
}

export default ProfileComponent;
