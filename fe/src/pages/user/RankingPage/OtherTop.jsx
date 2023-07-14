import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import clsx from 'clsx';

const OtherTop = ({...props}) => {
    return (
        <>
            {/* <Row>
                <Col span={24}>
                    <div className={style.otherTop}>
                        <Row style={{ width: '100%' }}>
                            <Col span={2} className={style.topWrapper}>
                                <img src="images/top.png" alt="top" />
                            </Col>
                            <Col span={22}>
                                <Row>
                                    <Col className={style.avatar}>
                                        <img src="images/avatar.png" alt="avatar" />
                                        <Row>
                                            <div className={style.information}>
                                                <span className={style.name}>Trần Minh Toàn</span>
                                                <span className={style.score}>1200 Điểm</span>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
             */}
            <Row className={clsx([style.userRankingWrapper, style.otherTop])}>
                <Col span={24}>
                    <Row>
                        <Col className={style.avatar} span={4}>
                            <img src={props.avatar} alt="avatar" />
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

export default memo(OtherTop);
