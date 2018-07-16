import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProjectComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%' }}>
        <h2>projects</h2>
      </div>
    );
  }
}

export default ProjectComponent;
