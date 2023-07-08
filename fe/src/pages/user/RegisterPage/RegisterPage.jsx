import clsx from "clsx";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Đăng ký || CPP</title>
      </Helmet>
      <div className="main">
        <section className="register">
          <div className="register-container">
            <div className="register-content">
              <div className="register-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label for="name">
                      <i className="cpp cpp-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      <i className="cpp cpp-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pass">
                      <i className="cpp cpp-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="re-pass">
                      <i className="cpp cpp-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label for="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in{" "}
                      <a href="#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="register-image">
                <img src="images/register-image.jpg" alt="sing up" />
                <Link to="/login" className="register-link">
                  I am already member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterPage;
