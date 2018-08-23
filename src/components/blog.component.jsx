import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogComponent extends Component {

  render() {

    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '220px', height: 'auto', borderRadius: '20px', marginBottom: '20px', marginTop: '100px' }}
            src="/blog.png"
            alt={'blog'}
          />
        </h2>
        <br />
        <Link to="/blog" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              onClick={this.handleOpen}
              style={{ color: '#6CD9F6', borderColor: '#6CD9F6' }}
            >
              公式ブログを見る
              </Button>
          </Link>
      </div>
    );
  }
}

export default BlogComponent;
