import React from "react"
import "./App.css"
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom"

const LandingComponent = () => {
  return <div className="background">test</div>
}

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={LandingComponent} />
          <Route render={() => <Redirect to={"/"} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
