import React, { Component } from 'react';
import './App.css';
import JumbotronComponent from './components/jumbotron.component';
import EngeneerComponent from './components/engeneer.component';
import BlogComponent from './components/blog.component';
import ComicComponent from './components/comic.component';
import ShopComponent from './components/shop.component';
import FooterComponent from './components/footer.component';
import NavigationComponent from './components/navi.component';
import EngeneerPageComponent from './pages/engeneer.component';
import ComicPageComponent from './pages/comic.component';
import ShopPageComponent from './pages/shop.component';
import BlogPageComponent from './pages/blog.component';
import ProfilePageComponent from './pages/profile.component';
import SnsPageComponent from './pages/sns.component';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


class LandingComponent extends Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <JumbotronComponent />
        <Grid container justify={'center'}> 
          <Grid item xs={12} md={3}>
            <EngeneerComponent />            
          </Grid>
          <Grid item xs={12} md={3}>
            <ComicComponent />            
          </Grid>
          <Grid item xs={12} md={3}>
            <ShopComponent />            
          </Grid>
          <Grid item xs={12} md={3}>
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
          <Route path="/comic" component={ComicPageComponent} />
          <Route path="/shop" component={ShopPageComponent} />
          <Route path="/blog" component={BlogPageComponent} />
          <Route path="/profile" component={ProfilePageComponent} />
          <Route path="/sns" component={SnsPageComponent} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
