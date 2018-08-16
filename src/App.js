import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ProfileComponent from './components/profile.component';
import JumbotronComponent from './components/jumbotron.component';
import EngeneerComponent from './components/engeneer.component';
import DesignerComponent from './components/designer.component';
// import ProjectComponent from './components/project.component';
import BlogComponent from './components/blog.component';
import ComicComponent from './components/comic.component';
import FooterComponent from './components/footer.component';
import NavigationComponent from './components/navi.component';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class LandingComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <JumbotronComponent />
        {/* <ProfileComponent /> */}
        <EngeneerComponent />
        <DesignerComponent />
        {/* <ProjectComponent /> */}
        <ComicComponent />
        <BlogComponent />
        <FooterComponent />
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
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
