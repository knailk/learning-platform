import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faGithub,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import request from "utils/http";
import { Divider, notification } from "antd";
import { useAuth } from "contexts/AuthContext";
import styles from "./Login.module.css";

const cookies = new Cookies();

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuthUser, setIsLogin } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await request.post("auth/login", {
        email: event.target.username.value,
        password: event.target.password.value,
      });

      notification.success({
        message: "Đăng nhập thành công",
        // description: "Đợi một chút...",
      });
      console.log(response);
      setAuthUser(response.data.user);
      setIsLogin(true);

      cookies.set("access_token", response.data.token.access_token, {
        path: "/",
      });

      navigate("/");
    } catch (error) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: "Tên đăng nhập hoặc mật khẩu không hợp lệ",
      });
    }
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
                  onSubmit={handleLogin}
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
