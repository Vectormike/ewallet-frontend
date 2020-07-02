import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Deposit from "./pages/deposit";
import Transfer from "./pages/transfer";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/deposit" component={Deposit} />
        <Route exact path="/transfer" component={Transfer} />
      </Switch>
    );
  }
}

export default App;
