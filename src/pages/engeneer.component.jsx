import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Button from '@material-ui/core/Button';
import { BabelBubbleComponent } from '../services/babel.bubble.component';
import { VcuComponent } from '../services/vcu.component';
 
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
        
        <div style={{ marginTop: '60px' }}>

        <h3 style={{ color: '#1DD6D1' }}>製作実績</h3>

        <p>
          WEBを中心に色々開発をやってます。基本的にデザイン・設計からコーディングまで全部一人でやります。フロントエンドはReactサーバサイドはDjangoやRailsを使うことが多いです。
        </p>

        <a
          href="https://github.com/gitackt"
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
            <BabelBubbleComponent />
          </Grid>
          <Grid item xs={12} md={4} style={{ textAlign: 'left', marginBottom: '10px', marginTop: '10px' }}>
            <VcuComponent />
          </Grid>

        </Grid>
        <FooterComponent />
      </div>
      </div>
    );
  }
}

export default EngeneerPageComponent;
