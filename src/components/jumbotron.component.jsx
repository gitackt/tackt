import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class JumbotronComponent extends Component {

  render() {

    return (
      <div 
        // style={{ backgroundImage: `url('/profile.jpg')`, backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center' }}
        style={{ backgroundSize: 'cover', color: 'white', backgroundPosition: 'center center' }}
      >
        <div
          style={{ position: 'relative', height: '400px', color: 'white', paddingTop: '10px', top: -85, paddingBottom: '200px', marginBottom: '-100px' }}
        >

        <h3>
          何か色々作ってます
        </h3>

        <p></p>

        <div
          style={{ width: '300px', marginLeft: 'auto', paddingTop: '200px', marginRight: 'auto' }}
        >
        </div>

        <br />
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            size="large"
            onClick={this.handleOpen}
            style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
          >
            自己紹介
          </Button>
        </Link>

        <br />

          <Link to="/sns" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="large"
              onClick={this.handleOpen}
              style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
            >
              連絡先
            </Button>
          </Link>
        
        </div>
      </div>
    );
  }
}

export default JumbotronComponent;
