import style from './PersionalInfomation.module.scss';
import common_style from './style.module.scss';
import { memo } from 'react';
import { Row, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faUser, faUserPen, faPen, faUserGroup, faClock } from '@fortawesome/free-solid-svg-icons';
const PersionalInformation = () => {
    return (
        <>
            <Row className={style.personalInformationWrapper}>
                <Col xl={6} lg={8} md={8}>
                    <div className={style.avatarWrapper}>
                        <div className={style.editAvatarButton}>
                            <FontAwesomeIcon icon={faPen} />
                        </div>
                        <img alt="Minh Toàn" src="//simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
                    </div>
                </Col>
                <Col className={style.inforWrapper} xl={14} lg={12} md={16}>
                    <Row className={common_style.titleProfile}>Minh Toàn</Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        UserId
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        10/08/2001
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào Tháng Năm 2023
                    </Row>
                    <Row className={common_style.userInfo}>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        Đang theo dõi 0 / 0 Người đang theo dõi
                    </Row>
                </Col>
                <Col xl={4} lg={4} md={24}>
                    <Button className={style.editButton}>
                        <span>
                            <FontAwesomeIcon icon={faUserPen} />
                        </span>
                        Edit Profile
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default memo(PersionalInformation);
