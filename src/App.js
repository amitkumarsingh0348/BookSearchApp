import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import Books from "./components/Books.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/books/:keyword" component={Books}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
