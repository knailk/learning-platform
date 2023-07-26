import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { notification } from "antd";

import { useAuth } from "contexts/AuthContext";
import request, { setAuthToken } from "utils/http";
import styles from "./Register.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setAuthUser, setIsLogin } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const rePassword = event.target.confirmpassword.value;

    if (password !== rePassword) {
      notification.error({
        message: "Đăng ký thất bại",
        description: "Mật khẩu nhập lại không khớp.",
      });
      return;
    }
    try {
      const response = await request.post("user/register", {
        email: event.target.email.value,
        password: password,
        name: event.target.name.value,
        phone: event.target.phone.value,
        age: 1,
      });

      notification.success({
        message: "Đăng ký thành công",
        // description: "Đợi một chút...",
      });

      setAuthUser(response.data.user);
      setIsLogin(true);
      setAuthToken(response.data.token.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Đăng ký thất bại",
        description: error.response.data.message,
      });
    }
  };

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
                  onSubmit={handleRegister}
                  className={styles["register-form"]}
                  id="register-form"
                >
                  <div className={styles["form-group"]}>
                    <label htmlFor="name">
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
                    <label htmlFor="email">
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
                    <label htmlFor="phone">
                      <FontAwesomeIcon icon={faPhone} />
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="pass">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label htmlFor="confirmpassword">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Nhập lại mật khẩu"
                    />
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
