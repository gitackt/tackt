import React, { Component } from 'react';
import FooterComponent from './components/core/footer.component';
import NavigationComponent from './components/core/navi.component';
import ServiceComponent from './components/service.component';
import { ProfileComponent } from './components/profile.component';
import { PriceComponent } from './components/price.component';
import JumbotronComponent from './components/core/jumbotron.component';
import { Name1Component, Name2Component, Name3Component, Name4Component } from './components/name.component';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const styles = {
  background: {
    width: '100%',
    height: '100%',
  }
}

class LandingComponent extends Component {

  state = {
    screen: true,
  }

  render() {
    return (
      <div style={styles.background}>
        <NavigationComponent />
        {this.state.screen ? (
          <ReactFullpage
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <JumbotronComponent　onChange={() => this.setState({ screen: !this.state.screen })} />
                    <div className="down-button" onClick={() => fullpageApi.moveSectionDown()}>↓</div>
                  </div>
                  <div className="section">
                    <Name1Component />
                    <div className="down-button" onClick={() => fullpageApi.moveSectionDown()}>↓</div>
                  </div>
                  <div className="section">
                    <Name2Component />
                    <div className="down-button" onClick={() => fullpageApi.moveSectionDown()}>↓</div>
                  </div>
                  <div className="section">
                    <Name3Component />
                    <div className="down-button" onClick={() => fullpageApi.moveSectionDown()}>↓</div>
                  </div>
                  <div className="section">
                    <Name4Component onChange={() => this.setState({ screen: !this.state.screen })}/>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        ) : (
          <div>
            <ProfileComponent />
            <PriceComponent />
            <ServiceComponent />
            <FooterComponent />
          </div>
        )}
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
