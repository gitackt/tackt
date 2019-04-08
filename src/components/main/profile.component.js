import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
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
  content: {
    fontSize: '18px',
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
  button: {
    height: '20px',
    width: '80%',
    borderRadius: '5px',
    background: '#FFAF00',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '16px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '20px',
  },
  subimage: {
    width: '100%',
    maxWidth: '400px',
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
              <h2 style={styles.sub}>はじめに</h2>
              <br />
              {/* <img
                style={styles.image}
                src={'/images/gallery/tpok.png'}
                alt={'tpok'}
              />
              <br /><br /> */}
              三橋拓人(
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              )です。
              株式会社 
              <a 
                href={'https://micin.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                MICIN
              </a>
               でエンジニアインターンをしている大学4年生です。
              普段は主に 
              <a 
                href={'https://facebook.github.io/react-native/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                React-Native
              </a>
               や 
              <a 
                href={'https://angular.io/'}
                target="_blank"
                rel="noopener noreferrer"
              >
               Angular
              </a>
              でフロントエンドの開発をしています。
              個人で受託開発やオリジナルWebサービスの開発も行っています。<br /><br /><br />
              <h2 style={styles.sub}>プログラミングの始まり (2016)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/code.jpg'}
                alt={'code'}
              /><br /><br />
              高校3年からプログラミングを始め、<span className='marker'>独学で技術を身につけました。</span><br /><br /><br />
              大学1年の頃、
              <a 
                href={'https://dotinstall.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                ドットインストール
              </a>
              でPHPを勉強しながら
              「都市伝説投稿サイト」を作りました。
              この時の<span className='blue'>「自分の作ったシステムが動く」</span>という成功体験が、後にモチベーションを継続させる要因になりました。<br /><br /><br />
              <h2 style={styles.sub}>インターンで働く (2017)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/work.jpg'}
                alt={'work'}
              /><br /><br />
              大学2年になった頃、プログラミングに関してはある程度の自信がありました。<br /><br /><br />
              しかし独学で開発を学んできた私は、<span className='blue'>「チーム開発の経験がない」</span>というプログラマーの仕事をする上での負い目がありました。
              それまで一人で作ってきたので、誰かと協力して一つのプロジェクトを作っていくイメージが全く出来なかったのです。<br /><br /><br />
              そこで、チーム開発を学ぶために<span className='marker'>企業でインターンとして働くことを決めました。</span><br /><br /><br />
              何社も訪問をした結果、株式会社
              <a 
                href={'https://whatzmoney.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                whatzmoney
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
              を使った開発から、
              <a 
                href={'https://git-scm.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git
              </a>
              の使い方までチーム開発に必要な多くのスキルを学びました。<br /><br /><br />
              <h2 style={styles.sub}>サービスを開発する (2017)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/coin.jpg'}
                alt={'coin'}
              /><br /><br />
              大学2年の冬、
              <a 
                href={'https://jp.wantedly.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                wantedly
              </a>
              で知り合った営業担当の方と、一緒にWebサービスを作ることになりました。<br /><br /><br />
              2017年の冬といえば、仮想通貨バブルが起きた時期ですが、この時は<span className='blue'>「仮想通貨ポートフォリオ管理アプリ」</span>を作りました。<br /><br /><br />
              当時、多くの人が複数の取引所に分散して仮想通貨を保有していました。<br /><br /><br />
              すると<span className='blue'>「自分が総額でいくら仮想通貨を持っているのか分からない」</span>という人が続出します。<br /><br /><br />
              そこで、<span className='marker'>取引所のAPIキーを入力するだけで、全ての取引所の総額を簡単にチェックできるサービスを作りました。</span><br /><br /><br />
              それが「
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a>
              」です。<br /><br /><br />
              VCUは現在も稼働しており、対応している取引所は<br /><br />
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
              です。<br /><br /><br />
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
              リリース直後にバブル崩壊があり、サービスはそんなに使われませんでした。<br /><br /><br />
              しかし私にとって、VCUは初めてリリースした本格的なWebアプリケーションであり、サーバやインフラに関する知識や経験を積む事が出来ました。<br /><br /><br />
              <span className='blue'>この時、自分一人でサービスを公開させた経験は、今でも大きな自信になっています。</span><br /><br /><br />
              <h2 style={styles.sub}>MICINへ (2018)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/medi.jpg'}
                alt={'medi'}
              /><br /><br />
              大学3年になった頃、<span className='blue'>駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。</span><br /><br /><br />
              MICINは今まで見た事がないようなスーパーエンジニアの方が何人もいて、React-nativeやAngularなどの最新技術を使っていたという事もあり、<span className='marker'>「ここなら絶対に成長できる」と思いインターンを希望しました。</span><br /><br /><br />
              <h2 style={styles.sub}>ブログを作る (2018)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/blog.jpg'}
                alt={'blog'}
              /><br /><br />
              大学3年の前期、<span className='blue'>「サーバ代が負担になる」</span>という問題について真剣に考え始めました。<br /><br /><br />
              そこで<span className='marker'>新たな収入源としてブログを作ることにしました。</span><br /><br /><br />
              現在はこのブログの
              <a 
                href={'https://www.google.co.jp/adsense/start/#/?modal_active=none'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adsence
              </a>
              収入のみでサーバ代を賄えているので、この計画はそこそこ成功したと思います。<br /><br /><br />
              ちなみに、ブログメディアを運営する事でSEO対策やWordpress最適化の知識がつきました。<br /><br /><br />
              ブログはこちら → 
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>
              <br /><br /><br />
              <h2 style={styles.sub}>投資シミュレーションゲームの開発 (2018)</h2>
              <img
                style={styles.subimage}
                src={'/images/profile/stock.jpg'}
                alt={'stock'}
              /><br /><br />
              大学3年の夏、ゼミの課題で<span className='blue'>「金融リテラシーを向上させる方法」</span>について考えました。<br /><br /><br />
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
              「投資シミュレーションゲームを普及させる」というアプローチをしたのですが、
              現存するほとんどの投資シミュレーションは、レスポンシブ対応すらされていない<span className='blue'>1990年代の様な老舗ゲームばかりでした。</span><br /><br /><br />
              「これじゃスマホ世代は投資シミュレーションゲームとかやらないだろうな。」<br /><br /><br />
              と思ったので、<span className='marker'>自分で投資シミュレーションゲームを作ることにしました。</span><br /><br /><br />
              ゲーム内通貨を使ってアイテムを売買するゲーム「
              <a 
                href={'https://babel-bubble.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel bubble（バベルバブル）
              </a>
              」です。<br /><br /><br />
              アイテムの価格をランダムウォークさせるのではなく、ユーザーの取引によって時価が変動する様にしたことでリアルな取引体験を目指しました。<br /><br /><br />
              <h2 style={styles.sub}>終わりに</h2>
              <span className='marker'>以上がプログラミングを始めてから今までの大まかな経歴です。</span><br /><br /><br />
              <span className='blue'>作ったサービスのリンクはこのページの下の方にあるのでご覧ください。</span>
              <br /><br /><br />
                <div style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
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

