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
      <React.Fragment>
        <div class="container-fluid">
          <button type="button" class="btn btn-dark">
            Balance{" "}
            <span class="badge badge-light">
              ‎₦{this.state.user.user.balance}
            </span>
          </button>
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-lg">
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
                    class="btn btn-sm btn-block btn-outline-primary"
                  >
                    Deposit
                  </button>
                </Link>
              </div>
            </div>
            <div class="card mb-4 shadow-lg">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Gifts</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4">Gift your friends cash</ul>
                <Link
                  to={{
                    pathname: "/transfer",
                    state: { token: this.state.user.tokens.access.token },
                  }}
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-block btn-primary"
                  >
                    Send gifts
                  </button>
                </Link>
              </div>
            </div>
            <div class="card mb-4 shadow-lg">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Transactions</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4">
                  View recent transactions
                </ul>
                <Link
                  to={{
                    pathname: "/transactions",
                    state: { user: this.state.user },
                  }}
                >
                  <button
                    type="button"
                    class="btn btn-sm btn-block btn-primary"
                  >
                    Transactions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
