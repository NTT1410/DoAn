import React from "react";
import {} from "../assets/styles/pages/Login.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-form">
        <div className="screen-form">
          <div className="screen-form__content">
            <form className="form">
              <div className="form__field">
                <i className="form__icon fas fa-user"></i>
                <input
                  type="text"
                  className="form__input"
                  placeholder="User name / Email"
                />
              </div>
              <div className="form__field">
                <i className="form__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                />
              </div>
              <div className="form__forgot-password">
                <Link to="/signup">abs</Link>
              </div>
              <button className="btn__submit">
                <span className="btn__text">Log In Now</span>
                <i className="btn__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="social-login">
              <h3>Login With</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-google"></a>
              </div>
            </div>
            <div className="signup-button">
              <span className="signup-s">Not a member?</span>
              <Link className="signup" to="/signup">
                Signup
              </Link>
            </div>
          </div>
          <div className="screen-form__background">
            <span className="screen-background__shape screen-background__shape4"></span>
            <span className="screen-background__shape screen-background__shape3"></span>
            <span className="screen-background__shape screen-background__shape2"></span>
            <span className="screen-background__shape screen-background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
