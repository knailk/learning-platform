import React, { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, notification } from 'antd';
import { faCakeCandles, faUserGroup, faClock } from '@fortawesome/free-solid-svg-icons';
import AvatarCpn from 'components/Avatar';
import StatisticalCpn from 'components/Statistical';
import request from 'utils/http';

const ModalDetailRanking = ({ userInfo, closeModal }) => {
    const [addFriend, setAddFriend] = useState(userInfo.isExist);
    const [addFriendText, setAddFriendText] = useState(addFriend ? 'Hủy Theo Dõi' : 'Theo Dõi');
    useEffect(() => {
        setAddFriendText(addFriend ? 'Hủy Theo Dõi' : 'Theo Dõi');
    }, [addFriend]);

    const handlerFollow = async () => {
        if (!addFriend) {
            try {
                await request.post('follows', { followed_id: userInfo.id });
                notification.success({ message: 'Đã theo dõi' });
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!', description: error.message });
            }
        } else {
            try {
                await request.delete('follows/' + userInfo.id);
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
                        <AvatarCpn src={userInfo.avatar} fullName={userInfo.name} size={100} />
                    </div>
                </Col>
                <Col className={styles.inforWrapper} xl={12} lg={12} md={16}>
                    <Row className={styles.titleProfile}>{userInfo.name}</Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        {userInfo.birth}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào {userInfo.start_date}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        {userInfo.follower} Người đang theo dõi
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
                        total={userInfo.total_lecture}
                        img="/images/learning.png"
                        height={30}
                    />
                </Col>
                <Col span={12}>
                    <StatisticalCpn
                        title="Bài tập"
                        total={userInfo.total_question}
                        img="/images/practice.png"
                        height={30}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <StatisticalCpn title="Tổng điểm" total={userInfo.score} img="/images/score.png" height={30} />
                </Col>
                <Col span={12}>
                    <StatisticalCpn title="Xếp hạng" total={userInfo.ranking} img="/images/ranking.png" height={30} />
                </Col>
            </Row>
            <div className={styles.closeButton} onClick={closeModal}>
                <div>Đóng</div>
            </div>
        </>
    );
};

export default memo(ModalDetailRanking);
