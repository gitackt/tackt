import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class EngeneerPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
        <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '20px' }}
            src="/engeneer.png"
            alt={'engeneer'}
          />
        </h2>
        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
            <img
              style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '20px' }}
              src="/babelbubble.png"
              alt={'babelbubble'}
            />
            <a
              href="https://babel-bubble.com"
              target="_blank"
            >
              <h3>babel bubble</h3>
            </a>
            <p>
              バベルバブルは無料で遊べる投資シミュレーションゲームです。ゲーム内で流通するアイテムをゲーム内通貨で売買して遊びます。アイテムを安い時に買って高い時に売ることで架空の市場取引を体験できます。
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
            <img
              style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '20px' }}
              src="/vcu.png"
              alt={'vcu'}
            />
            <a
              href="https://v-cu.com"
              target="_blank"
            >
              <h3>vcu</h3>
            </a>
            <p>
              VCUは、複数の取引所から自動でデータを取得し、 仮想通貨のポートフォリオを簡単にチェックすることができるサービスです。保有残高を取引所とデータ連携を行うことで自動的に取得します。
            </p>
          </Grid>

          <Grid item xs={12} md={4} style={{ textAlign: 'center', marginBottom: '50px', marginTop: '50px' }}>
            <img
              style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '20px' }}
              src="/vcu.png"
              alt={'vcu'}
            />
            <a
              href="https://v-cu.com"
              target="_blank"
            >
              <h3>props</h3>
            </a>
            <p>
              Propsは、スマホで簡単に持ち物を管理できるアプリです。自分の持ち物の名前と価格を入力して現在どれくらいの物を持っているのかチェックできます。断捨離の必須アイテムです。
            </p>
          </Grid>

        </Grid>
        <FooterComponent />
      </div>
    );
  }
}

export default EngeneerPageComponent;
