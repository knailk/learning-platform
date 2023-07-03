import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
const PersionalInformation = () => {
    return (
        <>
            <Row style={{ width: '100%' }}>
                <Col span={6}>
                    <div className={style.avatarWrapper}>
                        <img alt="Minh Toàn" src="//simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
                    </div>
                </Col>
                <Col className={style.inforWrapper} span={14}>
                    <Row className={style.userName}>Minh Toàn</Row>
                    <Row className={style.userId}>UserId</Row>
                    <Row className={style.userFollow}>Following/Follower</Row>
                </Col>
                <Col span={4}>EDIT BUTTON</Col>
            </Row>
        </>
    );
};

export default memo(PersionalInformation);
