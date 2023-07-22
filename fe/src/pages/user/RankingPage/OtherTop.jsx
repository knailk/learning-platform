import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import clsx from 'clsx';

const OtherTop = ({ ...props }) => {
    return (
        <>
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
