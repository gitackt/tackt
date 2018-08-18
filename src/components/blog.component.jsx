import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogComponent extends Component {

  render() {

    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%' }}>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '270px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/blog.png"
            alt={'blog'}
          />
        </h2>
        </Link>
      </div>
    );
  }
}

export default BlogComponent;
