import React, { Component } from 'react';
import './App.css';
import JumbotronComponent from './components/jumbotron.component';
import NavigationComponent from './components/navi.component';
import EngeneerPageComponent from './pages/engeneer.component';
import ComicPageComponent from './pages/comic.component';
import ProfilePageComponent from './pages/profile.component';
import SnsPageComponent from './pages/sns.component';
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
      <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingComponent} />
          <Route path="/engeneer" component={EngeneerPageComponent} />
          <Route path="/comic" component={ComicPageComponent} />
          <Route path="/profile" component={ProfilePageComponent} />
          <Route path="/sns" component={SnsPageComponent} />
          <Route render={() => (<Redirect to={"/"} />)} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
