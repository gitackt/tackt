import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class JumbotronComponent extends Component {

  render() {

    return (
      <div 
        style={{ backgroundSize: 'cover', color: 'white' }}
      >
        <div
          style={{ position: 'relative', height: '100%', paddingTop: '80px', paddingBottom: '80px', textAlign: 'center'  }}
        >

          <img
            style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', width: '200px', height: 'auto'}}
            src="/images/common/jack_the_ripper.png"
            alt={'jack the ripper'}
          />

          <br />

          <img
            style={{ marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', width: '170px', height: 'auto' }}
            src="/images/common/website.png"
            alt={'website'}
          />

          <Grid container justify={'center'} style={{ maxWidth: '300px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Grid item xs={6}>
              <a
                href={"https://tackt.official.ec/"}
                target={"_blank"}
                style={{ textDecoration: 'none' }}
              >
                <img
                  style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: 'auto' }}
                  src="/images/common/shop.png"
                  alt={'shop'}
                />
              </a>
            </Grid>
            <Grid item xs={6}>
              <a
                href={"https://monetizealchemist.com/"}
                target={"_blank"}
                style={{ textDecoration: 'none' }}
              >
                <img
                  style={{ marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', width: '100px', height: 'auto' }}
                  src="/images/common/blog.png"
                  alt={'website'}
                />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
