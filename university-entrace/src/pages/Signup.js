import React from "react";
import { Link } from "react-router-dom";
import {} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  return (
    <>
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-md-offset-4">
              <div class="form-container form-signup">
                <form class="form-horizontal">
                  <table className="table">
                    <tr>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>first name</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="first name"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>last name</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="last name"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>address</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="address"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>email</label>
                          <input
                            class="form-control"
                            type="email"
                            placeholder="email"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>create password</label>
                          <input
                            class="form-control"
                            type="password"
                            placeholder="create password"
                          />
                        </div>
                      </td>
                      <td>
                        <div class="form-group bg-transparent">
                          <label>confirm password</label>
                          <input
                            class="form-control"
                            type="password"
                            placeholder="confirm password"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check bg-transparent">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="accept"
                            id="accept"
                          />
                          <label class="form-check-label" for="">
                            I accept all terms & conditions
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-lg-center">
                        <button type="button" class="btn btn-default w-50">
                          Sign up now
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <div class="form-group mt-4 text-lg-center bg-transparent">
                          Already, have an account?
                          <Link className="link-primary to-signup" to="/login">
                            Login
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-lg-center">
                      <td>
                        <Link
                          class="btn btn-primary btn-lg w-auto btn-icon"
                          href="#!"
                        >
                          <i class="fab fa-facebook-f me-2"></i>Continue with
                          Facebook
                        </Link>
                      </td>
                      <td>
                        <Link
                          class="btn btn-primary btn-lg w-auto btn-icon"
                          href="#!"
                        >
                          <i class="fab fa-google me-2"></i>Continue with Google
                        </Link>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
