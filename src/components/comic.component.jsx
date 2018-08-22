import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class ComicComponent extends Component {

  render() {
    return (
      <div className={styles.root} style={{ position: 'relative', height: '100%', background: 'white', color: '#2a2929' }}>
        <h2>
          <img
            style={{ position: 'relative', width: '220px', height: 'auto', borderRadius: '20px', marginTop: '100px' }}
            src="/comic.png"
            alt={'comic'}
          />
        </h2>
        <br />
          <Link to="/comic" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              onClick={this.handleOpen}
              style={{ color: '#EACC8E', borderColor: '#EACC8E' }}
            >
              コミック実績を見る
              </Button>
          </Link>
      </div>
    );
  }
}

export default ComicComponent;
