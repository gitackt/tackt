import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
    borderTop: 'solid 4px #4b8c85',
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
  profile: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '15px',
    background: '#f2f2f2'
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
          {/* <h2 className='title'>Profile</h2> */}
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={8} style={styles.gridLeft}>
              <div style={styles.content}>
              {/* <h1 style={styles.mainTitle}>今までの経歴</h1> */}
              <div style={styles.eyeCatch}>
                <h3>目次</h3>
                <ui>
                  <li>プログラミングの始まり (2016)</li>
                  <li>インターンで働く (2017)</li>
                  <li>サービスを開発する (2017)</li>
                  <li>技術力を高める (2018)</li>
                  <li>ブログを作る (2018)</li>
                  <li>投資ゲームの開発 (2018)</li>
                  <li>スマホアプリの開発 (2019)</li>
                </ui>
              </div>
              <h2 style={styles.sub}>プログラミングの始まり (2016)</h2>
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
               <br /><br /><br />
              高校3年からプログラミングを始め、<span className='marker'>独学で技術を身につけました。</span>
              大学1年の頃、
              <a 
                href={'https://dotinstall.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ドットインストール
              </a>
              でPHPを勉強しながら都市伝説投稿サイトを作りました。
              <span className='blue'>「自分の作ったシステムが動く」</span>というこの時の成功体験はその後大きな力になっています。<br /><br /><br />
              <h2 style={styles.sub}>インターンで働く (2017)</h2>
              大学2年の頃、プログラミングに関して自信はありましたが、独学で開発を学んできたので<span className='blue'>「チーム開発の経験」</span>がありませんでした。
              そこで、チーム開発を学ぶために<span className='marker'>企業でインターンとして働くことを決めました。</span><br /><br /><br />
              何社も訪問をした結果、
              <a 
                href={'https://rank.whatzmoney.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                株式会社whatzmoney
              </a>
              で働かせてもらえることになりました。
              whatzmoneyでは
              <a 
                href={'https://rubyonrails.org/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ruby on Rails
              </a>
              を使った「住宅ローン比較サイト」の開発に参加しました。<br /><br /><br />
              <h2 style={styles.sub}>サービスを開発する (2017)</h2>
              <img
                style={styles.subimage}
                src={'/images/services/vcu.png'}
                alt={'vcu'}
              /><br /><br />
              2017年の冬といえば仮想通貨バブルですが、
              <a 
                href={'https://jp.wantedly.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                wantedly
              </a>
              で知り合った営業担当の方と一緒にWebサービスを作ることになり、
              <span className='marker'>複数の取引所にある仮想通貨の総額</span>を簡単にチェックできるサービス
              「
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a>
              」を作りました。（デザイン・開発は全て私が担当）<br /><br /><br />
              VCUは現在も稼働しており、取引所のAPIキーを入力するだけで残高を取得できます。対応している取引所は<br /><br />
              ・<a 
                href={'https://bitflyer.com/ja-jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitflyer
              </a><br />
              ・<a 
                href={'https://www.binance.com/en'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Binance
              </a><br />
              ・<a 
                href={'https://poloniex.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Poloniex
              </a><br />
              ・<a 
                href={'https://bitbank.cc/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bitbank
              </a><br />
              ・<a 
                href={'https://coincheck.com/ja/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Coincheck
              </a><br />
              ・<a 
                href={'https://zaif.jp/?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zaif
              </a><br />
              ・<a 
                href={'https://www.kucoin.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kucoin
              </a><br />
              ・<a 
                href={'https://www.liquid.com/ja/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quoine
              </a><br /><br />
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
              に関しては、アドレスを入力すればブロックチェーンから直接残高を取得できます。<br /><br /><br />
              <img
                style={styles.subimage}
                src={'/images/vcu_info.png'}
                alt={'vcu_info'}
              /><br /><br />
              VCUは初めてリリースした本格的なWebアプリケーションであり、サーバやインフラに関する経験を積む事が出来ました。
              <span className='blue'>この時自分一人でサービスを公開させた事は今でも大きな自信になっています。</span><br /><br /><br />
              <h2 style={styles.sub}>技術力を高める (2018)</h2>
              大学3年になった頃、<span className='blue'>駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。</span><br /><br /><br />
              MICINは今まで見た事がないようなスーパーエンジニアの方が何人もいて、<span className='marker'>「ここなら絶対に成長できる」と思いインターンを希望しました。</span>
              MICINではReact-nativeやAngularを使った遠隔診療アプリケーション「
              <a 
                href={'https://curon.co/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Curon
              </a>
              」の開発に参加しました。<br /><br /><br />
              <h2 style={styles.sub}>ブログを作る (2018)</h2>
              大学3年の前期、<span className='blue'>「サーバ代が負担になる」</span>問題について真剣に考え始め、<span className='marker'>新たな収入源としてブログを作ることにしました。</span>
              お金をかけないで生きるサバイバル術を書いています。<br /><br /><br />
              <img
                style={styles.subimage}
                src={'/images/mone_info.png'}
                alt={'mone_info'}
              /><br /><br /><br />
              ブログはこちら → 
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a><br /><br /><br />
              現在はこのブログの
              <a 
                href={'https://www.google.co.jp/adsense/start/#/?modal_active=none'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adsence
              </a>
              収入のみでサーバ代を賄えています。ちなみに、ブログメディアを運営する事でSEO対策やWordpress最適化の知識がつきました。<br /><br /><br />
              <h2 style={styles.sub}>投資シミュレーションゲームの開発 (2018)</h2>
              <img
                style={styles.subimage}
                src={'/images/services/babelbubble.png'}
                alt={'babelbubble'}
              /><br /><br />
              大学3年の夏、ゼミの一環で<span className='blue'>投資シミュレーションゲーム</span>を作ることになりました。
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
                style={styles.subimage}
                src={'/images/babel_info.png'}
                alt={'babel_info'}
              /><br /><br /><br />
              作った投資ゲーム　→　「
              <a 
                href={'https://babel-bubble.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel bubble（バベルバブル）
              </a>
              」<br /><br /><br />
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
              <br /><br /><br />
              <h2 style={styles.sub}>スマホアプリの開発 (2019)</h2>
              <img
                style={styles.subimage}
                src={'/images/services/props.png'}
                alt={'props'}
              /><br /><br />
              大学4年になった頃、<span className='blue'>スマホアプリの開発も始めました。</span><br /><br /><br />
              「同じものを持っているのに、また買ってしまった！」ということがあまりにも多いので、持ち物管理アプリを作りました。<br /><br /><br />
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
              <br /><br /><br />
              <h2 style={styles.sub}>終わりに</h2>
              ここに挙げたサービスは、<span className='marker'>デザインから運用まで全て私が行なっています。</span>
              Webサービスの開発等に関して色々とお役に立てると思うので、ひとまずtwitter・githubをご覧ください。<br /><br /><br />
              また、<span className='blue'>他にも作ったサービス</span>のリンクがこのページの下の方にあるのでご覧ください。
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
                <p>
                  明治大学 商学部 商学科
                  Finance Course (2016 ~ )<br />
                  株式会社Whatzmoney
                  Engineer Intern (2017 ~ 2018)<br />
                  株式会社MICIN
                  Engineer Intern (2018 ~ )<br />
                </p>
                <h4>資格</h4>
                <p>
                  証券アナリスト2次 (CCMA)<br />
                </p>
                <h4>技術</h4>
                <p>
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

