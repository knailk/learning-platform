import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';
import MissionItem from './MissionItem';

const MissionBox = () => {
    return (
        <>
            <Row className={style.missionBoxWrapper}>
                <Col span={24}>
                    <Row justify={'space-around'}>
                        <Col span={16}>
                            <h1>Nhiệm vụ hằng ngày</h1>
                        </Col>
                        <Col span={8}>
                            <h1 style={{ color: '#1cb0f6' }}>Xem tất cả</h1>
                        </Col>
                    </Row>
                    <MissionItem />
                    <MissionItem />
                    <MissionItem />
                </Col>
            </Row>
        </>
    );
};

export default memo(MissionBox);
