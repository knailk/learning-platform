import React, { memo, useEffect } from 'react';
import style from './style.module.scss';
import request from 'utils/http';
import AvatarCpn from 'components/Avatar';
import { Row, Col, Modal, notification, Spin } from 'antd';
import { useState } from 'react';

const UserRanking = () => {
    const [user, setUser] = useState(() => {
        const savedItem = localStorage.getItem('user_info');
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || '';
    });

    useEffect(() => {
        const getCurrentUserRanking = async () => {
            try {
                const response = await request.get('users/' + user.id);
                setUser(response.data.data);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!', description: error.message });
            }
        };

        getCurrentUserRanking();
    }, []);

    if (!user) {
        return <Spin />;
    } else {
        return (
            <>
                <Row className={style.userRankingWrapper}>
                    <Col span={24}>
                        <Row justify={'space-around'}>
                            <Col span={16}>
                                <h1>Xếp hạng của tôi</h1>
                            </Col>
                            <Col span={8}>{/* <h1 className={style.viewDetail}>Xem kết quả</h1> */}</Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col span={2} style={{ margin: 'auto' }}>
                                <h1 style={{ fontSize: '26px' }}>{user.ranking}</h1>
                            </Col>
                            <Col className={style.avatar} span={4}>
                            <AvatarCpn src={user.avatar} fullName={user.name} size={60} />
                            </Col>
                            <Col span={14} className={style.information}>
                                <Row>
                                    <h1>{user.name}</h1>
                                </Row>
                            </Col>
                            <Col span={4} className={style.top}>
                                {user.score} điểm
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
};

export default memo(UserRanking);
