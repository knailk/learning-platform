import React, { memo } from 'react';
import style from './Statistical.module.scss';
import { Row, Col } from 'antd';
import common_style from '../style.module.scss';

const Statistical = () => {
    return (
        <>
            <div className={style.statisticalWrapper}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <span className={common_style.titleProfile}>Thống kê</span>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.detail}>
                            <Row>
                                <Col span={4} className={style.imgDetail}>
                                    <img alt="" src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Bài học</h1>
                                    </Row>
                                    <Row>
                                        <h1>20</h1>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.detail}>
                            <Row>
                                <Col span={4} className={style.imgDetail}>
                                    <img alt="" src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Bài tập luyện:</h1>
                                    </Row>
                                    <Row>
                                        <h1>20</h1>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {/* Da hoan thanh 50 bai tap luyen */}
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.detail}>
                            <Row>
                                <Col span={4} className={style.imgDetail}>
                                    <img alt="" src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Số vàng:</h1>
                                    </Row>
                                    <Row>
                                        <h1>2000</h1>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {/* Da hoan thanh 20 bai hoc */}
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.detail}>
                            <Row>
                                <Col span={4} className={style.imgDetail}>
                                    <img alt="" src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg" />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Xếp hạng</h1>
                                    </Row>
                                    <Row>
                                        <h1>100</h1>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default memo(Statistical);
