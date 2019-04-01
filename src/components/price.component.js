import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'left',
    background: 'white',
    marginTop: '30px',
  },
  grid: {
    textAlign: 'center',
    paddingBottom: '5px',
    paddingTop: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '12px',
    borderRadius: '10px',
    margin: '5px',
  },
  subtitle: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'center',
    padding: '20px',
    fontSize: '26px',
    fontWeight: 'normal',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 2px #EAEAEA',
  },
  content: {
    fontSize: '13px', 
    padding: '10px', 
    textAlign: 'center'
  },
  image: {
    height: '250px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
};

export class PriceComponent extends PureComponent {

  render() {
    return (
      <div style={{ paddingTop: '5px' }}>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/web.png"}
              alt={"web"}
            />
            <h2 style={styles.subtitle}>ウェブ運用</h2>
            <p style={styles.content}>
              サーバ復旧<br />
              ブログ開設<br />
              ショップ開設<br />
              ドメイン変更<br />
              サーバ初期設定<br />
              サーバ保守管理<br />
              独自ドメイン取得<br />
              セキュリティ設定<br />
            </p>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/site.png"}
              alt={"site"}
            />
            <h2 style={styles.subtitle}>サイト制作</h2>
            <p style={styles.content}>
              コーディング<br />
              Webサーバ構築<br />
              サイトSEO設定<br />
              サイト常時SSL化<br />
              サイトコード修正<br />
              ホームページ作成<br />
              Wordpressブログ開設<br />
              Wordpressサーバ移行<br />
            </p>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <img
              style={styles.image}
              src={"/images/db.png"}
              alt={"db"}
            />
            <h2 style={styles.subtitle}>システム開発</h2>
            <p style={styles.content}>
              LINE Bot<br />
              iOSアプリ<br />
              Androidアプリ<br />
              インフラ構築<br />
              システム開発<br />
              サイトデザイン<br />
              データベース設計<br />
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

