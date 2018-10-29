import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: '200px',
    // background: 'black',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  image: {
    width: '250px',
    height: '250px',
    borderRadius: '130px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '2px 2px 50px rgba(0,0,0,0.2)',
  },
  container: {
    padding: '20px',
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  content: {
    background: 'white',
    borderRadius: '10px',
    padding: '10px 20px 10px 20px',
    boxShadow: '2px 2px 20px rgba(0,0,0,0.1)',
  },
  button: {
    color: 'white',
    fontSize: '12px',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    width: '60px',
    borderRadius: '10px',
    borderStyle: 'none',
    padding: '10px 10px 10px 10px',
    boxShadow: '2px 2px 20px rgba(0,0,0,0.2)',
    background: '#6b6b6b',
  }
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

      <div style={styles.root}>
        <CardContent style={styles.content}>
          <img
            style={styles.image}
            src="/images/profile.jpg"
            alt={'三橋拓人'}
          />
          <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
            <h2 style={{ fontSize: '20px', color: '#5b5b5b' }}>三橋拓人</h2>
          </Typography>
          <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
            Takuto Mitsuhashi
              </Typography>
          <br />
          <Typography component="p" style={{ fontSize: '12px', color: '#5b5b5b' }}>
            <p>ただの大学生。</p>
            <p>
              初めて行った場所でも空いている綺麗なトイレを一瞬で見つけられます。
              プログラマーとして働きながら個人でサービス開発をやってます。
            </p>
            <p>漫画家になりたい。</p>

          </Typography>
          <div style={{
            maxWidth: '500px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'
          }}>
            <Button
              variant={'outlined'}
              style={styles.button}
              onClick={() => this.setState({ is_education: !this.state.is_education })}
            >
              経歴
                </Button>
            <Button
              variant={'outlined'}
              style={styles.button}
              onClick={() => this.setState({ is_license: !this.state.is_license })}
            >
              資格
                 </Button>
            <Button
              variant={'outlined'}
              style={styles.button}
              onClick={() => this.setState({ is_skill: !this.state.is_skill })}
            >
              技術
                </Button>
            <Button
              variant={'outlined'}
              style={styles.button}
              onClick={() => this.setState({ other: !this.state.other })}
            >
              他
                </Button>
          </div>
        </CardContent>

        <Collapse in={this.state.is_education} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'white', color: 'rgb(143, 143, 143)', borderRadius: '30px' }}>
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
          <Card style={{ marginTop: '20px', background: 'white', color: 'rgb(143, 143, 143)', borderRadius: '30px' }}>
            <p style={{ padding: '20px' }}>
              <h4>金融系</h4>
              証券アナリスト, FP<br />
            </p>
          </Card>
        </Collapse>

        <Collapse in={this.state.is_skill} style={{ borderRadius: '30px' }}>
          <Card style={{ marginTop: '20px', background: 'white', color: 'rgb(143, 143, 143)', borderRadius: '30px' }}>
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
          <Card style={{ marginTop: '20px', background: 'white', color: 'rgb(143, 143, 143)', borderRadius: '30px' }}>
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

