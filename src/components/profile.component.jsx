import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  container: {
    paddingBottom: '40px',
    textAlign: 'left',
    background: 'white',
    borderBottom: 'solid 6px #F3F1EE',
  },
  image: {
    width: '100%',
    maxWidth: '200px',
    marginBottom: '50px',
    borderRadius: '10px',
  },
  grid: {
    textAlign: 'left',
    paddingBottom: '30px',
    paddingTop: '30px',
    padding: '30px',
    fontSize: '12px',
    borderRadius: '10px',
    margin: '5px',
  },
  button: {
    height: '20px',
    width: '70px',
    marginTop: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '13px',
    padding: '7px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textDecoration: 'none',
  },
  title: {
    width: '70%',
    color: '#6D6C6A',
    maxWidth: '400px',
    textAlign: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTop: 'solid 2px #F3F1EE',
    borderRight: 'solid 2px #F3F1EE',
    borderBottom: 'solid 3px #F3F1EE',
    borderLeft: 'solid 2px #F3F1EE',
  },
};

export class ProfileComponent extends Component {

  state = {
    is_screen: false,
    is_hobby: false,
    is_book: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ paddingTop: '40px' }}>
        <h2 style={styles.title}>Profile</h2>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} sm={6} style={styles.grid}>
            <h2>名前</h2>
            <h1>三橋拓人</h1>
            <h2>経歴</h2>
            明治大学 商学部 商学科 Finance Course (2016 ~ )<br />
            株式会社Whatzmoney Engineer Intern (2017 ~ 2018)<br />
            株式会社MICIN Engineer Intern (2018 ~ )
            <h2>資格</h2>
            証券アナリスト (CCMA)<br />
            <h2>技術</h2>
              サイトデザイン, サーバ設計, フロントエンド, インフラ<br />
              Python, Ruby, Django, Rails, JavaScript, TypeScript, React, React-native, Angular, Nginx, MySQL, Wordpress
 
            <br />
            <br />
            <br />
            <br />

            <div style={styles.button} onClick={() => this.setState({ is_screen: !this.state.is_screen })}>アプリ</div>

            <Collapse in={this.state.is_screen}>
              <h3>スクショ</h3>
              <img
                style={styles.image}
                src={'/images/screen.png'}
                alt={'screen'}
              />
            </Collapse>
 
            <div style={styles.button} onClick={() => this.setState({ is_hobby: !this.state.is_hobby })}>趣味</div>

            <Collapse in={this.state.is_hobby}>
              <h3>温泉</h3>
                暇さえあれば、スーパー銭湯に行きます。
              <h3>散歩</h3>
                暇さえあれば、行った事ない街に行ってみます。
              <h3>花</h3>
                花に色をつけたり、ハーバリウムやレジンアイテムを作って遊んでます。
              <h3>ブログ</h3>
                たまにプログラミングのことやお金をかけずに生き延びるサバイバル術を書いています。
            </Collapse>

            <div style={styles.button} onClick={() => this.setState({ is_book: !this.state.is_book })}>本棚</div>

            <Collapse in={this.state.is_book}>
              <h3>実用書</h3>
              ・バリュエーションの教科書<br />
              ・起業のファイナンス<br />
              ・経済指標読み方のルール<br />
              ・ゾーン勝つ相場心理学入門<br />
              ・セイラー教授の行動経済学入門<br />
              ・株価チャート攻略ガイド<br />
              ・バブルの物語<br />
              ・面白くて眠れなくなる植物学<br />
              ・花屋さんの花辞典<br />
              ・美しい鉱物<br />
              ・不動産の教科書<br />
              ・完全教祖マニュアル<br />
              ・サピエンス全史<br />
              ・nginx実践入門<br />
              ・ブロックチェーンアプリケーション入門<br />
              <h3>漫画</h3>
              ・マギ<br />
              ・蟻の王<br />
              ・BABEL<br />
              ・囚人リク<br />
              ・食料人類<br />
              ・創世のタイガ<br />
              ・いぬまるだしっ<br />
              ・DEATH NOTE<br />
              ・ヒロアカ<br />
              ・NARUTO<br />
              ・恋は雨上がりにように<br />
              <h3>アニメ</h3>
              ・マギ<br />
              ・コードギアス<br />
              ・恋は雨上がりにように<br />
              ・私に天使が舞い降りた<br />
              <h3>映画</h3>
              ・スワロウテイル<br />
              ・鉄コン筋クリート<br />
              ・おおかみこどもの雨と雪<br />
              ・僕たちと駐在さんの700日戦争<br />
              ・イエスマン<br />
              ・リミットレス<br />
              ・セッション<br />
              ・ショーシャンクの空に<br />
              ・プライベートライアン<br />
              ・ウルフオブウォール・ストリート<br />
              ・ハングオーバー<br />
              ・ブラッドスローン<br />
            </Collapse>

          </Grid>
        </Grid>
      </div>
    );
  }
}

