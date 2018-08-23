import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ProfileComponent from './components/profile.component';
import JumbotronComponent from './components/jumbotron.component';
import EngeneerComponent from './components/engeneer.component';
import DesignerComponent from './components/designer.component';
import ProjectComponent from './components/project.component';
import BlogComponent from './components/blog.component';
import ComicComponent from './components/comic.component';
import ShopComponent from './components/shop.component';
import FooterComponent from './components/footer.component';
import NavigationComponent from './components/navi.component';
import EngeneerPageComponent from './pages/engeneer.component';
import DesignerPageComponent from './pages/designer.component';
import ComicPageComponent from './pages/comic.component';
import ShopPageComponent from './pages/shop.component';
import BlogPageComponent from './pages/blog.component';
import ProjectPageComponent from './pages/project.component';
import ProfilePageComponent from './pages/profile.component';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


class LandingComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <JumbotronComponent />
        <Grid container spacing={24} justify={'center'}> 
          <Grid item xs={12} md={4}>
            <EngeneerComponent />            
          </Grid>
          <Grid item xs={12} md={4}>
            <DesignerComponent />            
          </Grid>
          <Grid item xs={12} md={4}>
            <ComicComponent />            
          </Grid>
          <Grid item xs={12} md={4}>
            <ProjectComponent />            
          </Grid>
          <Grid item xs={12} md={4}>
            <ShopComponent />            
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogComponent />            
          </Grid>
        </Grid>
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
          <Route path="/engeneer" component={EngeneerPageComponent} />
          <Route path="/designer" component={DesignerPageComponent} />
          <Route path="/comic" component={ComicPageComponent} />
          <Route path="/project" component={ProjectPageComponent} />
          <Route path="/shop" component={ShopPageComponent} />
          <Route path="/blog" component={BlogPageComponent} />
          <Route path="/profile" component={ProfilePageComponent} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
