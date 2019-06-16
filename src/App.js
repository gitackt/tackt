import React, { Component } from 'react';
import FooterComponent from './components/core/footer.component';
import NavigationComponent from './components/core/navi.component';
import ServiceComponent from './components/main/service.component';
// import GalleryComponent from './components/main/gallery.component';
import { ProfileComponent } from './components/main/profile.component';
import JumbotronComponent from './components/core/jumbotron.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

const styles = {
  background: {
    width: '100%',
    height: '100%',
  }
}

class LandingComponent extends Component {

  render() {
    return (
      <div style={styles.background}>
        <NavigationComponent />
        <JumbotronComponent />
        <ProfileComponent />
        <ServiceComponent />
        {/* <GalleryComponent /> */}
        <FooterComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={LandingComponent} />
            <Route render={() => (<Redirect to={"/"} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
