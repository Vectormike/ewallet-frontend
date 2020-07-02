import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./register.css";

export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
    const token = this.state.token;

    this.state = {
      amount: "",
      url: "",
      token: token,
      loading: false,
      isLoggedIn: false,
      error: "",
    };
  }

  // componentWillMount() {
  //   window.location.replace(this.state.url);
  // }

  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
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
        Authorization: `Bearer ${this.state.token}`,
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user.response.data.authorization_url);
        if (user.response.message === "Authorization URL created") {
          this.setState({ loading: false });
          this.setState({ isLoggedIn: true });
          this.setState({ url: user.response.data.authorization_url });
          console.log(this.state.url);
        } else if (user.message) {
          this.setState({ loading: false });
          this.setState({ error: user.message });
        }
      });
  };

  render() {
    return this.state.url ? (
      (window.location = this.state.url)
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
            name="amount"
            placeholder="Amount"
            onChange={this.onAmountChange}
            required
          />
          <br />
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
