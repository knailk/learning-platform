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
    const [follows, setFollows] = useState(false);
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

        const fetchFollow = async () => {
            try {
                const response = await request.get('follows');
                setFollows(response.data.data);
            } catch (error) {
                notification.error({
                    message: 'Lỗi hệ thống!',
                    description: error,
                });
            }
        };

        fetchProfile();
        fetchFollow();
    }, []);

    if (profile && follows) {
        return (
            <div className={common_style.content}>
                <Row style={{ width: '100%' }}>
                    <PersonalInformation profile={profile} follows={follows}/>
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
                        <Friend showTittle={true} follows={follows} />
                    </Col>
                </Row>
            </div>
        );
    } else {
        return <Spin />;
    }
};

export default memo(Profile);
