import React, { Component } from 'react';
import JumbotronComponent from './components/jumbotron.component';
import NavigationComponent from './components/navi.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import FooterComponent from './components/footer.component';
import ContentComponent from './components/content.component';

class LandingComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <JumbotronComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div style={{ background: 'white' }}>
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