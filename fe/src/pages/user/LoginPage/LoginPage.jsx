import clsx from "clsx";
import { memo } from "react";
// import "./style.css";
import styles from './Login.module.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "antd";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Đăng nhập || CPP</title>
      </Helmet>
      <div className={styles.main}>
        <section className={styles.login}>
          <div className={styles["login-container"]}>
            <div className={styles["login-content"]}>
              <div className={styles["login-image"]}>
                <img src="/images/login.png" alt="sign in" />
                <Link to="/register" className={styles["login-link"]}>
                  Đăng ký tài khoản mới
                </Link>
              </div>

              <div className={styles["login-form-container"]}>
                <h2 className={styles["form-title"]}>Đăng nhập</h2>
                <form
                  method="POST"
                  className={styles["login-form"]}
                  id="login-form"
                >
                  <div className={styles["form-group"]}>
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
                  <div className={styles["form-group"]}>
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
                  <div
                    className={`${styles["form-group"]} ${styles["form-button"]}`}
                  >
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      className={styles["form-submit"]}
                      value="Đăng nhập"
                    />
                  </div>
                </form>
                <div className={styles["social-login"]}>
                  <Divider>Hoặc đăng nhập bằng</Divider>
                  <ul className={styles.socials}>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "#4267B2" }}
                          size="2xl"
                          className={styles["cpp-facebook"]}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faGoogle}
                          size="2xl"
                          style={{ color: "#DB4437" }}
                          className={styles["cpp-google"]}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#1DA1F2" }}
                          size="2xl"
                          className={styles["cpp-twitter"]}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ color: "#6cc644" }}
                          size="2xl"
                          className={styles["cpp-github"]}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon
                          icon={faApple}
                          style={{ color: "#555555" }}
                          size="2xl"
                          className={styles["cpp-apple"]}
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
