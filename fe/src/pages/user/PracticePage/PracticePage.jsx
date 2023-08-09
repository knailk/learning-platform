import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
import RankingBox from '../LearningPage/RankingBox';
import MissionBox from '../LearningPage/MissionBox';
const PracticePage = () => {
    return (
        <div className={clsx(styles.content)}>
            <Row className={styles.wrapper}>
                <Col sm={24} lg={16} className={styles.learningPathWrapper}>
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
                        </Col>
                    </Row>
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
                <Col lg={8} className={styles.boxWrapper}>
                    <div className={styles.fixedBox}>
                        <RankingBox />
                        <MissionBox />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default memo(PracticePage);
