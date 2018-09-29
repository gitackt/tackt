import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

export class ProfilePageComponent extends Component {

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

      <div>

        <div style={{ marginTop: '100px', maxWidth: '500px', display: 'inline-block', height: '100%', overflow: 'hidden', paddingTop: '80px', maxHeight: '300px' }}>
            {/* <img
              style={{ width: '100%', height: 'auto' }}
              src="/images/profile.jpg"
              alt={'Tackt Mitsuhashi'}
            /> */}
          </div>

          <div style={{ padding: '20px', textAlign: 'left', maxWidth: '500px', marginLeft: 'auto' , marginRight: 'auto' }}>

            <Card
             style={{ background: 'black', color: 'white' }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2" style={{ fontSize: '18px' }}>
                    <h2 style={{ fontSize: '18px',color: 'white' }}>三橋拓人</h2>
                  </Typography>
                  <Typography component="p" style={{ fontSize: '11px', color: 'gray' }}>
                    Tackt Mitsuhashi
                    </Typography>
                  <br />
                  <Typography component="p" style={{ fontSize: '12px', color: 'rgba(177, 177, 177, 1)' }}>
                    18歳からプログラミングを始め、大学在学中にITベンチャー企業で開発を行う。証券アナリスト試験合格。
                  </Typography>
                </CardContent>
              </CardActionArea>
            <CardActions>
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

            <Collapse in={this.state.is_education}>
              <Card style={{ marginTop: '20px', background: 'black', color:'rgba(143, 143, 143, 1)' }}>
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
              <Card style={{ marginTop: '20px' , background: 'black', color: 'rgba(143, 143, 143, 1)'}}>
                <p style={{ padding: '20px' }}>
                  <h4>金融系</h4>
                  証券アナリスト, FP<br />
                </p>
              </Card>
            </Collapse>

            <Collapse in={this.state.is_skill}>
              <Card style={{ marginTop: '20px', background: 'black', color: 'rgba(143, 143, 143, 1)' }}>
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
    );
  }
}

export default ProfilePageComponent;
