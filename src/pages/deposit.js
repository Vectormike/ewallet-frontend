import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./register.css";

export default class Deposit extends Component {
  constructor() {
    super();

    this.state = {
      amount: "",
      url: "",
      loading: false,
      isLoggedIn: false,
      error: "",
    };
  }

  onAmountChange = (e) => {
    this.setState({ password: e.target.value });
  };

  // Submit details to the backend
  onSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { amount } = this.state;

    fetch("https://crenettechlabs.herokuapp.com/v1/transaction/deposit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWZjM2VmNDljZGZhNDMxZTIyODIxMWYiLCJpYXQiOjE1OTM2ODA5NjksImV4cCI6MTU5MzY4Mjc2OX0.KbRZKaeGcElcTEdIGPay7VNNZmiu25H_D1rOoC5-osk",
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);

        if (user.user) {
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
      <Redirect to={this.state.redirect} />
    ) : (
      <div className="text-center">
        <form className="form-signin" method="post" onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Deposit</h1>
          <label htmlFor="inputPassword" className="sr-only">
            Amount to Deposit
          </label>
          <input
            type="text"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Amount"
            onChange={this.onAmountChange}
            required
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            disabled={this.state.loading}
            type="submit"
          >
            {this.state.loading ? "Depositing doe" : "Deposit"}
          </button>
          <div className="">{this.state.error}</div>
        </form>
      </div>
    );
  }
}
