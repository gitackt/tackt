import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

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
              <h1 style={styles.mainTitle}>自己紹介</h1>
              <div style={styles.eyeCatch}>
                <h3>目次</h3>
                <ui>
                  <li>はじめに (2015 ~ )</li>
                  <li>インターンで働く (2017 ~ )</li>
                  <li>サービスを開発する (2017 ~ )</li>
                  <li>スマホアプリの開発 (2019 ~ )</li>
                  <li>ブログを運営する (2018 ~ )</li>
                  <li>自動トレードを作る（2016 ~ ）</li>
                  <li>暗号通貨にハマる（2018）</li>
                </ui>
              </div>
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
              高校3年からプログラミングを始めて独学で技術を身につけました。<br /><br /><br />
              <h2 style={styles.sub}>インターンで働く (2017 ~ )</h2>
              <h3>・Whatzmoney（2017 ~ 2018）</h3>
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
              を使った「住宅ローン比較サイト」の開発に約１年参加しました。<br /><br />
              <h3>・MICIN（2018 ~ ）</h3>
              大学3年になった頃、駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。
              MICINではReact-nativeやAngularを使った遠隔診療アプリケーション「
              <a 
                href={'https://curon.co/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curon
              </a>
              」の開発に約１年参加しています。<br /><br /><br />
              <h2 style={styles.sub}>サービスを開発する (2017 ~ )</h2>
              <h3>・VCU（2017 ~ ）</h3>
              <img
                style={styles.subimage}
                src={'/images/vcu_info.png'}
                alt={'vcu_info'}
              /><br /><br />
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
              です。<br /><br />
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
              に関しては、アドレスを入力すればブロックチェーンから直接残高を取得できます。             
              VCUは初めてリリースした本格的なWebアプリケーションであり、サーバやインフラに関する経験を積む事が出来ました。  <br /><br />

              <h3>・Babel bubble（2018 ~ ）</h3>
              <img
                style={styles.subimage}
                src={'/images/babel_info.png'}
                alt={'babel_info'}
              /><br /><br />
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
              にも合格しました。<br /><br /><br />
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
              <h2 style={styles.sub}>スマホアプリの開発 (2019 ~ )</h2>
              <h3>・Props（2019 ~ ）</h3>
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
              <h2 style={styles.sub}>ブログを運営する (2018 ~ )</h2>
              <h3>・人生は運ゲー（2018 ~ ）</h3>
              <img
                style={styles.subimage}
                src={'/images/mone_info.png'}
                alt={'mone_info'}
              /><br /><br /><br />
              大学3年の前期、<span className='blue'>「サーバ代が負担になる」</span>問題について真剣に考え始め、新たな収入源としてブログを作ることにしました。
              現在はこのブログの
              <a 
                href={'https://www.google.co.jp/adsense/start/#/?modal_active=none'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adsence
              </a>
              収入のみでサーバ代を賄えています。ちなみに、ブログを運営する事でSEO対策やWordpress最適化の知識がつきました。   
              ブログはこちら → 「
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>」<br /><br /><br />
              ブログに使えるかと思い、文章自動生成のプログラムもいくつか作りました。
              形態素解析で自動生成するプログラム「
              <a 
                href={'https://github.com/gitackt/violet'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Violet 
              </a>
             」（バックグラウンドで動かしてWordpressにそのまま投稿させ続ける事もできる）。
             一旦google翻訳で英語にしてから日本語に戻すこと自動リライトするプログラム「
              <a 
                href={'https://github.com/gitackt/freesia'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Freesia 
              </a>」<br /><br />
              <h2 style={styles.sub}>自動トレードを作る（2016 ~ ）</h2>
              <h3>・機械学習でFX（2016）</h3>
              <img
                style={styles.subimage}
                src={'/images/chart_color.png'}
                alt={'chart_color'}
              /><br /><br /><br />
              機械学習が流行ってたので、Chainerというpythonのライブラリを使ってそれっぽいものを作ってみました。
              <a 
                href={'https://www.dukascopy.jp/marketwatch/historical/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                dukascopy
              </a>
              というサイトが提供している為替のヒストリカルデータを学習させて、
              <a 
                href={'https://www.oanda.jp/trade/practice/openaccountv20.do?p=0'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oanda
              </a>
              というFX業者のデモ口座で何日か運用してみましたが全然儲かりませんでした。（やり方間違えた？）
              <br /><br />
              ・
              <a 
                href={'https://github.com/gitackt/fx_with_deep'}
                target="_blank"
                rel="noopener noreferrer"
              >
                機械学習させたデータでFXを取引するコード
              </a>
              <br /><br />
              <h3>・財務データスクレイピング（2017）</h3>
              今度はファンダメンタル分析をしてみようと思い、財務データやマーケット情報をスクレイピングしてくるプログラムを作りました。
              今度は取ってくるだけ取ってきて、データだけが溜まりました。<br /><br />
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
              <h3>・シンプルに自動トレード（2018）</h3>
              考えてもあれなので、単純にボリンジャーバンドで逆張りするプログラムを作って何日か運用してみました。<br />
              まさかの、これが少し儲かりました。
              <br /><br />
              ・
              <a 
                href={'https://github.com/gitackt/tsubaki/tree/master/trading/lib'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボリンジャーバンド逆張りトレードのコード
              </a>
              <br /><br /><br />
              詳しく解説した記事はこちらです<br />
              <a 
                href={'https://monetizealchemist.com/2018/03/10/%E3%83%9C%E3%83%AA%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%90%E3%83%B3%E3%83%89%E3%81%A7%E8%80%83%E3%81%88%E3%82%8B%E3%83%86%E3%82%AF%E3%83%8B%E3%82%AB%E3%83%AB%E6%8A%95%E8%B3%87%E6%88%A6%E7%95%A5/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ボリンジャーバンドで考えるテクニカル投資戦略でFX自動トレードを作ってみた
              </a>
              <br /><br />
              <h2 style={styles.sub}>暗号通貨にハマる（2018）</h2>
              相場は暴落していましたが、
              「
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a>
              」を作った後に暗号通貨やDaapsにハマりました。中でもイーサリアムが好きで、せっせとERC20トークンのAirDropをしたり、
              <a 
                href={'https://www.cryptokitties.co/profile/0x9ddb22480bd6f3d56de73457fe657520d5da6693'}
                target="_blank"
                rel="noopener noreferrer"
              >
                CryptoKitties
              </a>
              や
              <a 
                href={'https://blockchaincuties.com/pets_my'}
                target="_blank"
                rel="noopener noreferrer"
              >
                BlockchainCuties
              </a>
              で遊んでました。
              また、Web3.jsを使ってイーサリアムのガス相場を取得したり、入力されたアドレスのETH残高を取得できるLINEボット「
              <a 
                href={'https://line.me/R/ti/p/%40hbi0385s'}
                target="_blank"
                rel="noopener noreferrer"
              >
                暗号くん
              </a>
              」も作りました。
              <br /><br />
              <h2 style={styles.sub}>終わりに</h2>
              主にフロントエンドはReact、React-native、Typescript、サーバサイドはNode.js、Django、Railsを使っています。
              ここに挙げたオリジナルサービスは、デザインから開発まで全て私が作っています。
              作ったサービスのリンクがこのページの下の方にあるのでご覧ください。
              <br /><br /><br />
                <div style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
                <a
                  href={'https://twitter.com/picos_tackt?lang=ja'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                >
                  <div style={styles.twitter}>
                    Twitter
                  </div>
                </a>
                <a
                  href={'https://github.com/gitackt'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', textAlign: 'center' }}
                >
                  <div style={styles.button}>
                    Github
                  </div>
                </a>
              </div>
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

