import style from './PersionalInfomation.module.scss';
import './style.scss';
import { memo } from 'react';
import { Row, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faUser, faUserPen, faPen, faUserGroup, faClock } from '@fortawesome/free-solid-svg-icons';
const PersionalInformation = () => {
    return (
        <>
            <Row className={style.personalInformationWrapper}>
                <Col span={6}>
                    <div className={style.avatarWrapper}>
                        <div className={style.editAvatarButton}>
                            <FontAwesomeIcon icon={faPen} />
                        </div>
                        <img alt="Minh Toàn" src="//simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
                    </div>
                </Col>
                <Col className={style.inforWrapper} span={14}>
                    <Row className="titleProfile">Minh Toàn</Row>
                    <Row className="userInfo">
                        <span>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        UserId
                    </Row>
                    <Row className="userInfo">
                        <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                        </span>
                        10/08/2001
                    </Row>
                    <Row className="userInfo">
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                        </span>
                        Đã tham gia vào Tháng Năm 2023
                    </Row>
                    <Row className="userInfo">
                        <span>
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                        </span>
                        Đang theo dõi 0 / 0 Người đang theo dõi
                    </Row>
                </Col>
                <Col span={4}>
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
