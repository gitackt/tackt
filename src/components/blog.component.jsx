import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/blog.png"
            alt={'blog'}
          />
        </h2>
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={12} md={12} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/"
              target="_blank"
            >
              <h3>人生は運ゲー</h3>
            </a>
            {/* <p>
              花などの植物の関する知識をまとめたカテゴリです。
            </p> */}
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default BlogComponent;
