import React, { memo, useState } from 'react';
import style from './style.module.scss';
import { Row, Col, Modal } from 'antd';

const UserRanking = () => {
    return (
        <>
            <Row className={style.userRankingWrapper}>
                <Col span={24}>
                    <Row justify={'space-around'}>
                        <Col span={16}>
                            <h1>Xếp hạng của tôi</h1>
                        </Col>
                        <Col span={8}>{/* <h1 className={style.viewDetail}>Xem kết quả</h1> */}</Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Col span={2} style={{ margin: 'auto' }}>
                            <h1 style={{ fontSize: '26px' }}>1</h1>
                        </Col>
                        <Col className={style.avatar} span={4}>
                            <img src="images/avatar1.jpg" alt="avatar" />
                        </Col>
                        <Col span={14} className={style.information}>
                            <Row>
                                <h1>Trần Minh Toàn</h1>
                            </Row>
                        </Col>
                        <Col span={4} className={style.top}>
                            1000 điểm
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(UserRanking);
