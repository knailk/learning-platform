import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cookies from 'universal-cookie';
import request from 'utils/http';
import { Button, Card, Form, Input, Typography, notification } from 'antd';

import styles from './ForgotPassword.module.css';

const cookies = new Cookies();

const ForgotPasswordPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (formValues) => {
        const { email } = formValues;
        try {
            const response = await request.post('auth/forgot-password', {
                email: email,
            });

            if (response) {
                cookies.set('forgot_email', email);
                navigate('/new-password');
            }
        } catch (error) {
            notification.error({ message: 'Đã có lỗi xảy ra, vui lòng thử lại!' });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Quên mật khẩu</title>
            </Helmet>
            <div className={styles.main}>
                <div className={styles['forgot-password-page']} style={{ paddingTop: '100px' }}>
                    <div style={{ padding: '32px', width: '32%' }}>
                        <Card className={styles['card']}>
                            {/* HEADER */}
                            <div className={styles['card__header']}>
                                <Typography.Title style={{ textAlign: 'center', fontSize: 18 }} level={5}>
                                    Quên mật khẩu
                                </Typography.Title>
                            </div>

                            {/* BODY */}
                            <Form
                                className={styles['card__form']}
                                form={form}
                                layout="vertical"
                                autoComplete="off"
                                onFinish={handleSubmit}
                            >
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: 'Bạn phải nhập email của bạn!' }]}
                                >
                                    <Input size="large" placeholder="Nhập địa chỉ email của bạn" />
                                </Form.Item>
                                <Form.Item>
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
                                        <b>Gửi mã xác nhận</b>
                                    </Button>
                                </Form.Item>
                            </Form>

                            {/* FOOTER */}
                            <div className={styles['card__footer']}>
                                <Link to="/login">Trở về trang đăng nhập</Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(ForgotPasswordPage);
