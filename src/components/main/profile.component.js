import React, { PureComponent } from 'react';
import { jobData } from '../../params/job';

const styles = {
  content: {
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '15px',
  },
  profile: {
    borderRadius: '10px',
    padding: '20px',
    background: '#f2f2f2'
  },
  baloon: {
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
            )です。個人でWebサービスやアプリを作ってます。
          </div>
          <div style={styles.profile}>
            {jobData.map((each) => (
              <div style={{ padding: '10px' }}>
                <a 
                  href={each.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {each.company}
                </a> 
                <br />
                {each.position}
              </div>
            ))}
          </div>
          <p style={{ padding: '10px', fontSize: '12px' }}>
            Python, Ruby, Django, Rails, HTML, CSS, JavaScript, TypeScript, React, React-native, 
            Nginx, MySQL, Wordpress, PHP, Node, Docker, AWS, Angular, Vue, Go,
            Affinity Designer, Clip Studio
          </p>
        </div>
    );
  }
}

