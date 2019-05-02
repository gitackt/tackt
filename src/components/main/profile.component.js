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
              {/* <h1 style={styles.mainTitle}>自己紹介</h1> */}
              {/* <div style={styles.eyeCatch}>
                <h3>目次</h3>
                <ui>
                  <li>はじめに (2015 ~ )</li>
                  <li>インターン (2017 ~ )</li>
                  <li>サービス開発 (2017 ~ )</li>
                  <li>その他 (2016 ~ )</li>
                </ui>
              </div> */}
              <h2 style={styles.sub}>はじめに (2015 ~ )</h2>
              三橋拓人(
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              )です。 
              <a 
                href={'https://micin.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社MICIN
              </a>
               でエンジニアインターンをしながら、個人でWebサービスやアプリを開発しています。
              高校3年からプログラミングを始めて独学で技術を身につけました。
              このサイトに載せてあるオリジナルサービスは、デザインから開発まで全て私が作っています。
              作ったサービスのリンクがこのページの下の方にあるのでご覧ください。
              <NameComponent />
              <br /><br />
              <h2 style={styles.sub}>インターン</h2>
              <h3 style={styles.sub_3}>MICIN（2018 ~ ）</h3>
              大学3年になった頃、駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。
              MICINではReact-nativeやAngularを使った遠隔診療アプリケーション「
              <a 
                href={'https://curon.co/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curon
              </a>
              」の開発に約１年参加しています。<br /><br />
              <h3 style={styles.sub_3}>Whatzmoney（2017 ~ 2018）</h3>
              大学2年の頃、チーム開発を学ぶために企業でインターンとして働くことにしました。
              <a 
                href={'https://rank.whatzmoney.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社Whatzmoney
              </a>
              で働かせてもらえることになり、
              <a 
                href={'https://rubyonrails.org/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ruby on Rails
              </a>
              を使った「住宅ローン比較サイト」の開発に約１年参加しました。<br /><br /><br />
              <h2 style={styles.sub}>サービス開発</h2>
              <h3 style={styles.sub_3}>Props（2019）</h3>
              2019年から<span className='blue'>スマホアプリの開発も始めました。</span>
              「同じものを持っているのに、また買ってしまった」ということが多いので、持ち物管理アプリを作りました。<br /><br /><br />
              <img
                style={styles.subimage}
                src={'/images/props_info.png'}
                alt={'props_info'}
              /><br /><br />
              {/* <a 
                href={''}
                target="_blank"
                rel="noopener noreferrer"
              > */}
                Props (iOS) Coming soon
              {/* </a> */}
              <br /><br />
              <a 
                href={'https://play.google.com/store/apps/details?id=com.gitackt.props'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Props (Android)
              </a>
              <br /><br />
              <a 
                href={'https://note.mu/gitackt/n/n7fd91f76ba8a'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ドキュメント
              </a>
              <br /><br />
              <h3 style={styles.sub_3}>Babel bubble（2018）</h3>
              大学3年の夏、投資シミュレーションゲーム「
              <a 
                href={'https://babel-bubble.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel bubble
              </a>
              」を作りました。
              プログラミングばかりしていますが、学校では金融を勉強しています。
              お金のことに興味があり、3年の夏には
              <a 
                href={'https://www.saa.or.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                証券アナリスト2次試験
              </a>
              にも合格しました。<br /><br />
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
              大学3年の前期、<span className='blue'>「サーバ代が負担になる」</span>問題について真剣に考え始め、新たな収入源としてブログを作ることにしました。
              現在はこのブログの
              <a 
                href={'https://www.google.co.jp/adsense/start/#/?modal_active=none'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adsence
              </a>
              収入のみでサーバ代を賄えています。  
              ブログはこちら → 「
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>」<br /><br />
              <img
                style={styles.subimage}
                src={'/images/mone_info.png'}
                alt={'mone_info'}
              /><br /><br />
              <h3 style={styles.sub_3}>VCU（2017）</h3>
              2017年の冬といえば仮想通貨バブルですが、
              複数の取引所にある仮想通貨の総額を簡単にチェックできるサービス
              「
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a>
              」を作りました。
              取引所のAPIキーを入力するだけで残高を取得できます。対応している取引所は
              ・<a 
                href={'https://bitflyer.com/ja-jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitflyer
              </a>
              ・<a 
                href={'https://www.binance.com/en'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Binance
              </a>
              ・<a 
                href={'https://poloniex.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Poloniex
              </a>
              ・<a 
                href={'https://bitbank.cc/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitbank
              </a>
              ・<a 
                href={'https://coincheck.com/ja/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Coincheck
              </a>
              ・<a 
                href={'https://zaif.jp/?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zaif
              </a>
              ・<a 
                href={'https://www.kucoin.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kucoin
              </a>
              ・<a 
                href={'https://www.liquid.com/ja/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quoine
              </a>
              です。
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
              /><br /><br />
              <h2 style={styles.sub}>その他</h2>
              <h3 style={styles.sub_3}>財務データスクレイピング（2017）</h3>
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
              <br /><br />
              <h3 style={styles.sub_3}>シンプルに自動トレード（2018）</h3>
              ・
              <a 
                href={'https://github.com/gitackt/tsubaki/blob/master/trading/lib/order.py'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボリンジャーバンド逆張りトレードのコード
              </a>
              <br />
              ・
              <a 
                href={'https://monetizealchemist.com/2018/03/10/%E3%83%9C%E3%83%AA%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%90%E3%83%B3%E3%83%89%E3%81%A7%E8%80%83%E3%81%88%E3%82%8B%E3%83%86%E3%82%AF%E3%83%8B%E3%82%AB%E3%83%AB%E6%8A%95%E8%B3%87%E6%88%A6%E7%95%A5/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボリンジャーバンドで考えるテクニカル投資戦略でFX自動トレードを作ってみた
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
                  Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue,
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

