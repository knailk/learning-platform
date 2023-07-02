import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';

import PersionalInfomation from './PersionalInfomation';
const Profile = () => {
    return (
        <div className={clsx(style.content)}>
            <Row style={{ width: '100%' }}>
                <PersionalInfomation />
            </Row>
            <Row>
                <Col>
                    <Row>Thong ke</Row>
                    <Row>Thanh tich</Row>
                </Col>
                <Col>Ban be</Col>
            </Row>
        </div>
    );
};

export default memo(Profile);
