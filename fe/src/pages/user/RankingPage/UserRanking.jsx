import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';

const UserRanking = () => {
    return (
        <>
            <Row className={style.userRankingWrapper}>
                <Col span={24}>
                    <Row justify={'space-around'}>
                        <Col span={16}>
                            <h1>Xếp hạng của tôi</h1>
                        </Col>
                        <Col span={8}>
                            <h1 style={{ color: '#1cb0f6', width: '100%', textAlign: 'right' }}>Xem tất cả</h1>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '10px' }}>
                        <Col className={style.avatar} span={4}>
                            <img src="images/avatar1.jpg" alt="avatar" />
                        </Col>
                        <Col span={16} className={style.information}>
                            <Row>
                                <h1>Trần Minh Toàn</h1>
                            </Row>
                            <Row>1000 Điểm</Row>
                        </Col>
                        <Col span={4} className={style.top}>
                            TOP 100
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default memo(UserRanking);
