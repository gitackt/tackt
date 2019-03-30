import React, { Component } from 'react';
import FooterComponent from './components/footer.component';
import NavigationComponent from './components/navi.component';
import ContentComponent from './components/content.component';
import { PriceComponent } from './components/price.component';
import JumbotronComponent from './components/jumbotron.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';

const styles = {
  background: {
    width: '100%',
  }
}

class LandingComponent extends Component {
  render() {
    return (
      <div style={styles.background}>
        <NavigationComponent />
        <JumbotronComponent />
        <PriceComponent />
        <ContentComponent />
        <FooterComponent />
      </div>
    );
  }
}

class App extends Component {
  render() {

    return (
      <div style={{ background: '#white' }}>
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
