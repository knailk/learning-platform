import clsx from "clsx";
import { memo } from "react";
import "./style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { faUser, faLock, faFacebookF } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Đăng nhập || CPP</title>
      </Helmet>
      <div className="main">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <img src="/images/signin-image.jpg" alt="sign in" />
                <Link to="/register" className="signin-link">
                  Create an account
                </Link>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign up</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label for="your_name">
                      <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="your_pass">
                      <FontAwesomeIcon icon={faLock} />{" "}
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label for="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(LoginPage);
