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
      <div className={styles.root} style={{ position: 'relative', height: '100%', background: 'white', color: '#2a2929', padding: '50px' }}>
        <Link to="/comic" style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            onClick={this.handleOpen}
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1' }}
          >
            コミック実績を見る
            </Button>
        </Link>
      </div>
    );
  }
}

export default ComicComponent;
