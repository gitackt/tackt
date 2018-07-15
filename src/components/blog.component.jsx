import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ height: '300px' }}>
        <h2>blog</h2>
      </div>
    );
  }
}

export default BlogComponent;
