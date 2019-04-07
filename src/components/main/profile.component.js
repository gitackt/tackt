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
    fontSize: '16px',
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
              大学4年生で株式会社MICINのエンジニアインターンをしています。<br /><br /><br />
              普段は主にReact-NativeやAngularを使ったフロントエンドの開発を行っています。
              またフリーランスエンジニアとして依頼を受けて開発をしたり、個人でWebサービスの開発も行っています。このサイトは私のプロフィールと今までの活動に関するポートフォリオを掲載しています。<br /><br /><br />
              <h2 style={styles.sub}>プログラミングの始まり</h2>
              高校3年からプログラミングを始め、独学で技術を身につけました。<br /><br /><br />
              この頃はWeb開発の知識も技術も無いまま、ただ漠然と自分のサイトを作ってみたいと思っていました。そして「都市伝説投稿サイト」を作りました。PHPで無理矢理それっぽく動くサイトを作った結果、いつの間にか自作のCMSが完成しました。（セキュリティ面はやばい）<br /><br /><br />
              Wordpressという便利な存在を知らなかったという事もあり、結果的にただの車輪の再発明になってしまいましたが、「自分の作ったシステムがそれなりに動く」というこの時の成功体験が、後のモチベーション維持に大きく貢献したと思います。<br /><br /><br />
              <h2 style={styles.sub}>インターンで働く</h2>
              大学2年になった頃、「自分でプログラムを書いてシステムを作る」という事に関しては、ある程度の自信がありました。<br /><br /><br />
              しかし、プログラマーという仕事をする上で私には大きな壁がありました。「チーム開発の経験がない」という事です。
              情報系の学校に進んだ友人は、学校の仲間とチームで開発をしていましたが、独学で開発を学んできた私は、誰かと協力して一つのプロジェクトを作っていくという事が全くイメージできませんでした。<br /><br /><br />
              そこで私は企業で働くことにしました。<br /><br /><br />
              Wantedlyから何社も訪問をした結果、株式会社whatzmoneyでインターンとして働けることになりました。whatzmoneyではRuby on Railsを使ったWebフレームワークの概念やgitの使い方まで基本的なWeb開発の経験をする事が出来ました。<br /><br /><br />
              <h2 style={styles.sub}>サービスを開発する</h2>
              あ
              <h2 style={styles.sub}>MICINへジョイン</h2>
              大学3年になった頃、駆け出しの頃から仕事をいただいていた方にMICINを紹介してもらいました。<br /><br /><br />
              MICINは今まで見た事がないようなスーパーエンジニアの方が何人もいて、React-nativeやAngularなどの最新技術を使っていたという事もあり、「ここなら絶対に成長できる！」と思いインターンとして入りました。<br /><br /><br />
              MICINでは主にReact-nativeを使ったアプリの開発に取り組みました。
              中でも一番重かったタスクはReact-nativeのアップグレードです。現在のreact-native最新バージョンは0.58.1ですが、当時は0.51とかを使っていたのでそれを最新バージョンにあげるというのがこの時のタスクでした。<br /><br /><br />
              これは単なるバージョンアップ作業だと思うかもしれませんが、Reactはサードパーティのライブラリがほとんどなので、react-nativeのアップグレードに伴い、依存関係を全部調べてちゃんと動くように全てのライブラリを調整しなければならない大変な作業なのです。
              更にTypescriptを使っていたので、react-nativeのメジャーアップデートによりComponentに渡すPropsの型エラーがいろんなところで発生しました。<br /><br /><br />
              まあでもなんとか、最新バージョンへの移行を完了させる事ができました。<br /><br /><br />
              このタスクをするにあたって、react-nativeの細かい部分やiOS,Androidのネイティブの部分にも触れる事が出来、かなり理解が深まりました。<br /><br /><br />
              <h2 style={styles.sub}>ブログを作る</h2>
              大学3年の春、複数のWebサイトをこれからも作っていくとなると「サーバ代が負担になる」という問題について真剣に考え始めていました。<br /><br /><br />
              バイト代はありましたが、そこからサーバ代を捻出していてはいつか苦しむとことになると思い、新たな収入源としてブログを作ることにしました。<br /><br /><br />
              現在はAdsenceの収入で、運営しているWebサービスのサーバ代を賄えているので、この計画はそこそこ成功したと思います。（収益として考えればかなり低いですが）<br /><br /><br />
              なんだかんだで作ったブログはこちら → 
              <a 
                href={'https://monetizealchemist.com/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                人生は運ゲー
              </a>
              <br /><br /><br />
              <h2 style={styles.sub}>投資シミュレーションゲームの開発</h2>

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

