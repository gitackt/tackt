import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import NavigationComponent from '../components/navi.component';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ComicPageComponent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', padding: '30px', height: '100%' }}>
        <NavigationComponent />
        <h2>
          <img
            style={{ position: 'relative', width: '300px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/comic.png"
            alt={'comic'}
          />
        </h2>
      </div>
    );
  }
}

export default ComicPageComponent;
