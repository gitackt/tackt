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
          style={{ position: 'relative', height: '100%', color: 'white', paddingTop: '10px', paddingBottom: '80px'  }}
        >

        <h1>
          <img
            style={{ position: 'relative', width: '150px', height: 'auto' }}
            src="/tackt_logo.png"
            alt={'tackt_logo'}
          />
        </h1>

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

          <Link to="/engeneer" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="large"
              style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
            >
              製作実績
            </Button>
          </Link>

          <br />

          <Link to="/comic" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="large"
              style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
            >
              作品紹介
            </Button>
          </Link>

          <br />

          <a
            href="https://tackt.official.ec/"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              size="large"
              style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
            >
              ショップ
            </Button>
          </a>

          <br />

          <a
            href="https://monetizealchemist.com/"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              size="large"
              style={{ color: '#1DD6D1', borderColor: '#1DD6D1', marginTop: '10px' }}
            >
              ブログ
            </Button>
          </a>

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
