import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'center',
  },
  image: {
    width: '70%',
    maxWidth: '220px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    textAlign: 'left',
    paddingBottom: '5px',
    paddingTop: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontSize: '12px',
    borderRadius: '10px',
    margin: '5px',
  },
  gridLeft: {
    textAlign: 'center',
    paddingBottom: '5px',
    paddingTop: '20px',
    paddingLeft: '30px',
    paddingRight: '30px',
    fontSize: '12px',
    borderRadius: '10px',
    margin: '5px',
  },
  button: {
    height: '50px',
    width: '80px',
    marginTop: '10px',
    textAlign: 'center',
    borderRadius: '200px',
    borderTop: 'solid 2px #d34e6f',
    borderRight: 'solid 2px #d34e6f',
    borderBottom: 'solid 3px #d34e6f',
    borderLeft: 'solid 2px #d34e6f',
    background: '#ff517c',
    color: 'white',
    fontSize: '13px',
    padding: '10px',
    paddingTop: '40px',
    textDecoration: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    width: '80%',
    color: '#6D6C6A',
    maxWidth: '1200px',
    textAlign: 'left',
    padding: '20px',
    fontSize: '28px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 'solid 7px #F3F1EE',
  },
};

export class ProfileComponent extends Component {

  state = {
    is_screen: false,
    is_hobby: false,
    is_book: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{ paddingTop: '5px' }}>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} md={3} style={styles.grid}>
            <div>
              <p>名前</p>
              <p>三橋拓人</p>
              <p>経歴</p>
              <p>
                明治大学 商学部 商学科 Finance Course (2016 ~ )<br />
                株式会社Whatzmoney Engineer Intern (2017 ~ 2018)<br />
                株式会社MICIN Engineer Intern (2018 ~ )
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <div>
              <p>資格</p>
              <p>
                証券アナリスト (CCMA)<br />
              </p>
              <p>技術</p>
              <p>
                Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                Angular, Nginx, MySQL, Wordpress, PHP,  Go, Docker, AWS
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3} style={styles.grid}>
            <div>
              <p>お問い合わせ</p>
              <p>
              <a
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#a0c6ff' }}
              >
                https://twitter.com/picos_tackt
              </a>
              <br />
              <a
                href={'https://www.facebook.com/profile.php?id=100013371464347'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#a0c6ff' }}
              >
                https://www.facebook.com/
              </a>
              <br />
              <a
                href={'https://github.com/gitackt'}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#a0c6ff' }}
              >
                https://github.com/gitackt
              </a>
              <br /><br />
              git.tackt@gmail.com
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

