import React, { PureComponent } from 'react';
import { jobData } from '../params/job';
import { skillData } from '../params/skill';
import { certificationData } from '../params/certification';
import Grid from '@material-ui/core/Grid';

const styles = {
  content: {
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px',
  },
  profile: {
    borderRadius: '10px',
    padding: '20px',
    border: 'solid 1px #26ccbb',
  },
  baloon: {
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    borderRadius: '10px',
    border: 'solid 1px #26ccbb',
    padding: '30px',
    marginBottom: '50px',
    position: 'relative',
  },
  baloonProfile: {
    fontSize: '30px',
    background: 'white',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'absolute',
    color: '#26ccbb',
    top: -60,
    left: 10,
  },
  smallProfile: {
    fontSize: '20px',
    background: 'white',
    paddingLeft: '10px',
    paddingRight: '10px',
    color: '#26ccbb',
    top: -60,
    left: 10,
  },
  shareContainer: {
    textAlign: 'center',
  },
  share: {
    width: '30px',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '30px',
    cursor: 'pointer',
  }
};

export class ProfileComponent extends PureComponent {

  render() {
    return (
        <div style={styles.content}>
          <div style={styles.baloon}>
            <h3 style={styles.baloonProfile}>Profile</h3>
            三橋拓人(
            <a 
              href={'https://twitter.com/picos_tackt?lang=ja'}
              target="_blank"
              rel="noopener noreferrer"
            >
              @picos_tackt
            </a>
            )です。個人でWebサービスやアプリを作ってます。アイコンも作っています。

            <div style={styles.shareContainer}>
              <a 
                href={'https://www.facebook.com/gitackt'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  style={styles.share}
                  src={'/images/sns/Facebook.png'}
                  alt={'Facebook'}
                />
              </a>
              <a 
                href={'https://twitter.com/picos_tackt?lang=ja'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  style={styles.share}
                  src={'/images/sns/Twitter.png'}
                  alt={'Twitter'}
                />
              </a>
              <a 
                href={'https://github.com/gitackt'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={styles.share}
                  src={'/images/sns/Github.png'}
                  alt={'Github'}
                />
              </a>
              <a 
                href={'https://www.instagram.com/picos_tackt/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  style={styles.share}
                  src={'/images/sns/Instagram.png'}
                  alt={'Instagram'}
                />
              </a>
            </div>
          </div>


          <Grid container justify={'center'} className='container'>
            <Grid item xs={12} sm={6} md={4} className='grid'>
              <h3 style={styles.smallProfile}>Experiences</h3>
              <div style={styles.profile}>
                {jobData.map((each) => (
                  <div style={{ padding: '10px' }}>
                    <a 
                      href={each.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontStyle: 'bold' }}
                    >
                      {each.company}
                    </a> 
                    <br />
                    <span style={{ marginTop: '15px', fontSize: '13px' }}>{each.position}</span>
                    <br />
                    <span style={{ marginTop: '15px', fontSize: '13px' }}>{each.term}</span>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='grid'>
              <h3 style={styles.smallProfile}>Certifications</h3>
              <div style={styles.profile}>
                {certificationData.map((each) => (
                  <div style={{ padding: '10px' }}>
                    <a 
                      href={each.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontStyle: 'bold' }}
                    >
                      {each.name}
                    </a> 
                    <br />
                    <span style={{ marginTop: '15px', fontSize: '13px' }}>{each.dis}</span>
                    <br />
                    <span style={{ marginTop: '15px', fontSize: '13px' }}>{each.term}</span>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className='grid'>
              <h3 style={styles.smallProfile}>Skills</h3>
              <div style={styles.profile}>
                {skillData.map((each) => (
                  <div style={{ padding: '10px' }}>
                    <span style={{ marginTop: '15px', fontSize: '14px', color: '#26ccbb'}}>{each.term}</span><br/>
                    <span style={{ fontSize: '13px' }}>{each.name}</span>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
    );
  }
}

