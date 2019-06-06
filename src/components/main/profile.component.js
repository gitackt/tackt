import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
// import { NameComponent } from './name.component';

const styles = {
  container: {
    textAlign: 'center',
    paddingBottom: '15px',
    // borderTop: 'solid 4px #4b8c85',
  },
  profile: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '15px',
    background: '#f2f2f2'
  },
  image: {
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px',
  },
  gridLeft: {
    textAlign: 'left',
    borderRadius: '10px',
    padding: '25px',
  },
  grid: {
    textAlign: 'center',
    borderRadius: '10px',
    margin: '15px',
    padding: '15px',
  },
  eyeCatch: {
    textAlign: 'left',
    borderRadius: '5px',
    padding: '35px',
    paddingTop: '10px',
    background: '#f2f2f2',
    marginTop: '30px',
    marginBottom: '60px',
  },
  content: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#574F5D',
    lineHeight: '1.8',
    marginBottom : '1.8em',
  },
  sub: {
    color: '#333035',
    fontWeight: '500',
    // borderBottom: 'solid 3px #333035',
  },
  mainTitle: {
    color: '#333035',
    fontWeight: '500',
    fontSize: '28px',
    paddingLeft: '10px',
  },
  button: {
    height: '20px',
    width: '100px',
    borderRadius: '5px',
    background: '#FFAF00',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '14px',
    padding: '10px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #eda50b',
    borderTop: 'solid 2px #eda50b',
    borderBottom: 'solid 4px #eda50b',
  },
  twitter: {
    height: '20px',
    width: '100px',
    borderRadius: '5px',
    background: '#2AD8C9',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '14px',
    padding: '10px',
    textDecoration: 'none',
    marginTop: '10px',
    border: 'solid 3px #26ccbb',
    borderTop: 'solid 2px #26ccbb',
    borderBottom: 'solid 4px #26ccbb',
  },
  subimage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
  },
  sub_3: {
    padding: '5px',
    margin: '5px',
    marginTop: '10px',
    marginBottom: '10px',
    fontWeight: 'normal',
  }
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
      <div>
        <div>
          <Grid container justify={'center'} style={styles.container}>
            <Grid item xs={12} md={8} style={styles.gridLeft}>
              <div style={styles.content}>
              <br />
              三橋拓人(
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                @picos_tackt
              </a>
              )です。個人でWebサービスやアプリを作ってます。
              <br /><br />
              <div style={styles.profile}>
              <h3 style={styles.sub_3}>
                <a 
                  href={'https://micin.jp/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MICIN inc.
                </a> - Software Engineer Intern（2018 ~ ）
              </h3>
              <h3 style={styles.sub_3}>
                <a 
                  href={'https://micin.jp/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatzmoney inc.
                </a> - Software Engineer Intern（2017 ~ 2018）
              </h3>
              </div>
              <p style={{ fontSize: '12px' }}>
                  Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
                  Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue, Go,
                  Affinity Designer, Clip Studio
                </p>
              </div>
              <table  style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}>
                <tr>
                <td>
                  <a
                    href={'https://twitter.com/picos_tackt?lang=ja'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    <div style={styles.twitter}>
                      Twitter
                    </div>
                  </a>
                </td>
                <td>
                  <a
                    href={'https://github.com/gitackt'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    <div style={styles.button}>
                      Github
                    </div>
                  </a>
                </td>
                </tr>
              </table>
              <br />
              <br />
              <br />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

