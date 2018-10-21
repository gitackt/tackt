import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';

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
};

export class ProfileComponent extends Component {

  state = {
    is_education: false,
    is_license: false,
    is_skill: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div style={styles.card}>
        <Grid container justify={'center'}>
          <Grid item xs={12} md={4} style={{ paddingLeft: '10px', paddingRight: '10px' }}
          >
            <img
              style={{ maxHeight: '300px', width: '100%', borderRadius: '20px' }}
              src="/images/profile.jpg"
              alt={'三橋拓人'}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                <h2 style={{ fontSize: '16px', color: '#5b5b5b' }}>三橋拓人</h2>
              </Typography>
              <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                プログラミング　漫画　イラスト　DTM
              </Typography>
              <br />
              <Typography component="p" style={{ fontSize: '12px', color: '#5b5b5b' }}>
                18歳からプログラミングを始め、大学在学中にITベンチャー企業で開発を行う。証券アナリスト試験合格。
                18歳からプログラミングを始め、大学在学中にITベンチャー企業で開発を行う。証券アナリスト試験合格。
                18歳からプログラミングを始め、大学在学中にITベンチャー企業で開発を行う。証券アナリスト試験合格。
          </Typography>
            </CardContent>
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
            </CardActions>
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
      </div>

    );
  }
}

