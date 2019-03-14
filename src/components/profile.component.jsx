import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'left',
    background: 'white',
    // borderBottom: 'solid 6px #F3F1EE',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  grid: {
    textAlign: 'left',
    paddingBottom: '30px',
    paddingTop: '30px',
    padding: '30px',
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
    textAlign: 'center',
    padding: '20px',
    fontSize: '25px',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTop: 'solid 2px #F3F1EE',
    borderRight: 'solid 2px #F3F1EE',
    borderBottom: 'solid 3px #F3F1EE',
    borderLeft: 'solid 2px #F3F1EE',
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
      <div style={{ paddingTop: '40px' }}>
        <h2 style={styles.title}>Profile</h2>
        <Grid container justify={'center'} style={styles.container}>
          <Grid item xs={12} sm={4} style={styles.grid}>
            <img
              style={styles.image}
              src={'/images/background.png'}
              alt={'profile'}
            />
          </Grid>
          <Grid item xs={12} sm={4} style={styles.grid}>
            <h2>名前</h2>
            <h1>三橋拓人</h1>
            <h2>経歴</h2>
            明治大学 商学部 商学科 Finance Course (2016 ~ )<br />
            株式会社Whatzmoney Engineer Intern (2017 ~ 2018)<br />
            株式会社MICIN Engineer Intern (2018 ~ )
            <h2>資格</h2>
            証券アナリスト (CCMA)<br />
            <h2>技術</h2>
              Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
              Angular, Nginx, MySQL, Wordpress, Golang
          </Grid>
        </Grid>
      </div>
    );
  }
}

