import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
  },
  image: {
    width: '70%',
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    textAlign: 'left',
    paddingBottom: '5px',
    paddingTop: '5px',
    paddingLeft: '30px',
    paddingRight: '30px',
    fontSize: '12px',
    borderRadius: '10px',
  },
};

export class ProfileComponent extends PureComponent {

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
                証券アナリスト2次 (CCMA)<br />
              </p>
              <p>技術</p>
              <p>
                Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Go, Solidity, Vue, Unity, C#,
                Affinity Designer
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

