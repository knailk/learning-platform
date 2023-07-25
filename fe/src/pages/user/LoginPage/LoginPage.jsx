import { useNavigate } from "react-router-dom";
import React, { memo } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
import { useAuth } from "../../../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLogin, setIsLogin } = useAuth();

  const login = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password: password }),
    };

    const response = await fetch(
      "http://localhost:9000/v1/user/login",
      requestOptions,
    );
    const data = await response.json();
    setAuthUser(data.user);
    setIsLogin(true);
    console.log(data);

    navigate("/");
  };

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
                  className={styles["login-form"]}
                  id="login-form"
                  onSubmit={login}
                >
                  <div className={styles["form-group"]}>
                    <label htmlFor="username">
                      <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Nhập email"
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="password">
                      <FontAwesomeIcon icon={faLock} />{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Nhập mật khẩu"
                      required
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
                      <Link to="fb.com">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{ color: "#4267B2" }}
                          size="2xl"
                          className={styles["cpp-facebook"]}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="google.com">
                        <FontAwesomeIcon
                          icon={faGoogle}
                          size="2xl"
                          style={{ color: "#DB4437" }}
                          className={styles["cpp-google"]}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="twitter.com">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          style={{ color: "#1DA1F2" }}
                          size="2xl"
                          className={styles["cpp-twitter"]}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="github.com">
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{ color: "#6cc644" }}
                          size="2xl"
                          className={styles["cpp-github"]}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="http://apple.com">
                        <FontAwesomeIcon
                          icon={faApple}
                          style={{ color: "#555555" }}
                          size="2xl"
                          className={styles["cpp-apple"]}
                        />
                      </Link>
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
