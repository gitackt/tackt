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
          style={{ position: 'relative', height: '400px', color: 'white', paddingTop: '40px', paddingBottom: '200px', marginBottom: '-100px' }}
        >

        <h1>
          <img
            style={{ position: 'relative', width: '150px', height: 'auto' }}
            src="/tackt_logo.png"
            alt={'tackt_logo'}
          />
        </h1>

        <br />
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            size="large"
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
