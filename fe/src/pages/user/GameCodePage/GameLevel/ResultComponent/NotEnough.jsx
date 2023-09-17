import { Row, Col, Progress, Space } from 'antd';
import styles from './style.module.scss';
import '../../customStyle.scss';
import React from 'react';
import clsx from 'clsx';

const NotEnough = ({ ...props }) => {
    return (
        <div className={styles.content}>
            <div className={styles.detailNotEnough}>Rất tiếc bạn chưa đủ điều kiện vượt màn</div>
            <Row className={styles.detailTarget}>
                <Col span={8}>
                    <div className={styles.imgTarget}></div>
                </Col>
                <Col span={16} className={styles.targetContent}>
                    Điều khiển Thánh Gióng di chuyển qua các mục tiêu
                </Col>
            </Row>
            <Row className={styles.detailTarget}>
                <Col span={8}>
                    <div className={styles.imgTreasure}></div>
                </Col>
                <Col span={16} className={styles.targetContent}>
                    Điều khiển Thánh Gióng đến kho báu
                </Col>
            </Row>
        </div>
    );
};

export default NotEnough;
