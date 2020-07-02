import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state != null) {
      this.state = this.props.location.state;
    } else {
      this.state = {
        user: null,
      };
    }
  }

  render() {
    return this.state.user === null ? (
      <Redirect to="/" />
    ) : (
      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Deposit</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                Deposit monet into your wallet
              </ul>
              <Link
                to={{
                  pathname: "/deposit",
                  state: { token: this.state.user.tokens.access.token },
                }}
              >
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Send gifts</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">Gift your friends cash</ul>
              <Link
                to={{
                  pathname: "/transfer",
                  state: { token: this.state.user.tokens.access.token },
                }}
              >
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Send gifts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
