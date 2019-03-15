import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'left',
    background: 'white',
    marginTop: '30px',
    // borderBottom: 'solid 6px #F3F1EE',
  },
  image: {
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  button: {
    height: '20px',
    width: '220px',
    marginTop: '30px',
    textAlign: 'center',
    borderRadius: '200px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '13px',
    padding: '10px',
    paddingTop: '11px',
    textDecoration: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitle: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'center',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 7px #F3F1EE',
  },
  title: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 7px #F3F1EE',
  },
  price: {
    fontSize: '25px',
    textAlign: 'center',
    color: '#d9466c',
    fontWeight: 'bold',
  },
};

export class PriceComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ paddingTop: '5px' }}>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} sm={3} style={styles.grid}>
            <h2 style={styles.subtitle}>Light</h2>
            <p style={{ fontSize: '13px', padding: '10px', textAlign: 'center' }}>
              サーバ初期設定<br />
              サーバ保守管理<br />
              独自ドメイン取得<br />
              Wordpressブログ開設<br />
              Baseネットショップ開設<br />
              サーバセキュリティ設定<br />
            </p>
            <h2 style={styles.price}>5,000円 ~ </h2>
          </Grid>
          <Grid item xs={12} sm={3} style={styles.grid}>
            <h2 style={styles.subtitle}>Standard</h2>
            <p style={{ fontSize: '13px', padding: '10px', textAlign: 'center' }}>
              コーディング<br />
              Webサーバ構築<br />
              サイトSEO設定<br />
              サイト常時SSL化<br />
              サイトコード修正<br />
              ホームページ作成<br />
            </p>
            <h2 style={styles.price}>10,000円 ~ </h2>
          </Grid>
          <Grid item xs={12} sm={3} style={styles.grid}>
            <h2 style={styles.subtitle}>Pro</h2>
            <p style={{ fontSize: '13px', padding: '10px', textAlign: 'center'  }}>
              LINE Bot<br />
              iOSアプリ<br />
              Androidアプリ<br />
              システム開発<br />
              サイトデザイン<br />
              データベース設計<br />
            </p>
            <h2 style={styles.price}>30,000円 ~ </h2>
          </Grid>
        </Grid>
        <a
            href={'https://tackt-m.com'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', textAlign: 'center' }}
          >
            <div style={styles.button}>
              価格設定の詳細はこちら
            </div>
          </a>
      </div>
    );
  }
}

