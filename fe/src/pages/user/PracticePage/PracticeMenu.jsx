import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
const PracticeMenu = () => {
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
        getItem('Danh sách các bài tập đã làm', 'sub1', <FontAwesomeIcon icon={faBook} />, [
            getItem('Chapter 1: Tính toán và biến trong lập trình', '1'),
            getItem('Chapter 2: Chuỗi, mảng, tuble và map', '2'),
            getItem('Chapter 3: Vẽ vời cùng với rùa', '3'),
        ]),
    ];
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={24}>
                        <Row>
                            <h1 className={styles.contentTitle}>Góc luyện tập</h1>
                        </Row>
                        <Row className={styles.contentBox}>
                            <Col style={{ marginRight: 20 }}>
                                <img src="images/exercise.png" alt="game" width={60} />
                            </Col>
                            <Col span={20}>
                                <Row>
                                    <h1 style={{ marginBottom: 10, fontSize: 17 }}>Xem lại các bài tập đã làm</h1>
                                </Row>
                                <Row>Hãy xem lại các bài tập đã làm để nhớ lâu hơn nhé</Row>
                            </Col>
                        </Row>
                        <Menu mode="inline" items={items} onSelect={handleItemSelected} className={styles.menu}></Menu>
                        <Row className={styles.contentBox}>
                            <Col style={{ marginRight: 20 }}>
                                <img src="images/game_practice.png" alt="game" width={60} />
                            </Col>
                            <Col span={20}>
                                <Row>
                                    <h1 style={{ marginBottom: 10, fontSize: 17 }}>Trò chơi</h1>
                                </Row>
                                <Row>Bạn có thể chơi thêm nhiều trò chơi khác với những bài học mà bạn đã học</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default memo(PracticeMenu);
