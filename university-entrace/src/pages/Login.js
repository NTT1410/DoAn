import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";

const Login = () => {
  return (
    <>
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="form-container">
                <div class="form-icon">
                  <i class="fa fa-user"></i>
                </div>
                <h3 class="title">Login</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>email</label>
                    <input
                      class="form-control"
                      type="email"
                      placeholder="email address"
                    />
                  </div>
                  <div class="form-group">
                    <label>password</label>
                    <input
                      class="form-control"
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <Button type="button" class="btn btn-default">
                    Login
                  </Button>
                  <div class="form-group mt-4 text-lg-center">
                    Don't have an account?
                    <Link className="link-primary to-signup" to="/signup">
                      Signup
                    </Link>
                  </div>
                  <div className="">
                    <Link class="btn btn-primary btn-lg btn-block" href="#!">
                      <i class="fab fa-facebook-f me-2"></i>Continue with
                      Facebook
                    </Link>
                    <Link
                      class="btn btn-primary btn-lg btn-block mt-2"
                      href="#!"
                    >
                      <i class="fab fa-google me-2"></i>Continue with Google
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
