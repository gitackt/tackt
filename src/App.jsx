import React, { Component } from 'react';
import './App.scss';
import JumbotronComponent from './components/jumbotron.component';
import NavigationComponent from './components/navi.component';
import ProfilePageComponent from './pages/profile.component';
import { Route, Switch, BrowserRouter as Router,Redirect } from 'react-router-dom';


class LandingComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <JumbotronComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div style={{ background: 'black' }}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingComponent} />
          <Route path="/profile" component={ProfilePageComponent} />
          <Route render={() => (<Redirect to={"/"} />)} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
