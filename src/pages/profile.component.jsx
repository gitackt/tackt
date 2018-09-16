import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProfilePageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />

        <div style={{ marginTop: '50px' }}>


          <Grid container spacing={24} justify={'center'}>
            <Grid item xs={12}>
              <div>
                <img
                  style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '100px' }}
                  src="/images/profile.jpg"
                  alt={'Tackt Mitsuhashi'}
                />
                
                <h2 style={{ fontSize: '25px' }}>三橋拓人</h2>
                <h3 style={{ fontSize: '15px' }}>Tackt Mitsuhashi</h3>

                <p style={{ maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                  WEB開発と漫画書いてる21歳です！とりあえずいつも何か作ってます。
                  18歳の頃から独学をし始めて、ITベンチャー企業でプログラミング技術を身につけました。
                  証券アナリスト資格二次試験合格。投資シミュレーションゲームや自動トレードシステムなど、金融系のシステムを作るのが好きです。
                  趣味で漫画・イラストやレジン・ハーバリウム製作をやってます。ショップやブログあります。
                  web開発・webデザイン・webスクレイピング等、お仕事の依頼承ります！
                </p>

              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ fontSize: '15px', color: 'rgb(149, 149, 149)', textAlign: 'left', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid container spacing={24} justify={'center'}>
                  <Grid item xs={12} md={3}>
                    <h3>基本情報</h3>
                    <p>
                      <h4>生年月日</h4>
                      1997年6月30日<br />
                      <h4>メールアドレス</h4>
                      git.tackt@gmail.com<br />
                    </p>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <h3>経歴</h3>
                    <p>
                      <h4>学歴</h4>
                      明治大学 商学部 (2016 ~ )<br />
                      <h4>職歴</h4>
                      株式会社Whatzmoney (2017 ~ 2018)<br />
                      株式会社MICIN (2018 ~ )<br />
                    </p>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <h3>資格</h3>
                    <p>
                      <h4>金融系</h4>
                      証券アナリスト, FP<br />
                    </p>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <h3>技術</h3>
                    <p>
                      <h4>サーバサイド</h4>
                      Python, Django, Rails, Node<br />
                      <h4>フロントエンド</h4>
                      React, React-native<br />
                      <h4>インフラ</h4>
                      Mysql, Nginx, Docker, Aws<br />
                      <h4>デザイン</h4>
                      Affinty Designer, Clip Studio<br />
                    </p>
                  </Grid>
                </Grid>

              </div>
            </Grid>
          </Grid>

        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ProfilePageComponent;
