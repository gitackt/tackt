import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    paddingTop: '80px',
    paddingBottom: '20px',
    textAlign: 'left',
    background: '#202A38',
    borderRadous: '20px'
  },
  image: {
    width: '100%',
  },
  sub: {
    color: 'white',
    background: '#44373c',
    borderRadius: '10px',
    padding: '20px',
  },
  container1: {
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '90px',
    maxWidth: '1200px',
  },
  grid: {
    textAlign: 'center',
    marginBottom: '10px',
    marginTop: '10px',
    padding: '20px',
    color: 'white',
    fontSize: '12px',
  },
  button: {
    height: '30px',
    width: '160px',
    marginTop: '50px',
    borderRadius: '10px',
    background: '#eb346b',
    color: 'white',
    fontSize: '13px',
    padding: '12px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textDecoration: 'none',
  }
};

export class ProfileComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

        <div style={styles.container}>

          {/* <img
            style={styles.image}
            src="/images/thumb.jpg"
            alt="Thumbnail"
          /> */}

        <Grid container justify={'center'} style={styles.container1}>
          <Grid item xs={12} sm={6} md={4} style={styles.grid}>
            <h3>エンジニア</h3>
              Python, Ruby, Django, Rails, JavaScript, React, React-native, Nginx, MySQL等を使って開発を行います。
              デザイン・サイト設計からコーディング・デプロイまで幅広く承ります。
            <br /><br /><br />
            <a
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gitackt"
            >
              Githubはこちら
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={styles.grid}>
            <h3>投資家</h3>
              「バイト代全額投資家」としてバイト代を投資にほぼ全額投入します。投資銘柄の詳細はVALUにて公開します。
              FXの自動トレードシムテムの開発も行なっています。
            <br /><br /><br />
            <a
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
              href="https://valu.is/tackt3"
            >
              VALUはこちら
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={styles.grid}>
            <h3>ブロガー</h3>
            「人生は運ゲー」というタイトルのブログをたまに更新します。
            お金をかけずに生き延びるサバイバル術やファイナンス・プログラミングの記事を書いています。
            <br /><br /><br />
            <a
              style={styles.button}
              target="_blank"
              rel="noopener noreferrer"
              href="https://monetizealchemist.com"
            >
              ブログはこちら
            </a>
          </Grid>
        </Grid>


            {/* <h2 style={styles.sub}>何ができるの？</h2>
            <h3>プログラミング</h3>
            主に使う技術はPython, Ruby, Django, Rails, JavaScript, React, React-native, Nginx, MySQLです。Webサービスを作って全て1人で動かせます。<br /><br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gitackt"
            >
              Githubのページはこちら
            </a>

            <h3>ファイナンス</h3>
            テクニカル指標を機械学習で分析して失敗した反省を生かして、ネット上の財務データをスクレイピングで取得しファンダメンタル分析を行うシステムを作っています。<br />


            <h3>漫画</h3>
            趣味でこのサイトやSNSのトップ画像を描いて遊んでいます。ゴシックホラーとかアール・ヌーヴォーの世界観が好きです。<br /><br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pixiv.net/member_illust.php?id=29647166&type=illust"
            >
              Pixivのページはこちら
            </a>


            <h3>その他</h3>
            DTMで作曲してみたい。<br /><br />


            <h3>経歴</h3>
            明治大学 商学部 (2016 ~ )<br />
            株式会社Whatzmoney (2017 ~ 2018)<br />
            株式会社MICIN (2018 ~ )<br /><br /> */}

        </div>

    );
  }
}

