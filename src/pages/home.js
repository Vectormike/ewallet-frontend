import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-faded navbar-fixed-top">
        {/* <button
          class="navbar-toggler hidden-sm-up"
          type="button"
          data-toggle="collapse"
          data-target="#exCollapsingNavbar2"
          aria-controls="exCollapsingNavbar2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          &#9776;
        </button> */}
        <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <ul class="nav navbar-nav pull-sm-right">
            <li class="nav-item active">
              <a class="nav-link" href="s">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="d">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary" href="d">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="stage">
        <div id="stage-caption">
          <h1 class="display-4">Crenettechlabs ecommerce</h1>
          <div>
            <Link to="register">
              <button class="btn btn-primary mx-2">Register</button>
            </Link>
            <Link to="/login">
              <button class="btn btn-primary mx-2">Login</button>
            </Link>
          </div>
          {/* <div className="container">
            <div className="row">
              <div class="col-md-6">
                <a href="" class="btn btn-lg btn-success">
                  Register
                </a>
              </div>
              <div class="col-md-6">
                <a href="" class="btn btn-lg btn-success">
                  Login
                </a>
              </div>
            </div>
          </div> */}

          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
