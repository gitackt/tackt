import React, { Component } from 'react';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%' }}>
        <h2>blog</h2>
        <h3>人生は運ゲー</h3>
        <a
          href="https://monetizealchemist.com"
          target="_blank"
        >
          https://monetizealchemist.com
        </a>
      </div>
    );
  }
}

export default BlogComponent;
