import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
const LearningMenu = () => {
    const finisheState = JSON.parse(localStorage.getItem('finish_state'));
    const handleItemSelected = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        console.log(key);
    };
    const getItem = (label, key, icon, children, type) => {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    };
    const items = [
        getItem('Danh sách các chapter đã học', 'sub1', <FontAwesomeIcon icon={faBook} />, [
            getItem('Chapter 1: Tính toán và biến trong lập trình', '1'),
            getItem('Chapter 2: Chuỗi, mảng, tuble và map', '2'),
            getItem('Chapter 3: Vẽ vời cùng với rùa', '3'),
        ]),
    ];
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <h1 className={styles.contentTitle}>Góc học tập</h1>
                </Row>
                <Row className={styles.contentBox}>
                    <Col style={{ marginRight: 20 }}>
                        <img src="images/learning.png" alt="game" width={60} />
                    </Col>
                    <Col span={20}>
                        <Row>
                            <h1 style={{ marginBottom: 10, fontSize: 17 }}>Ôn lại các bài học cũ</h1>
                        </Row>
                        <Row>Đừng quên mỗi ngày bạn nên ôn lại các bài học cũ, củng cố lại kiến thức</Row>
                    </Col>
                </Row>
                <Menu mode="inline" items={items} onSelect={handleItemSelected} className={styles.menu}></Menu>
            </Col>
        </Row>
    );
};

export default memo(LearningMenu);
