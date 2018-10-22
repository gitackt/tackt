import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { FacebookIcon, TwitterIcon } from 'react-share';

const styles = {
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop: '100px',
    display: 'inline-block',
    height: '100%',
    overflow: 'hidden',
    maxHeight: '300px'
  },
  container: {
    padding: '20px',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    textAlign: 'center',
    paddingTop: '30px',
  },
};

export class ProfileComponent extends Component {

  state = {
    is_education: false,
    is_license: false,
    is_skill: false,
    other: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div style={styles.card}>
        <h2>Profile</h2>
        <Grid container justify={'center'} style={{ paddingTop: '20px' }}>
          <Grid item xs={12} sm={3} style={{ paddingLeft: '10px', paddingRight: '10px' }}
          >
            <img
              style={{ maxHeight: '250px', width: '100%', borderRadius: '20px' }}
              src="/images/profile.jpg"
              alt={'三橋拓人'}
            />
          </Grid>
          <Grid item xs={12} sm={9} style={{ textAlign: 'left' }}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                <h2 style={{ fontSize: '16px', color: '#5b5b5b' }}>三橋拓人</h2>
              </Typography>
              <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                プログラミング　漫画
              </Typography>
              <br />
              <Typography component="p" style={{ fontSize: '12px', color: '#5b5b5b' }}>
                <p>ただの大学生。</p>
                <p>
                  初めて行った場所でも空いている綺麗なトイレを一瞬で見つけられます。
                  プログラマーとして働きながら個人でサービス開発をやってます。
                </p>
                <p>漫画家になりたい。</p>

                <Grid container justify={'center'} style={{ marginTop: '40px', marginBottom: '20px' }}>
                  <Grid item xs={2} md={1}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100013371464347"
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon size={42} round={true} />
                    </a>
                  </Grid>
                  <Grid item xs={2} md={1}>
                    <a
                      href="https://twitter.com/picos_tackt?lang=ja"
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon size={42} round={true} />
                    </a>
                  </Grid>
                  <Grid item xs={8} md={10} />
                </Grid>
              </Typography>
              <CardActions>
                <Button
                  variant={'outlined'}
                  style={{ color: '#727272', borderColor: '#727272' }}
                  onClick={() => this.setState({ is_education: !this.state.is_education })}
                >
                  経歴
                </Button>
                <Button
                  variant={'outlined'}
                  style={{ color: '#727272', borderColor: '#727272' }}
                  onClick={() => this.setState({ is_license: !this.state.is_license })}
                >
                  資格
                 </Button>
                <Button
                  variant={'outlined'}
                  style={{ color: '#727272', borderColor: '#727272' }}
                  onClick={() => this.setState({ is_skill: !this.state.is_skill })}
                >
                  技術
                </Button>
                <Button
                  variant={'outlined'}
                  style={{ color: '#727272', borderColor: '#727272' }}
                  onClick={() => this.setState({ other: !this.state.other })}
                >
                  他
                </Button>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>

        <Collapse in={this.state.is_education} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'rgba(143, 143, 143, 0.1)', color: 'rgba(143, 143, 143, 1)', borderRadius: '30px' }}>
            <p style={{ padding: '20px' }}>
              <h4>学歴</h4>
              明治大学 商学部 (2016 ~ )<br />
              <h4>職歴</h4>
              株式会社Whatzmoney (2017 ~ 2018)<br />
              株式会社MICIN (2018 ~ )<br />
            </p>
          </Card>
        </Collapse>

        <Collapse in={this.state.is_license} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'rgba(143, 143, 143, 0.1)', color: 'rgba(143, 143, 143, 1)', borderRadius: '30px' }}>
            <p style={{ padding: '20px' }}>
              <h4>金融系</h4>
              証券アナリスト, FP<br />
            </p>
          </Card>
        </Collapse>

        <Collapse in={this.state.is_skill} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'rgba(143, 143, 143, 0.1)', color: 'rgba(143, 143, 143, 1)', borderRadius: '30px' }}>
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

        <Collapse in={this.state.other} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'rgba(143, 143, 143, 0.1)', color: 'rgba(143, 143, 143, 1)', borderRadius: '30px' }}>
            <p style={{ padding: '20px' }}>
              ヒッチハイク中に高速道路で雨の中遭難して死にかける。<br />
              {/* ・初日の出を見るために海岸まで行ったが反対側から日が昇る。<br /> */}
              怪しい雑居ビルのオフィスに迷い込んで変な契約を結びかける。<br />
              日本円を送金用のRippleに変えた途端仮想通貨バブルが弾けて一時資産を半分失う。<br />
              株で儲けようと機械学習の自動トレードシステムの開発を行うが一瞬でデモ口座の資産を溶かす。<br />
              {/* ・美術の先生: 心の中の情景を絵にして → 蜂に追われる絵を描いて賞を取る。(何日か前にハチに刺された)<br /> */}
            </p>
          </Card>
        </Collapse>
      </div>

    );
  }
}

