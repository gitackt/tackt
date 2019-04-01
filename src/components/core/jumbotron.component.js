import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {
    position: 'relative',
    paddingTop: '50px',
    paddingBottom: '50px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '40px',
  },
  button: {
    height: '20px',
    width: '80%',
    borderRadius: '5px',
    background: '#FFAF00',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
    fontSize: '17px',
    padding: '15px',
    textDecoration: 'none',
    marginTop: '20px',
    boxShadow: '1px 1px 5px 2px #1cb0ea',
  },
}

class JumbotronComponent extends PureComponent {

  render() {
    return (
      <div
        style={{ background: '#1BB1EF' }}
      >
        <div
          style={styles.container}
        >           
          <Grid container justify={'center'}>
            <Grid item xs={12} style={{ textAlign: 'center', marginLeft: '3%', marginRight: '3%' }}>
              <div style={styles.title}>
                <h1>Takuto Mitsuhashi. Portfolio Website.</h1>
                <p style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
                フリーランスWebエンジニア。Webに関わるご相談やサイト制作はお任せ下さい。Webサイト制作のお悩み全てに対応いたします。
                Freelance Web Engineer. Please leave the consultation and site production related to the web. I cope with all the worries of website production.<br /><br />
                </p>
                  <div style={{ width: '200px', marginLeft: 'auto', marginRight: 'auto' }}>
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
                  </div>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
