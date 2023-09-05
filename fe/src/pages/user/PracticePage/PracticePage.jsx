import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
import RankingBox from '../LearningPage/RankingBox';
import MissionBox from '../LearningPage/MissionBox';
import LearningMenu from './LearningMenu';
import PracticeMenu from './PracticeMenu';
const PracticePage = () => {
    return (
        <div className={clsx(styles.content)}>
            <Row className={styles.wrapper}>
                <Col sm={24} lg={16} className={styles.learningPathWrapper}>
                    <LearningMenu />
                    <PracticeMenu />
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
