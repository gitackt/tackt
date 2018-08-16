import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class BlogPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
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
              人生は運ゲー
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

export default BlogPageComponent;
