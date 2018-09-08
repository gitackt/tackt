import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class NavigationComponent extends Component {

  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Drawer
          open={this.state.open}
        >
          <div style={{ width: '300px', height: '100px', background: 'white' }}>
            <IconButton 
              onClick={() => this.setState({ open: false })}
              style={{ right: 10, top: 5, position: 'absolute' }}
            >
              <ChevronRightIcon />
            </IconButton>


          <div style={{ padding: "20px", paddingTop: "40px", fontSize: "15px" }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                TOP
              </h4>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                自己紹介
            </h4>
            </Link>
            <Link to="/sns" style={{ textDecoration: 'none' }}>
                <h4
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  onClick={() => this.setState({ open: false })}
                >
                連絡先
            </h4>
            </Link>
            </div>

            <div style={{ padding: "20px", paddingTop: "-20px", fontSize: "12px" }}>
            <Link to="/engeneer" style={{ textDecoration: 'none' }}>
                <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                エンジニア実績を見る
              </h4>
            </Link>
            <Link to="/comic" style={{ textDecoration: 'none' }}>
              <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                コミック実績を見る
              </h4>
            </Link>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                公式ショップを見る
              </h4>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}>
              <h4
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
                onClick={() => this.setState({ open: false })}
              >
                公式ブログを見る
              </h4>
            </Link>
          </div>
          </div>
          
        </Drawer>

        <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton 
              onClick={() => this.setState({ open: true })}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationComponent;