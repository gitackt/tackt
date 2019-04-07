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
    lineHeight: '1.7',
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
    fontSize: '17px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '20px',
  },
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
      <div className='flex-container'>
        <div>
          {/* <h2 className='title'>Profile</h2> */}
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={8} style={styles.gridLeft}>
              <div style={styles.content}>
              <h2 style={styles.sub}>はじめに</h2>
              三橋拓人です。（
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              ）
              大学4年生で株式会社
              <a 
                href={'https://micin.jp/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                MICIN
              </a>
              のエンジニアインターンをしています。<br /><br /><br />
              普段は主にReact-NativeやAngularを使ったフロントエンドの開発を行っています。
              またフリーランスエンジニアとして依頼を受けて開発をしたり、個人でWebサービスの開発も行っています。<br /><br /><br />
              <h2 style={styles.sub}>プログラミングの始まり (2016)</h2>
              高校3年からプログラミングを始め、独学で技術を身につけました。<br /><br /><br />
              大学1年の頃、Web開発の知識も技術も無いまま、ただ漠然と自分のサイトを作ってみたいと思っていました。そして、ドットインストールで一番簡単そうなPHPを勉強しながら、力づくで「都市伝説投稿サイト」を作りました。PHPで無理矢理それっぽく動くサイトを作った結果、いつの間にか自作CMSのような物が完成しました。（セキュリティ面はやばい）<br /><br /><br />
              Wordpressという便利な存在を知らなかったという事もあり、結果的にただの車輪の再発明になってしまいましたが、「自分の作ったシステムがそれなりに動く」という、この時の成功体験が、後のモチベーション維持に大きく貢献したと思います。<br /><br /><br />
              <h2 style={styles.sub}>インターンで働く (2017)</h2>
              大学2年になった頃、「自分でプログラムを書いてシステムを作る」という事に関しては、ある程度の自信がありました。<br /><br /><br />
              しかし、プログラマーという仕事をする上で私には大きな壁がありました。「チーム開発の経験がない」という事です。
              情報系の学校に進んだ友人は、学校の仲間とチームで開発をしていましたが、独学で開発を学んできた私は、誰かと協力して一つのプロジェクトを作っていくという事が全くイメージできませんでした。<br /><br /><br />
              そこで私は企業で働くことにしました。<br /><br /><br />
              Wantedlyから何社も訪問をした結果、株式会社whatzmoneyでインターンとして働けることになりました。whatzmoneyではRuby on Railsを使ったWebフレームワークの概念やgitの使い方まで、多くのチーム開発経験をする事が出来ました。<br /><br /><br />
              <h2 style={styles.sub}>サービスを開発する (2017)</h2>
              大学2年の冬、wantedlyで知り合った営業担当の方と一緒にWebサービスを作ることになりました。<br /><br /><br />
              2017年の冬といえば、「仮想通貨バブル」ですよね。今回はこれに関わってきます。
              この時開発したサービスは「仮想通貨ポートフォリオ管理アプリ」です。<br /><br /><br />
              当時、仮想通貨を持っている人の多くが複数の取引所に資産を分散して持っていました。そのような状況では、「いろんな取引所にビットコインがありすぎて、結局、総額でいくら持っているのか分からない！」という問題が起きます。
              Bitflyerに持っているビットコインと、Zaifに持っているビットコインをいちいちExcelで計算して保有資産の総額を出すのって面倒ですよね。<br /><br /><br />
              そこで、取引所のAPIキーを入力するだけで、全ての取引所の総額を簡単にチェックできるサービスを作りました。<br /><br /><br />
              それが「
              <a 
                href={'https://v-cu.com'}
                target="_blank"
                rel="noopener noreferrer"
              >
                VCU（ブイキュー）
              </a>
              」です。<br /><br /><br />
              VCUは現在も稼働しており、対応している取引所はBitflyer, Binance, Poloniex, Bitbank, Coincheck, Zaif, Kucoin, Quoineです。また、ビットコインとイーサリアムに関しては、アドレスを入力すればブロックチェーンから直接残高を取得できます。<br /><br /><br />
              リリース直後にバブル崩壊があり、サービス自体はそんなに使われませんでしたが、私にとってこれが初めてリリースした本格的なWebアプリケーションであり、nginxなどのWebサーバ技術や、AWSなどのインフラに関する知識や経験を積む事が出来ました。<br /><br /><br />
              この時自分一人でサービスを公開させた経験は、今でも大きな自信になっています。<br /><br /><br />
              <h2 style={styles.sub}>MICINへジョイン (2018)</h2>
              大学3年になった頃、駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。<br /><br /><br />
              MICINは今まで見た事がないようなスーパーエンジニアの方が何人もいて、React-nativeやAngularなどの最新技術を使っていたという事もあり、「ここなら絶対に成長できる！」と思い、インターンを希望しました。<br /><br /><br />
              初期は主にReact-nativeを使ったアプリの開発に取り組みました。現在はAngularをやっています。<br /><br /><br />
              多くのタスクをやらせてもらいましたが、中でも一番重かったタスクはReact-nativeのアップグレードです。現在のreact-native最新バージョンは0.58.1ですが、当時は0.51とかを使っていたので、それを「最新バージョンまでアップグレードさせる」というのがこの時のタスクでした。<br /><br /><br />
              これは単なるバージョンアップ作業だと思うかもしれませんが、Reactはサードパーティのライブラリがほとんどなので、react-nativeのアップグレードに伴い、依存関係を全部調べてちゃんと動くように全てのライブラリを調整しなければならない大変な作業でした。
              更にTypescriptを使っていたので、react-nativeのメジャーアップデートによりComponentに渡すPropsの型エラーがいろんなところで発生しました。<br /><br /><br />
              まあでもなんとか、最新バージョンへの移行を完了させる事ができました。<br /><br /><br />
              このタスクをするにあたって、react-nativeの細かい部分やiOS,Androidのネイティブの部分にも触れる事が出来、かなり理解が深まりました。<br /><br /><br />
              <h2 style={styles.sub}>ブログを作る (2018)</h2>
              大学3年の前期、「Webサイトをこれからも作っていくとなるとサーバ代が負担になる」という問題について真剣に考え始めました。<br /><br /><br />
              バイト代はありましたが、そこからサーバ代を捻出してはいつか絶対に苦しむと思い、新たな収入源としてブログを作ることにしました。<br /><br /><br />
              ブログメディアを運営する事で、SEO対策やWordpress最適化の知識がつきました。おかげでフリーの活動でも、一番需要がありそうな「Wordpress案件」を取る事が出来るようになりました。
              Wordpressは「出来るだけ動作を軽くする&パフォーマンスをあげる」という点で工夫の仕様がいくらでもあるので面白いです。<br /><br /><br />
              現在はAdsenceの収入で、運営しているWebサービスのサーバ代を賄えているので、この計画はそこそこ成功したと思います。（収益として考えればかなり低いですが、サーバ代全部払ってもお釣りはきます）<br /><br /><br />
              なんだかんだで作ったブログはこちら → 
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>
              <br /><br /><br />
              <h2 style={styles.sub}>投資シミュレーションゲームの開発 (2018)</h2>
              大学3年の夏、ゼミの課題で「日本人の金融リテラシーを向上させるための具体的な方法」について考えることになりました。<br /><br /><br />
              プログラミングばかりしていますが、一応学校では金融を勉強しています。
              お金のことに興味があり、3年の夏には証券アナリスト2次試験にも合格しました。（受かれば学校からお金が戻ってくるから頑張った）<br /><br /><br />
              調査を進めていく過程で、「金融取引の経験の有無」が金融リテラシーに関わってくるという情報を見つけたので、<br /><br /><br />
              「みんなもっと株とか買えばいいんじゃない？」<br /><br /><br />
              というアプローチで課題を進めることにしました。<br /><br /><br />
              しかし実際は、何も知らない人がいきなり金融商品を買うハードルは高いと思い、投資シミュレーションゲームをもっと普及させる手段を用いました。<br /><br /><br />
              ところが、この投資シミュレーションゲームに問題がありました。<br /><br /><br />
              トレダビなど、素晴らしいゲームも多いのですが、現状の投資シミュレーションのほとんどはまるで1990年代の様なUIで、スマホファーストの時代にレスポンシブ対応すらされていない老舗ゲームばかりだったのです。<br /><br /><br />
              「これじゃスマホ世代は投資シミュレーションゲームとかやらないだろうな。」<br /><br /><br />
              と思ったので、実際にそこそこ今風の投資シミュレーションゲームを作ることにしました。<br /><br /><br />
              それが「
              <a 
                href={'https://babel-bubble.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Babel bubble（バベルバブル）
              </a>
              」です。<br /><br /><br />
              本当はバベルボブルにしたかったのですが、ドラクエの人に怒られたくないので少し変えました。Babel bubbleはゲーム内通貨を使って、株式に見立てたアイテムを売買するゲームです。このゲームはフロントエンドにReact、サーバサイドにDjangoを使って作りました。<br /><br /><br />
              工夫した点は、アイテムの価格変動に関してランダムウォークさせるのではなく、実際のユーザーの取引によって時価が変動する様にした点です。価格変動を実際の株取引と同じ様にする事で、よりリアルなゲームを目指しました。<br /><br /><br />
              しかし、この方法ではユーザー数が少ないと流動性が低く価格変動が起きません。<br /><br /><br />
              よってノイズトレーダー（ランダムで取引するBot）、アービトラージャー（裁定取引するBot）、ヘッジファンド（大口取引するBot）の３種類のBotユーザーを大量に（1000体くらい）作成し、バックグラウンドでpythonのスクリプトを回す事でこれらを自動取引させることにしました。<br /><br /><br />
              Babel bubbleの開発は、ほぼ株式市場のシステム（小さな東証?）を自分一人で作ったので、金融好きの私としては、指し値注文から決済のフローを実装する事が出来てとても楽しかったです。（ゼミの単位もきました）<br /><br /><br />
              <h2 style={styles.sub}>コストカットにハマる (2019)</h2>
              大学3年の冬、私の興味は「インフラのコストをどれだけ減らせるか？」に傾いていました。当時あまり深く考えずにさくらサーバやEC2サーバを契約していましたが、「頑張ればもっとコスト減らせそう」と思ってしまったのです。<br /><br /><br />
              現在アクセスの少ないサイトはAmazon lightsailで建てたサーバの中で更にマルチドメインにして動かしています。（自分が使いたいだけでとりあえず公開させておきたいサイトってありますよね）<br /><br /><br />
              これによって１サイトあたり、月額で約アイス１個分の値段で運営出来ています。「そんなことしないでアクセス増やせ！」と言われたらそれまでですが、インフラというのは面白いものでサーバを深く知れば知るほどかかるお金が減っていくんですよね。<br /><br /><br />
              このコストカット週間のおかげでサーバの理解がより深まりました。<br /><br /><br />
                <img
                  style={styles.image}
                  src={'/images/gallery/tpok.png'}
                  alt={'tpok'}
                />
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

