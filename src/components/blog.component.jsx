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
        <h2>blogs</h2>
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%8A%E3%83%B3%E3%82%B9/"
              target="_blank"
            >
              <h3>ファイナンス</h3>
            </a>
            <p>
              ファイナンス理論や投資の知識をまとめたカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0/"
              target="_blank"
            >
              <h3>プログラミング</h3>
            </a>
            <p>
              プログラミングやアプリ開発の知識をまとめたカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E3%83%A9%E3%82%A4%E3%83%95%E3%83%8F%E3%83%83%E3%82%AF/"
              target="_blank"
            >
              <h3>ライフハック</h3>
            </a>
            <p>
              便利な知識や使える知識をまとめたライフハック系のカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E3%82%B5%E3%83%90%E3%82%A4%E3%83%90%E3%83%AB/"
              target="_blank"
            >
              <h3>サバイバル</h3>
            </a>
            <p>
              生きるための知識やサバイバル術をまとめたカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E4%B8%96%E7%95%8C%E5%8F%B2/"
              target="_blank"
            >
              <h3>世界史</h3>
            </a>
            <p>
              エピソードごとの世界史を簡単に学べるカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E6%A4%8D%E7%89%A9/"
              target="_blank"
            >
              <h3>植物</h3>
            </a>
            <p>
              花などの植物の関する知識をまとめたカテゴリです。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <a
              href="https://monetizealchemist.com/category/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3/"
              target="_blank"
            >
              <h3>デザイン</h3>
            </a>
            <p>
              デザインを作るのに必要な知識やコツをまとめたカテゴリです。
            </p>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default BlogComponent;
