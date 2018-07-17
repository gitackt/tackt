import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class WebsiteComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', top: -95, padding: '30px', height: '100%' }}>
        <h2>websites</h2>
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={12} md={3} style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
            <img
              style={{ position: 'relative', width: '250px', height: 'auto', borderRadius: '20px' }}
              src="/babelbubble.png"
              alt={'babelbubble'}
            />
            <h3>babel bubble</h3>
            <p>
              バベルバブルは無料で遊べる投資シミュレーションゲームです。ゲーム内で流通するアイテムをゲーム内通貨で売買して遊びます。アイテムを安い時に買って高い時に売ることで架空の市場取引を体験できます。
            </p>
            <a
              href="https://babel-bubble.com"
              target="_blank"
            >
              https://babel-bubble.com
            </a>
          </Grid>
          <Grid item xs={12} md={3} style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
            <img
              style={{ position: 'relative', width: '250px', height: 'auto', borderRadius: '20px' }}
              src="/vcu.png"
              alt={'vcu'}
            />
            <h3>vcu</h3>
            <p>
              VCUは、複数の取引所から自動でデータを取得し、 仮想通貨のポートフォリオを簡単にチェックすることができるサービスです。保有残高を取引所とデータ連携を行うことで自動的に取得します。
            </p>
            <a
              href="https://v-cu.com"
              target="_blank"
            >
              https://v-cu.com
          </a>
          </Grid>
          {/* <Grid item xs={12} md={3} style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
            <img
              style={{ position: 'relative', width: '250px', height: 'auto', borderRadius: '20px' }}
              src="/bug.png"
              alt={'bug'}
            />
            <h3>world bug pedia</h3>
            <p>
              ワールドバグペディアは、誰でも簡単に都市伝説を投稿できるサイトです。（開発中）
            </p>
            <a
              href="https://world-bug-pedia.com"
              target="_blank"
            >
              https://world-bug-pedia.com
            </a>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default WebsiteComponent;
