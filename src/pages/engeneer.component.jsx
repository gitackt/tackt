import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
    paddingTop: 50,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

        <h2 style={{ color: '#1DD6D1' }}>
          製作実績
        </h2>

        <p>
          WEBを中心に色々開発をやってます。基本的にデザイン・設計からコーディングまで全部一人でやります。フロントエンドはReactサーバサイドはDjangoやRailsを使うことが多いです。
        </p>

        <a
          href="https://github.com/gitackt"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="outlined"
            size="large"
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '30px' }}
          >
            Githubを見る
          </Button>
        </a>

        <br />
        <br />
        <br />
        <br />

        <Grid container spacing={24} justify={'center'}>
          <Grid item xs={12} md={4} style={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
            <Card className={styles.card}>
              <img
                style={{ position: 'relative', width: '100%', height: 'auto' }}
                src="/babelbubble.png"
                alt={'babelbubble'}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                  <Button
                    style={{ fontSize: '15px' }}
                    size="small"
                    color="primary"
                    href="https://babel-bubble.com"
                    target="_blank"
                  >
                    babel bubble
                  </Button>
                </Typography>
                <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                  React Redux Rxjs MaterialUi
                </Typography>
                <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                  Django Python Nginx Mysql
                </Typography>
                <br />
                <Typography component="p" style={{ fontSize: '12px' }}>
                  バベルバブルは無料で遊べる投資シミュレーションゲームです。ゲーム内で流通するアイテムをゲーム内通貨で売買して遊びます。アイテムを安い時に買って高い時に売ることで架空の市場取引を体験できます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
            <Card className={styles.card}>
              <img
                style={{ position: 'relative', width: '100%', height: 'auto' }}
                src="/vcu.png"
                alt={'vcu'}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                  <Button
                    style={{ fontSize: '15px' }}
                    size="small"
                    color="primary"
                    href="https://v-cu.com"
                    target="_blank"
                  >
                    vcu
                  </Button>
                </Typography>
                <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                  Django Bootstrap 
                </Typography>
                <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                  Django Python Nginx Mysql
                </Typography>
                <br />
                <Typography component="p" style={{ fontSize: '12px' }}>
                  VCUは、複数の取引所から自動でデータを取得し、 仮想通貨のポートフォリオを簡単にチェックすることができるサービスです。保有残高を取引所とデータ連携を行うことで自動的に取得します。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
        <FooterComponent />
      </div>
    );
  }
}

export default EngeneerPageComponent;
