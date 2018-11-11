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

            <h2 style={styles.sub}>はじめにお読みください</h2>
            こんにちは。<span style={{ fontWeight: 'bold', color: '#eb346b' }}>三橋拓人</span>と申します。このサイトは私の活動をまとめたポートフォリオサイトです。
            間違えてサイトに来てしまったという方もせっかくなので流し読みしてください。<br /><br /><br />
            <h3>一体何者？</h3>
            私はバイト代を<span style={{ fontWeight: 'bold' }}>株と仮想通貨</span>にほぼ全額投入する<span style={{ fontWeight: 'bold' }}>大学生投資家</span>です。
            証券アナリスト(CCMA)というそこそこ金融の知識がある人が取れる資格を持っています。<br /><br />


            <h2 style={styles.sub}>経歴と特殊能力</h2>
            <h3>プログラミング</h3>
            高校3年の頃プログラミングに出会い独学で学んできました。大学2年生からITベンチャー企業でインターンをしながら個人で仕事を請け負ってます。
            主に使う技術はPython, Ruby, Django, Rails, JavaScript, React, React-native, Nginx, MySQLです。Webサービスを作って全て1人で動かせます。<br /><br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gitackt"
            >
              Githubのページはこちら
            </a>

            <h3>ファイナンス</h3>
            金融の分野に興味があったので証券アナリスト資格を取得しました。バイトで稼いだお金はほぼ株、仮想通貨、投資信託に投資しています。
            過去に機械学習で過去のチャートを学習させてFXのデモトレード口座で運用してみましたが資産がどんどん溶けていき市場の効率性を思い知りました。
            現在はこの反省を生かしてネット上の財務データをスクレイピングで取得しファンダメンタル分析を行うシステムを作っています。<br />


            <h3>漫画</h3>
            趣味で漫画とかイラストを描いています。ゴシックホラーとかアール・ヌーヴォーのかっこかわいい世界観が好きです。<br /><br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pixiv.net/member_illust.php?id=29647166&type=illust"
            >
              Pixivのページはこちら
            </a>


            <h3>経歴</h3>
            明治大学 商学部 (2016 ~ )<br />
            株式会社Whatzmoney (2017 ~ 2018)<br />
            株式会社MICIN (2018 ~ )<br /><br />

            <h2 style={styles.sub}>VALUプロジェクト</h2>
            <h4>「投資に過剰な嫌悪感を示す人」を撲滅するためのサービスを開発する</h4>
            このマニュフェストを掲げた理由は、投資やお金を怪しいと決めつけて全く聞く耳を持たない人が多いからです。<br />
            投資は、商品の性質を理解して、無謀な投機を行わなければ、資産を守る強力な手段になります。<br />
            僕はこのように「本当はいい奴」である投資が一方的に「悪い奴」のように扱われていることに我慢できません。<br />
            たしかに中には怪しい話もあります。しかし全てが悪ではありません。犯罪者が1人でもいる国の国民は全員が犯罪者なのでしょうか？<br />
            僕はこのような投資やお金の「悪いイメージ」を変えていきたいと思っています。学生であるからこそ、エンジニアであるからこそできる事があると思い、このようなマニュフェストを掲げました。<br /><br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://valu.is/tackt3"
            >
              VALUのページはこちら
            </a>

          </p>
        </div>
      </div>

    );
  }
}

