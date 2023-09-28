import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
import RankingBox from '../LearningPage/RankingBox';
import MissionBox from '../LearningPage/MissionBox';
import LearningMenu from './LearningMenu';
import { Helmet } from 'react-helmet';
const PracticePage = () => {
    return (
        <>
            <Helmet>
                <title>Luyện tập</title>
            </Helmet>
            <div className={clsx(styles.content)}>
                <Row className={styles.wrapper}>
                    <Col sm={24} lg={16} className={styles.learningPathWrapper}>
                        <LearningMenu />
                    </Col>
                    <Col lg={8} className={styles.boxWrapper}>
                        <div className={styles.fixedBox}>
                            <RankingBox />
                            <MissionBox />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default memo(PracticePage);
