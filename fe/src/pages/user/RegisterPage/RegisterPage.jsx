import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cookies from 'universal-cookie';
import { faUser, faLock, faEnvelope, faPhone, faKey } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, Input, Divider, notification } from 'antd';
import clsx from 'clsx';
import { useAuth } from 'contexts/AuthContext';
import request, { setAuthToken } from 'utils/http';
import styles from './Register.module.scss';

const cookies = new Cookies();

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { setAuthUser, setIsLogin } = useAuth();

    const handleRegister = async (values) => {
        const { email, password, name, phone, confirmpassword } = values;

        if (password !== confirmpassword) {
            notification.error({
                message: 'Đăng ký thất bại',
                description: 'Mật khẩu nhập lại không khớp.',
            });
            return;
        }
        try {
            const response = await request.post('auth/register', {
                email: email,
                password: password,
                name: name,
                phone: phone,
                age: 1,
            });

            notification.success({
                message: 'Đăng ký thành công',
            });

            setAuthUser(response?.data.user);
            setIsLogin(true);

            cookies.set('verified', response.data.user.verified);
            cookies.set('email', response.data.user.email);
            cookies.set('is_login', true);
            localStorage.setItem('user_info', JSON.stringify(response.data.user));

            navigate('/confirm-register');
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Đăng ký thất bại',
                description: error.response.data.message,
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Đăng ký tài khoản</title>
            </Helmet>
            <div className={styles.main}>
                <section className={styles.register}>
                    <div className={styles.registerContainer}>
                        <div className={styles.registerContent}>
                            <div className={styles.registerFormContainer}>
                                <h2 className={styles.formTitle}>Đăng ký tài khoản</h2>
                                <Form form={form} onFinish={handleRegister} className={styles.registerForm}>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="name"
                                        rules={[{ required: true, message: 'Bạn phải nhập tên của bạn!' }]}
                                    >
                                        <Input
                                            // size="large"
                                            placeholder="Nhập họ và tên"
                                            prefix={<FontAwesomeIcon icon={faUser} />}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="email"
                                        rules={[{ required: true, message: 'Bạn phải nhập email của bạn!' }]}
                                    >
                                        <Input
                                            // size="large"
                                            placeholder="Nhập địa chỉ email"
                                            prefix={<FontAwesomeIcon icon={faEnvelope} />}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="phone"
                                        rules={[{ required: true, message: 'Bạn phải nhập số điện thoại của bạn!' }]}
                                    >
                                        <Input
                                            // size="large"
                                            placeholder="Nhập số điện thoại"
                                            prefix={<FontAwesomeIcon icon={faPhone} />}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="password"
                                        rules={[{ required: true, message: 'Bạn phải nhập mật khẩu!' }]}
                                    >
                                        <Input.Password
                                            // size="large"
                                            placeholder="Nhập mật khẩu"
                                            prefix={<FontAwesomeIcon icon={faLock} />}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        className={styles.formGroup}
                                        name="confirmpassword"
                                        rules={[{ required: true, message: 'Nhập lại mật khẩu!' }]}
                                    >
                                        <Input.Password
                                            // size="large"
                                            placeholder="Nhập lại mật khẩu"
                                            prefix={<FontAwesomeIcon icon={faKey} />}
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
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            <b>Đăng ký</b>
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className={styles.registerImage}>
                                <img src="images/register.png" alt="sing up" />
                                <Link to="/login" className={styles.registerLink}>
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
