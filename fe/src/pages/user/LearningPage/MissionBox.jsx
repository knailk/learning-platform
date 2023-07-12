import { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';

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
                    <Row className={style.missionItem}>
                        <Col span={4}>
                            <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/39f13d2de304cad2ac2f88b31a7e2ff4.svg" />
                        </Col>
                        <Col span={20}>
                            <Row>
                                <h1>Nhiệm vụ 1</h1>
                            </Row>
                            <Row >
                                <Col span={16}>
                                    <div className={style.progressBar}></div>
                                </Col>
                                <Col span={8}>
                                    <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/ca23da57929a3144934ee0571a2f44e9.svg" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(MissionBox);
