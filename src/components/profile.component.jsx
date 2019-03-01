import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    paddingBottom: '40px',
    textAlign: 'left',
    background: 'white',
    borderBottom: 'solid 6px #F3F1EE',
  },
  grid: {
    textAlign: 'left',
    paddingBottom: '30px',
    paddingTop: '30px',
    padding: '30px',
    fontSize: '15px',
    borderRadius: '10px',
    margin: '5px',
  },
  button: {
    height: '30px',
    width: '160px',
    marginTop: '50px',
    borderRadius: '10px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '13px',
    padding: '12px',
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ paddingTop: '40px' }}>
        <h2 style={styles.title}>Profile</h2>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} sm={6} style={styles.grid}>
            <h1>三橋拓人</h1>
            {/* <h2>経歴</h2>
            明治大学 商学部 (2016 ~ )<br />
            株式会社Whatzmoneyインターン (2017 ~ 2018)<br />
            株式会社MICINインターン (2018 ~ )
            <h2>資格</h2>
            証券アナリスト(CCMA)<br /> */}
            <h2>花</h2>
              色をつけたり、乾かしたり、オイルにつけたり
            <h2>Web</h2>
              Python, Ruby, Django, Rails, JavaScript, TypeScript, React, React-native, Nginx, MySQL, Wordpress
            <h2>ブログ</h2>
              お金をかけずに生き延びるサバイバル術の記事
            {/* <h2>本棚</h2>
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
            ・ブロックチェーンアプリケーション<br />
            <h2>漫画</h2>
            ・マギ<br />
            ・蟻の王<br />
            ・BABEL<br />
            ・囚人リク<br />
            ・食料人類<br />
            ・創世のタイガ<br />
            ・恋は雨上がりにように<br />
            <h2>映画</h2>
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
            ・ハングオーバー<br /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

