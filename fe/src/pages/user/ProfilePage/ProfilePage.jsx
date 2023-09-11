import React, { memo, useState, useEffect, createContext } from 'react';
import { Row, Col, Spin, notification } from 'antd';
import { Helmet } from 'react-helmet';
import PersonalInformation from './PersonalInfomation';
import Statistical from './Statistical/Statistical';
import Friend from './Friend/Friend';
import FindFriend from './Friend/FindFriend';
import common_style from './style.module.scss';
import request from 'utils/http';
export const ProfileContext = createContext();

const Profile = () => {
    const [profile, setProfile] = useState(false);
    const [follows, setFollows] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

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
    }, [isAdd]);

    if (profile && follows) {
        return (
            <>
                <Helmet>
                    <title>Trang cá nhân</title>
                </Helmet>
                <ProfileContext.Provider value={setIsAdd}>
                    <div className={common_style.content}>
                        <Row style={{ width: '100%' }}>
                            <PersonalInformation profile={profile} follows={follows} />
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
                </ProfileContext.Provider>
            </>
        );
    } else {
        return <Spin />;
    }
};

export default memo(Profile);
