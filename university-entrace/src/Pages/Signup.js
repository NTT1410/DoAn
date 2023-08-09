import React from "react";
import {} from "../assets/styles/pages/Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container-form">
        <div className="screen-form sign-form">
          <div className="screen-form__content">
            <form className="form form-sign">
              <div className="form__field">
                <input
                  type="email"
                  className="form__input input__signup"
                  placeholder="Email"
                />
              </div>
              <div className="form__field">
                <input
                  type="email"
                  className="form__input input__signup"
                  placeholder="User name"
                />
              </div>
              <div className="form__field">
                <input
                  type="password"
                  className="form__input input__signup"
                  placeholder="Create password"
                />
              </div>
              <div className="form__field">
                <input
                  type="password"
                  className="form__input input__signup"
                  placeholder="Confirm password"
                />
              </div>
              <div className="form__field">
                <input
                  type="file"
                  className="form__input input__signup"
                  placeholder="Confirm password"
                />
              </div>
              <button className="btn__submit submit__signup">
                <span className="btn__text">Sign Un Now</span>
                <i className="btn__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div className="signup-button">
              <span className="signup-s">Have an account?</span>
              <Link className="signup" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
