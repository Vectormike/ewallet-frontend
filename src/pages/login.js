import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./register.css";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      user: null,
      token: "",
      pushTo: "",
      loading: false,
      isLoggedIn: false,
      error: "",
    };
  }

  onPageChange = (page, user) => {
    this.setState({
      loggedIn: true,
      user: user,
      token: user.tokens.access.token,
      pushTo: page,
    });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  // Submit details to the backend
  onSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { email, password } = this.state;

    fetch("https://crenettechlabs.herokuapp.com/v1/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.state.token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.user) {
          this.onPageChange("/dashboard", user);
          this.setState({ loading: false });
          this.setState({ isLoggedIn: true });
        } else if (user.message) {
          this.setState({ loading: false });
          this.setState({ error: user.message });
        }
      });
  };

  render() {
    return this.state.isLoggedIn ? (
      <Redirect
        to={{
          pathname: this.state.pushTo,
          state: { user: this.state.user },
        }}
      />
    ) : (
      <div className="text-center">
        <form className="form-signin" method="post" onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={this.onEmailChange}
            autoFocus
          />
          <br />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={this.onPasswordChange}
            required
          />
          <button
            className="btn btn-md btn-primary mx-2"
            disabled={this.state.loading}
            type="submit"
          >
            {this.state.loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
          <Link to="/">
            <button
              className="btn btn-md btn-primary mx-2"
              disabled={this.state.loading}
              type="submit"
            >
              Back
            </button>
          </Link>
          <div className="">{this.state.error}</div>
        </form>
      </div>
    );
  }
}
