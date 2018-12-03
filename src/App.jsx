import React, { Component } from 'react';
import JumbotronComponent from './components/jumbotron.component';
import NavigationComponent from './components/navi.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import FooterComponent from './components/footer.component';
import ContentComponent from './components/content.component';


const styles = {
  background: {
    // background: "url('/images/background.png')",
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'content',
    // backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    width: '100%',
  }
}

class LandingComponent extends Component {
  render() {
    return (
      <div style={styles.background}>
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
