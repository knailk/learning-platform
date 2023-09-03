import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import request from 'utils/http';
import { Button, Card, Form, Input, Typography, notification } from 'antd';

import styles from './NewPassword.module.css';

const NewPasswordPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = async (formValues) => {
        const { confirmation_code, new_password } = formValues;
        try {
            const response = await request.post('auth/forgot-password/confirm', {
                email: 'tiendung371922asd',
                confirmation_code: confirmation_code,
                confirmation_password: new_password,
            });
            notification.success({ message: 'Thay đổi mật khẩu thành công' });
            if (response) navigate('/');
        } catch (error) {
            notification.error({ message: 'Thay đổi mật khẩu không thành công' });
        }
    };

    return (
        <>
            <Helmet>
                <title>Xác nhận đăng ký</title>
            </Helmet>
            <div className={styles.main}>
                <div className={styles['new-password-page']} style={{ paddingTop: '100px' }}>
                    <div style={{ padding: '32px', width: '32%' }}>
                        <Card className={styles['card']}>
                            {/* HEADER */}
                            <div className={styles['card__header']}>
                                <Typography.Title style={{ textAlign: 'center', fontSize: 18 }} level={5}>
                                    Quên mật khẩu
                                </Typography.Title>
                            </div>

                            <Form
                                className={styles['card__form']}
                                form={form}
                                layout="vertical"
                                autoComplete="off"
                                onFinish={handleSubmit}
                            >
                                <Form.Item name="confirmation_code" label="Mã xác nhận">
                                    <Input size="large" placeholder="Nhập mã xác nhận của bạn" />
                                </Form.Item>
                                <Form.Item name="new_password" label="Mật khẩu mới">
                                    <Input.Password size="large" placeholder="Mật khẩu mới" />
                                </Form.Item>
                                <Form.Item name="confirmation_password" label="Xác nhận mật khẩu">
                                    <Input.Password size="large" placeholder="Nhập mật khẩu" />
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

export default memo(NewPasswordPage);
