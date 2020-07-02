import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="a">
            Crenet Techlabs
          </a>
          <Link to="/login">
            <div id="signin_btn" className="btn btn-primary">
              Sign In
            </div>
          </Link>
        </div>
      </nav>

      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Welcome to Crenettechlabs ecommerce...</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      value="Enter your email..."
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <Link to="/register">
                      <button
                        type="submit"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Register!
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <div>
        <h1>Hi</h1>
      </div>
    </div>
  );
};

export default Home;
