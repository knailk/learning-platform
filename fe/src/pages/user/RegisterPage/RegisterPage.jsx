import clsx from "clsx";
import { memo } from "react";
import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Đăng ký || CPP</title>
      </Helmet>
      <div className={styles.main}>
        <section className={styles.register}>
          <div className={styles["register-container"]}>
            <div className={styles["register-content"]}>
              <div className={styles["register-form-container"]}>
                <h2 className={styles["form-title"]}>Đăng ký</h2>
                <form
                  method="POST"
                  className={styles["register-form"]}
                  id="register-form"
                >
                  <div className={styles["form-group"]}>
                    <label for="name">
                      <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label for="email">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label for="pass">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label for="re-pass">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className={styles["agree-term"]}
                    />
                    <label
                      for="agree-term"
                      className={styles["label-agree-term"]}
                    >
                      <span>
                        <span></span>
                      </span>
                      Tôi đồng ý với{" "}
                      <Link to="/login" className={styles["term-service"]}>
                        Điều khoản và điều kiện
                      </Link>
                    </label>
                  </div>
                  <div
                    className={`${styles["form-group"]} ${styles["form-button"]}`}
                  >
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      className={styles["form-submit"]}
                      value="Đăng ký"
                    />
                  </div>
                </form>
              </div>
              <div className={styles["register-image"]}>
                <img src="images/register.png" alt="sing up" />
                <Link to="/login" className={styles["register-link"]}>
                  Đã có tài khoản
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
