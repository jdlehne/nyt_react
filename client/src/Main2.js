import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Main from "./Main";
import Results from "./Search/Results";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  </Router>;

export default App;
