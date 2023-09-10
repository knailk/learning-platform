import React, { memo } from 'react';
import style from './Statistical.module.scss';
import { Row, Col } from 'antd';
import common_style from '../style.module.scss';

const Statistical = (props) => {
    const { profile } = props;
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
                                    <img
                                        alt="learning"
                                        src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/39f13d2de304cad2ac2f88b31a7e2ff4.svg"
                                    />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Bài học: {profile.total_lecture}</h1>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} lg={12}>
                        <div className={style.detail}>
                            <Row>
                                <Col span={4} className={style.imgDetail}>
                                    <img
                                        alt=""
                                        src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/216ddc11afcbb98f44e53d565ccf479e.svg"
                                    />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Bài tập: {profile.total_question}</h1>
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
                                    <img
                                        alt="score"
                                        src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg"
                                    />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Số điểm: {profile.score}</h1>
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
                                    <img
                                        alt="rank"
                                        src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/192181672ada150becd83a74a4266ae9.svg"
                                    />
                                </Col>
                                <Col span={18}>
                                    <Row style={{ paddingTop: '5px' }}>
                                        <h1>Xếp hạng: {profile.ranking}</h1>
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
