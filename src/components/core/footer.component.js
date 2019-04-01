import React, { PureComponent } from 'react';
import { ProfileComponent } from './profile.component';


const styles = {
  container: {
    position: 'relative',
    paddingTop: '35px',
    paddingBottom: '10px',
    background: '#313942',
    color: '#cecece',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

class FooterComponent extends PureComponent {

  render() {

    return (
      <div>
        <div style={styles.container}>
          <ProfileComponent />
          <h6>Copyright 2018~{new Date().getFullYear()} Takuto Mitsuhashi</h6>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
