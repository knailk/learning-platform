import React, { memo } from 'react';
import { Row, Col } from 'antd';
import style from './style.module.scss';

const MissionItem = () => {
    return (
        <>
            <Row className={style.missionItem}>
                <Col span={6} className={style.missionIcon}>
                    <img alt="123" src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/39f13d2de304cad2ac2f88b31a7e2ff4.svg" />
                </Col>
                <Col span={18}>
                    <Row>
                        <h1>Nhiệm vụ 1</h1>
                    </Row>
                    <Row className={style.progressBarWrapper}>
                        <Col span={18}>
                            <div className={style.progressBar}>0/10</div>
                        </Col>
                        <Col span={6} style={{ paddingLeft: 2 }}>
                            <img alt="12" src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/ca23da57929a3144934ee0571a2f44e9.svg" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(MissionItem);
