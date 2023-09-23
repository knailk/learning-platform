import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie';
import { faFacebook, faTwitter, faGoogle, faGithub, faApple } from '@fortawesome/free-brands-svg-icons';
import request from 'utils/http';
import { Button, Form, Input, Divider, notification } from 'antd';

import { useAuth } from 'contexts/AuthContext';
import styles from './Login.module.scss';
import clsx from 'clsx';

const cookies = new Cookies();

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { setAuthUser, setIsLogin } = useAuth();

    const handleLogin = async (values) => {
        const { username, password } = values;
        try {
            const response = await request.post('auth/login', {
                email: username,
                password: password,
            });

            notification.success({ message: 'Đăng nhập thành công' });
            setAuthUser(response.data.user);
            setIsLogin(true);

            cookies.set('verified', response.data.user.verified);
            cookies.set('email', response.data.user.email);
            cookies.set('is_login', true);

            localStorage.setItem('user_info', JSON.stringify(response.data.user));

            if (!response.data.user.verified) navigate('/confirm-register');
            navigate('/');
        } catch (error) {
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Tên đăng nhập hoặc mật khẩu không hợp lệ',
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
                    <div className={styles.loginContainer}>
                        <div className={styles.loginContent}>
                            <div className={styles.loginImage}>
                                <img src="/images/login.png" alt="sign in" />
                            </div>

                            <div className={styles.loginFormContainer}>
                                <h2 className={styles.formTitle}>Đăng nhập</h2>
                                <Form className={styles.loginForm} onFinish={handleLogin} form={form}>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="username"
                                        rules={[{ required: true, message: 'Bạn phải nhập email!' }]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder="Nhập email của bạn"
                                            prefix={<FontAwesomeIcon icon={faUser} />}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="password"
                                        rules={[{ required: true, message: 'Bạn phải nhập mật khẩu!' }]}
                                    >
                                        <Input.Password
                                            size="large"
                                            placeholder="Nhập mật khẩu của bạn"
                                            prefix={<FontAwesomeIcon icon={faLock} />}
                                        />
                                    </Form.Item>
                                    <Form.Item className={`${styles.formGroup} ${styles.formButton}`}>
                                        <Button
                                            style={{
                                                width: '100%',
                                                borderRadius: '40px',
                                                padding: '8px 24px',
                                                height: '40px',
                                            }}
                                            size="large"
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            <b>Đăng nhập</b>
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className={styles.cardFooter}>
                                    <Link to="/forgot-password" className={styles.cardFooterLeft}>
                                        Quên mật khẩu?
                                    </Link>
                                    <Link to="/register" className={styles.cardFooterRight}>
                                        Chưa có tài khoản?
                                    </Link>
                                </div>
                                <div className={styles.socialLogin}>
                                    <Divider>Hoặc đăng nhập bằng</Divider>
                                    <ul className={styles.socials}>
                                        <li>
                                            <Link>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    style={{ color: '#4267B2' }}
                                                    size="2xl"
                                                    className={styles.cppFacebook}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <FontAwesomeIcon
                                                    icon={faGoogle}
                                                    size="2xl"
                                                    style={{ color: '#DB4437' }}
                                                    className={styles.cppGoogle}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                    style={{ color: '#1DA1F2' }}
                                                    size="2xl"
                                                    className={styles.cppTwitter}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                    style={{ color: '#6cc644' }}
                                                    size="2xl"
                                                    className={styles.cppGithub}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <FontAwesomeIcon
                                                    icon={faApple}
                                                    style={{ color: '#555555' }}
                                                    size="2xl"
                                                    className={styles.cppApple}
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
