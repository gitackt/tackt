import * as React from 'react';
import { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { menuData } from '../../params/menu';

class NavigationComponent extends Component {

  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Drawer open={this.state.open} >
          <div style={{ width: '200px', height: '100px' }}>
            <IconButton
              onClick={() => this.setState({ open: false })}
              style={{ right: 10, top: 5, position: 'absolute' }}
            >
              <ChevronRightIcon />
            </IconButton>

            <div style={{ padding: "20px", fontSize: "12px", marginTop: '50px' }}>
              {menuData.map((each) => (
                <a
                  href={each.url}
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    onClick={() => this.setState({ open: false })}
                  >
                    {each.name}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </Drawer>

        <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <IconButton
              color={"#44373c"}
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