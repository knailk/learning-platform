import React, { memo, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, notification } from 'antd';
import { faCakeCandles, faUserGroup, faClock } from '@fortawesome/free-solid-svg-icons';
import AvatarCpn from 'components/Avatar';
import StatisticalCpn from 'components/Statistical';
import request from 'utils/http';
import { ProfileContext } from 'pages/user/ProfilePage/ProfilePage';

const ModalUserInfo = ({ userInfo, closeModal }) => {
    const [addFriend, setAddFriend] = useState(userInfo.followed);
    const [addFriendText, setAddFriendText] = useState(addFriend ? 'Hủy Theo Dõi' : 'Theo Dõi');
    const [fetchUser, setFetchUser] = useState(userInfo);
    const setIsAdd = useContext(ProfileContext);
    useEffect(() => {
        setAddFriendText(addFriend ? 'Hủy Theo Dõi' : 'Theo Dõi');
        try {
            setIsAdd(addFriend);
        } catch (error) {}
    }, [addFriend]);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const res = await request.get('users/' + userInfo.id);
                setFetchUser(res.data.data);
                setAddFriend(res.data.data.followed);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!', description: error.message });
            }
        };

        getUserInfo();
    }, []);

    const handlerFollow = async () => {
        if (!addFriend) {
            try {
                await request.post('follows', { followed_id: fetchUser.id });
                notification.success({ message: 'Đã theo dõi' });
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!', description: error.message });
            }
        } else {
            try {
                await request.delete('follows/' + fetchUser.id);
                notification.success({ message: 'Hủy theo dõi thành công' });
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!', description: error.message });
            }
        }

        setAddFriend(!addFriend);
    };

    return (
        <>
            <div className={styles.modalTitle}>Thông tin cá nhân</div>

            <Row className={styles.personalInformationWrapper}>
                <Col xl={6} lg={8} md={8}>
                    <div className={styles.avatarWrapper}>
                        <AvatarCpn src={fetchUser.avatar} fullName={fetchUser.name} size={100} />
                    </div>
                </Col>
                <Col className={styles.inforWrapper} xl={12} lg={12} md={16}>
                    <Row className={styles.titleProfile}>{fetchUser.name}</Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        {fetchUser.birth}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào {fetchUser.start_date}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        {fetchUser.follower} Người đang theo dõi
                    </Row>
                </Col>
                <Col xl={6} lg={4} md={24}>
                    <div
                        className={styles.addButton}
                        onClick={() => {
                            handlerFollow();
                        }}
                    >
                        <div
                            className={clsx(styles.plus, {
                                [styles.tick]: addFriend,
                            })}
                        ></div>
                        <div className={styles.text}>
                            <span>{addFriendText}</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
                <Col span={12}>
                    <StatisticalCpn
                        title="Bài học"
                        total={fetchUser.total_lecture}
                        img="/images/learning.png"
                        height={30}
                    />
                </Col>
                <Col span={12}>
                    <StatisticalCpn
                        title="Bài tập"
                        total={fetchUser.total_question}
                        img="/images/practice.png"
                        height={30}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <StatisticalCpn title="Tổng điểm" total={fetchUser.score} img="/images/score.png" height={30} />
                </Col>
                <Col span={12}>
                    <StatisticalCpn title="Xếp hạng" total={fetchUser.ranking} img="/images/ranking.png" height={30} />
                </Col>
            </Row>
            <div className={styles.closeButton} onClick={closeModal}>
                <div>Đóng</div>
            </div>
        </>
    );
};

export default memo(ModalUserInfo);
