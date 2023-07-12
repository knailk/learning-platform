import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';

const MissionBox = () => {
    return (
        <>
            <Row className={style.missionBoxWrapper}>
                <Col span={24}>
                    <Row>
                        <Col span={15}>
                            <h1>Nhiệm vụ hằng ngày</h1>
                        </Col>
                        <Col span={7}>
                            <h1 style={{ color: '#1cb0f6' }}>Xem tất cả</h1>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(MissionBox);
