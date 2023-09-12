import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTimer } from '../../../hooks/useTimer';
import Cookies from 'universal-cookie';
import request from 'utils/http';
import { Button, Card, Form, Input, Typography, notification } from 'antd';
import _ from 'lodash';

import styles from './ConfirmRegister.module.css';

const cookies = new Cookies();
const { Title, Text } = Typography;

const ConfirmRegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { minutes, seconds, isRunning, startTimer } = useTimer({ m: 1, s: 30 });
    const confirmationCode = Form.useWatch('confirmation_code', form);

    const handleSubmit = async (formValues) => {
        try {
            const response = await request.post('auth/register/confirm', {
                email: cookies.get('email'),
                confirmation_code: confirmationCode,
            });
            if (response) navigate('/');
        } catch (error) {
            notification({ message: 'Mã xác nhận không chính xác' });
        }
    };

    const handleReSendCode = useCallback(async () => {
        const response = await request.post('/auth/register/resend', {
            email: cookies.get('email'),
        });
        if (response) {
            notification.success({ message: 'Gửi lại mã xác nhận thành công' });
        }

        startTimer();
    }, []);

    return (
        <>
            <Helmet>
                <title>Xác nhận đăng ký</title>
            </Helmet>
            <div className={styles.main}>
                <div className={styles['confirm-register-page']} style={{ paddingTop: '100px' }}>
                    <Card className={styles['card']}>
                        <div className={styles['card__header']}>
                            <Title style={{ textAlign: 'center', fontSize: 18 }} level={5}>
                                Chúng tôi vừa gửi một mã xác nhận 6 kí tự đến @email
                            </Title>
                        </div>
                        <div>
                            <Text>
                                Bạn sẽ nhận được email từ chúng tôi có chứa mã xác minh gồm 6 chữ số. Nếu nó không có
                                trong hộp thư đến của bạn, vui lòng kiểm tra thư mục thư rác.
                            </Text>
                        </div>
                        <Form
                            style={{ marginTop: '20px' }}
                            className={styles['card__form']}
                            form={form}
                            // layout="vertical"
                            autoComplete="off"
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                name="confirmation_code"
                                rules={[{ required: true, message: 'Bạn phải nhập mã xác nhận!' }]}
                            >
                                <Input size="large" placeholder="Nhập mã xác nhận của bạn" />
                            </Form.Item>
                            <Form.Item noStyle>
                                <Button
                                    type="link"
                                    size="large"
                                    onClick={handleReSendCode}
                                    loading={isRunning}
                                    style={{
                                        color: 'black',
                                        fontWeight: 600,
                                        padding: 0,
                                        display: 'flex',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    Chưa nhận được mã,&nbsp;
                                    <span style={{ color: '#1890FF' }}>
                                        gửi lại mã {isRunning && `sau ${minutes * 60 + seconds} giây`}
                                    </span>
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    disabled={_.isEmpty(confirmationCode)}
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
                                    <b>Xác nhận</b>
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default memo(ConfirmRegisterPage);
