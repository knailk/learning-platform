import React, { memo, useState, useEffect } from 'react';
import { Row, Col, Spin, notification } from 'antd';
import PersonalInformation from './PersonalInfomation';
import Statistical from './Statistical/Statistical';
import Friend from './Friend/Friend';
import FindFriend from './Friend/FindFriend';
import common_style from './style.module.scss';
import request from 'utils/http';

const Profile = () => {
    const [profile, setProfile] = useState(false);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await request.get('auth/me');
                setProfile(response.data.user);
            } catch (error) {
                notification.error({
                    message: 'Lỗi hệ thống!',
                    description: error,
                });
            }
        };

        fetchProfile();
    }, []);

    if (!profile) {
        return <Spin />;
    } else {
        return (
            <div className={common_style.content}>
                <Row style={{ width: '100%' }}>
                    <PersonalInformation profile={profile} />
                </Row>
                <Row>
                    <Col span={16}>
                        <Row>
                            <Statistical profile={profile} />
                        </Row>
                        <Row>
                            <FindFriend />
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Friend showTittle={true} />
                    </Col>
                </Row>
            </div>
        );
    }
};

export default memo(Profile);
