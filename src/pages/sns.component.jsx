import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';
import FooterComponent from '../components/footer.component';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SnsPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
        
        <div style={{ marginTop: '60px' }}>

          <h3 style={{ color: '#1DD6D1' }}>連絡先</h3>

          <Grid container spacing={24} justify={'center'}>
            <Grid item xs={12}>
              <div style={{ fontSize: '15px', color: 'rgb(149, 149, 149)', textAlign: 'center', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                <Grid container spacing={24} justify={'center'}>               
                  <Grid item xs={6} md={3}>
                    <h3>
                      <a
                        href="https://twitter.com/picos_tackt?lang=ja"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
                        >
                          Twitter
                        </Button>
                      </a>
                    </h3>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h3>
                      <a
                        href="https://www.facebook.com/profile.php?id=100013371464347"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
                        >
                          Facebook
                        </Button>
                      </a>
                    </h3>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h3>
                      <a
                        href="https://github.com/gitackt"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
                        >
                          Github
                        </Button>
                      </a>
                    </h3>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <h3>
                      <a
                        href="https://valu.is/tackt3"
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
                          size="large"
                          style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
                        >
                          Valu
                        </Button>
                      </a>
                    </h3>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>

        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default SnsPageComponent;
