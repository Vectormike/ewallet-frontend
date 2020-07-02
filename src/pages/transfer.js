import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./register.css";

export default class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      email: "",
      loading: false,
      isLoggedIn: false,
      error: "",
    };
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };
  // Submit details to the backend
  onSubmit = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { email, amount } = this.state;

    fetch("https://crenettechlabs.herokuapp.com/v1/transaction/transfer", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
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
      <Redirect to="/dashboard" />
    ) : (
      <div className="text-center">
        <form className="form-signin" method="post" onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Transfer</h1>
          <label htmlFor="inputPassword" className="sr-only">
            User's email
          </label>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={this.onEmailChange}
            required
          />
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
            {this.state.loading ? "Transfering doe" : "Transfer"}
          </button>
          <div className="">{this.state.error}</div>
        </form>
      </div>
    );
  }
}
