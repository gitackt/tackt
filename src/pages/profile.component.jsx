import React, { Component } from 'react';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ProfilePageComponent extends Component {

  state = {
    is_basic: false,
    is_education: false,
    is_license: false,
    is_skill: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%' }}>
        <NavigationComponent />

        <div>

          <div style={{ display: 'inline-block', height: '100%', overflow: 'hidden', paddingTop: '80px', maxHeight: '300px' }}>
            <img
              style={{ width: '100%', height: 'auto' }}
              src="/images/profile.jpg"
              alt={'Tackt Mitsuhashi'}
            />
          </div>

          <div style={{ padding: '20px', textAlign: 'left' }}>

            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                    <h2 style={{ fontSize: '18px' }}>三橋拓人</h2>
                  </Typography>
                  <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                    Tackt Mitsuhashi
                    </Typography>
                  <br />
                  <Typography component="p" style={{ fontSize: '12px' }}>
                    WEB開発と漫画書いてる21歳です！とりあえずいつも何か作ってます。
                    18歳の頃から独学をし始めて、ITベンチャー企業でプログラミング技術を身につけました。
                    証券アナリスト資格二次試験合格。投資シミュレーションゲームや自動トレードシステムなど、金融系のシステムを作るのが好きです。
                    趣味で漫画・イラストやレジン・ハーバリウム製作をやってます。ショップやブログあります。
                    web開発・webデザイン・webスクレイピング等、お仕事の依頼承ります！
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button
                    color={'primary'}
                    onClick={() => this.setState({ is_basic: !this.state.is_basic })}
                  >
                    情報
                  </Button>
                  <Button
                    color={'primary'}
                    onClick={() => this.setState({ is_education: !this.state.is_education })}
                  >
                    経歴
                  </Button>
                  <Button
                    color={'primary'}
                    onClick={() => this.setState({ is_license: !this.state.is_license })}
                  >
                    資格
                  </Button>
                  <Button
                    color={'primary'}
                    onClick={() => this.setState({ is_skill: !this.state.is_skill })}
                  >
                    技術
                  </Button>
              </CardActions>
            </Card>

            <Collapse in={this.state.is_basic}>
              <Card style={{ marginTop: '20px' }}>
                <p style={{ padding: '20px' }}>
                  <h4>生年月日</h4>
                  1997年6月30日<br />
                  <h4>メールアドレス</h4>
                  git.tackt@gmail.com<br />
                </p>
              </Card>
            </Collapse>

            <Collapse in={this.state.is_education}>
              <Card style={{ marginTop: '20px' }}>
                <p style={{ padding: '20px' }}>
                  <h4>学歴</h4>
                  明治大学 商学部 (2016 ~ )<br />
                  <h4>職歴</h4>
                  株式会社Whatzmoney (2017 ~ 2018)<br />
                  株式会社MICIN (2018 ~ )<br />
                </p>
              </Card>
            </Collapse>

            <Collapse in={this.state.is_license}>
              <Card style={{ marginTop: '20px' }}>
                <p style={{ padding: '20px' }}>
                  <h4>金融系</h4>
                  証券アナリスト, FP<br />
                </p>
              </Card>
            </Collapse>

            <Collapse in={this.state.is_skill}>
              <Card style={{ marginTop: '20px' }}>
                <p style={{ padding: '20px' }}>
                  <h4>サーバサイド</h4>
                  Python, Django, Rails, Node<br />
                  <h4>フロントエンド</h4>
                  React, React-native<br />
                  <h4>インフラ</h4>
                  Mysql, Nginx, Docker, Aws<br />
                  <h4>デザイン</h4>
                  Affinty Designer, Clip Studio<br />
                </p>
              </Card>
            </Collapse>

          </div>

        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ProfilePageComponent;
