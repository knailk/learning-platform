import React, { memo, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'antd';
import { faCakeCandles, faUser, faUserGroup, faClock } from '@fortawesome/free-solid-svg-icons';
import { FRIEND_TYPE } from 'utils/constant';
import AvatarCpn from 'components/Avatar';
import StatiscalCpn from 'components/Statistical';

const ModalDetailRanking = ({ userInfor, closeModal }) => {
    const [addFriend, setAddFriend] = useState(
        userInfor.friend_type === FRIEND_TYPE.FRIEND || userInfor.friend_type === FRIEND_TYPE.SEND_REQUEST,
    );
    const [addFriendText, setAddFriendText] = useState();
    useEffect(() => {
        setAddFriendText(() => {
            if (userInfor.friend_type === FRIEND_TYPE.FRIEND) {
                return 'Bạn bè';
            } else if (userInfor.friend_type === FRIEND_TYPE.NOT_FRIEND) {
                return 'Thêm bạn';
            } else {
                return 'Đang chờ';
            }
        });
    }, [userInfor.friend_type]);
    return (
        <>
            <div className={styles.modalTitle}>Thông tin cá nhân</div>

            <Row className={styles.personalInformationWrapper}>
                <Col xl={6} lg={8} md={8}>
                    <div className={styles.avatarWrapper}>
                        <AvatarCpn src={userInfor.avatar} fullName={userInfor.name} size={100} />
                    </div>
                </Col>
                <Col className={styles.inforWrapper} xl={12} lg={12} md={16}>
                    <Row className={styles.titleProfile}>{userInfor.name}</Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        {userInfor.birth}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào {userInfor.start_date}
                    </Row>
                    <Row className={styles.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        {userInfor.follower} Người đang theo dõi
                    </Row>
                </Col>
                <Col xl={6} lg={4} md={24}>
                    <div
                        className={styles.addButton}
                        onClick={() => {
                            setAddFriend(true);
                            setAddFriendText('Đang chờ');
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
                        <span className={styles.iconFriend}>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginBottom: 10 }}>
                <Col span={12}>
                    <StatiscalCpn
                        title="Bài học"
                        total={userInfor.total_lecture}
                        img="/images/learning.png"
                        height={30}
                    />
                </Col>
                <Col span={12}>
                    <StatiscalCpn
                        title="Bài tập"
                        total={userInfor.total_queston}
                        img="/images/practice.png"
                        height={30}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <StatiscalCpn title="Tổng điểm" total={userInfor.score} img="/images/score.png" height={30} />
                </Col>
                <Col span={12}>
                    <StatiscalCpn title="Xếp hạng" total={userInfor.ranking} img="/images/ranking.png" height={30} />
                </Col>
            </Row>
            <div className={styles.closeButton} onClick={closeModal}>
                <div>Đóng</div>
            </div>
        </>
    );
};

export default memo(ModalDetailRanking);
