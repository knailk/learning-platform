import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
const PersionalInformation = () => {
    return (
        <>
            <Row style={{ width: '100%' }}>
                <Col span={4}>
                    <div className={style.avatarWrapper}>
                        <img alt="Minh Toàn" class="_33LFc fs-exclude" src="//simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
                    </div>
                </Col>
                <Col span={16}>INFOR</Col>
                <Col span={4}>EDIT BUTTON</Col>
            </Row>
        </>
    );
};

export default memo(PersionalInformation);
