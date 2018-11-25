import React, { Component } from 'react';

const styles = {
  root: {
    textAlign: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  container: {
    maxWidth: '800px',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'white',
    borderRadous: '20px'
  },
  modal: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '15px',
    textAlign: 'left',
    color: '#533B3F',
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
  address: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '300px',
    background: '#e0ded7',
    color: '#44373c',
    borderRadius: '10px',
    padding: '10px',
    paddingBottom: '30px',
    textAlign: 'center',
    fontSize: '16px',
  },
  eth: {
    fontSize: '10px',
    marginTop: '2px',
    marginBotton: '30px',
  }
};

export class ProfileComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div style={styles.root}>
        <div style={styles.container}>

          {/* <img
            style={styles.image}
            src="/images/thumb.jpg"
            alt="Thumbnail"
          /> */}
          <p style={styles.modal}>

            <h2>バイト代全額投資家</h2>

            バイト代を投資にほぼ全額投入します。

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://valu.is/tackt3"
            >
              VALU
            </a>
          
            <h2>人生は運ゲー</h2>
            たまに更新されるブログです。
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://monetizealchemist.com"
            >
              ブログ
            </a>


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

          </p>
        </div>
      </div>

    );
  }
}

