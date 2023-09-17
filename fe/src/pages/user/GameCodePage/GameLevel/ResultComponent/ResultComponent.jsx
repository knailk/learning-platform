import { Row, Col, Progress, Space } from 'antd';
import styles from './style.module.scss';
import '../../customStyle.scss';
import React from 'react';
import clsx from 'clsx';

const ResultComponent = ({ ...props }) => {
    return (
        <div className={styles.content}>
            <div className={styles.detail}>Chúc mừng bạn đã hoàn thành màn {props.mapLevel}</div>
            <Row className={styles.scoreWrapper}>
                <Col span={4}></Col>
                <Col span={2} className={styles.number}>
                    {props.exp}
                </Col>
                <Col span={8} className={clsx([styles.detailNumber, styles.detailExp])}>
                    <div>KN nhận được - CẤP ĐỘ {props.userLevel}</div>
                    <div className={styles.progressBarWrapper}>
                        <Space direction="vertical">
                            <Progress
                                percent={props.progress}
                                size={[190, 11]}
                                showInfo={false}
                                strokeColor={'#a6d558'}
                                trailColor={'#282116'}
                            />
                        </Space>
                    </div>
                </Col>
                <Col span={4}></Col>
                <Col span={2} className={styles.number}>
                    {props.score}
                </Col>
                <Col span={4} className={clsx([styles.detailNumber, styles.detailScore])}>
                    Điểm
                </Col>
            </Row>
        </div>
    );
};
export default ResultComponent;
