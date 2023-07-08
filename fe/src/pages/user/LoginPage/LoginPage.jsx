import clsx from "clsx";
import { memo } from "react";
import "./style.scss";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from 'antd';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Đăng nhập || CPP</title>
      </Helmet>
      <div className="main">
        <section className="login">
          <div className="log-in-container">
            <div className="login-content">
              <div className="login-image">
                <img src="/images/login.png" alt="sign in" />
                <Link to="/register" className="login-link">
                  Create an account
                </Link>
              </div>

              <div className="login-form-container">
                <h2 className="form-title">Đăng nhập</h2>
                <form method="POST" className="login-form" id="login-form">
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
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
                <div className="social-login">
                <Divider >Hoặc đăng nhập bằng</Divider>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        {/* <FacebookOutlined
                          className="cpp-facebook"
                        /> */}
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "#4267B2" }}
                          size="2xl"
                          className="cpp-facebook"
                          // beat
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faGoogle}
                          size="2xl"
                          style={{ color: "#DB4437" }}
                          className="cpp-google"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#1DA1F2" }}
                          size="2xl"
                          className="cpp-twitter"
                        />
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

export default LoginPage;
