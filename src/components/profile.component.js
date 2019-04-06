import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
  },
  image: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
  },
  gridLeft: {
    textAlign: 'center',
    borderRadius: '10px',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  grid: {
    textAlign: 'left',
    borderRadius: '10px',
    margin: '15px',
    padding: '15px',
    background: '#f2f2f2'
  },
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
      <div className='flex-container'>
        <div>
          <h2 className='title'>Profile</h2>
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={4} style={styles.gridLeft}>
              <img
                style={styles.image}
                src={'/images/gallery/tpok.png'}
                alt={'tpok'}
              />
            </Grid>
            <Grid item xs={12} md={5} style={styles.grid}>
              <h4>経歴</h4>
              <p>
                明治大学 商学部 商学科
                Finance Course (2016 ~ )<br />
                株式会社Whatzmoney
                Engineer Intern (2017 ~ 2018)<br />
                株式会社MICIN
                Engineer Intern (2018 ~ )<br />
              </p>
              <h4>資格</h4>
              <p>
                証券アナリスト2次 (CCMA)<br />
              </p>
              <h4>技術</h4>
              <p>
                Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue,
                Affinity Designer, Clip Studio
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

