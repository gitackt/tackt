import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { NameComponent } from './name.component';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
    // borderTop: 'solid 4px #4b8c85',
  },
  profile: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '15px',
    background: '#f2f2f2'
  },
  image: {
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
  },
  gridLeft: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '25px',
  },
  grid: {
    textAlign: 'center',
    borderRadius: '10px',
    margin: '15px',
    padding: '15px',
  },
  eyeCatch: {
    textAlign: 'left',
    borderRadius: '5px',
    padding: '35px',
    paddingTop: '10px',
    background: '#f2f2f2',
    marginTop: '30px',
    marginBottom: '60px',
  },
  content: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#574F5D',
    lineHeight: '1.8',
    marginBottom : '1.8em',
  },
  sub: {
    color: '#333035',
    fontWeight: '500',
    borderBottom: 'solid 3px #333035',
  },
  mainTitle: {
    color: '#333035',
    fontWeight: '500',
    fontSize: '28px',
    paddingLeft: '10px',
  },
  button: {
    height: '30px',
    width: '80%',
    borderRadius: '5px',
    background: '#FFAF00',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '18px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #eda50b',
    borderTop: 'solid 2px #eda50b',
    borderBottom: 'solid 4px #eda50b',
  },
  twitter: {
    height: '30px',
    width: '80%',
    borderRadius: '5px',
    background: '#35d3ff',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '18px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #2ac3ed',
    borderTop: 'solid 2px #2ac3ed',
    borderBottom: 'solid 4px #2ac3ed',
  },
  subimage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  coin: {
    maxWidth: '50px',
    borderRadius: '10px',
  },
  sub_3: {
    borderLeft: 'solid 4px #2AD8C9',
    padding: '5px',
    paddingLeft: '15px',
    margin: '5px',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: 'normal',
  }
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
      <div style={{ background: 'white' }}>
        <div>
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={8} style={styles.gridLeft}>
              <div style={styles.content}>
              <h2 style={styles.sub}>はじめに</h2>
              三橋拓人(
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              )です。個人でWebサービスやアプリを開発しています。
              <NameComponent />
              <br /><br />
              <h2 style={styles.sub}>インターン</h2>
              <h3 style={styles.sub_3}>
                <a 
                  href={'https://micin.jp/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MICIN（2018 ~ ）
                </a>
              </h3>
              React-nativeやAngularを使った遠隔診療アプリケーション「
              <a 
                href={'https://curon.co/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curon
              </a>
              」の開発に約１年参加しています。<br /><br />
              <h3 style={styles.sub_3}>
              <a 
                href={'https://micin.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatzmoney（2017 ~ 2018）
              </a>
              </h3>
              Ruby on Railsを使った「住宅ローン比較サイト」の開発に約１年参加しました。<br /><br /><br />
              <h2 style={styles.sub}>サービス開発</h2>
              <h3 style={styles.sub_3}>Props（2019）</h3>
              持ち物管理アプリを作りました。<br /><br />
              <a 
                href={'https://itunes.apple.com/us/app/props-%E6%8C%81%E3%81%A1%E7%89%A9%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%97%E3%83%AA/id1460285997?l=ja&ls=1&mt=8'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Props (iOS)
              </a>
              <br /><br />
              <a 
                href={'https://play.google.com/store/apps/details?id=com.gitackt.props'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Props (Android)
              </a>
              <br /><br />
              <img
                style={styles.subimage}
                src={'/images/props_info.png'}
                alt={'props_info'}
              /><br /><br />

              <h3 style={styles.sub_3}>Babel bubble（2018）</h3>
              投資シミュレーションゲームを作りました。<br /><br />
              <a 
                href={'https://babel-bubble.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel bubble
              </a>
              <br /><br />
              <img
                style={styles.subimage}
                src={'/images/babel_info.png'}
                alt={'babel_info'}
              /><br /><br />
              <img
                style={styles.coin}
                src={'/images/balls/bubble_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/gum_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/cake_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/honey_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/cocoa_coin.png'}
                alt={'bubble'}
              />
              <img
                style={styles.coin}
                src={'/images/balls/mono_coin.png'}
                alt={'bubble'}
              />
              <br /><br />
              <h3 style={styles.sub_3}>人生は運ゲー（2018）</h3>
              サーバ代を稼ぐためブログを作りました。<br /><br />
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>
              <br /><br />
              <img
                style={styles.subimage}
                src={'/images/mone_info.png'}
                alt={'mone_info'}
              /><br /><br />
              <h3 style={styles.sub_3}>VCU（2017）</h3>
              複数の取引所にある仮想通貨の総額を簡単にチェックできるサービスを作りました。<br /><br />
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a><br /><br />
              主要な8取引所の仮想通貨残高をAPIキーを入力するだけで取得できます。
              また、
              <a 
                href={'https://www.bitcoin.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitcoin
              </a>
              と
              <a 
                href={'https://www.ethereum.org/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ethereum
              </a>
              に関しては、アドレスを入力すればブロックチェーンから直接残高を取得できます。<br /><br />
              <img
                style={styles.subimage}
                src={'/images/vcu_info.png'}
                alt={'vcu_info'}
              />
              <br /><br />
              <h2 style={styles.sub}>その他</h2>
              ・
              <a 
                href={'https://github.com/gitackt/tsubaki/blob/master/research/lib/scraping/financial_infomation.py'}
                target="_blank"
                rel="noopener noreferrer"
              >
                EDINETから財務データを取ってくるコード
              </a>
              <br />
              ・
              <a 
                href={'https://github.com/gitackt/tsubaki/blob/master/research/lib/scraping/stock_scraping.py'}
                target="_blank"
                rel="noopener noreferrer"
              >
                〇〇証券から株式・ETF・REITの情報を取ってくるコード
              </a>
              <br />
              ・
              <a 
                href={'https://github.com/gitackt/tsubaki/blob/master/trading/lib/order.py'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボリンジャーバンド逆張りトレードのコード
              </a>
              <br /><br /><br />
              </div>
              <div style={styles.profile}>
                <h3>三橋拓人（みつはしたくと）</h3>
                <h4>経歴</h4>
                <p style={{ fontSize: '12px' }}>
                  明治大学 商学部 商学科
                  Finance Course (2016 ~ )<br />
                  株式会社Whatzmoney
                  Engineer Intern (2017 ~ 2018)<br />
                  株式会社MICIN
                  Engineer Intern (2018 ~ )<br />
                </p>
                <h4>資格</h4>
                <p style={{ fontSize: '12px' }}>
                  証券アナリスト2次 (CCMA)<br />
                </p>
                <h4>技術</h4>
                <p style={{ fontSize: '12px' }}>
                  Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                  Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue, Go,
                  Affinity Designer, Clip Studio
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

