import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
import FriendBox from './FriendBox';

const LearningPage = () => {
    return (
        <div className={clsx(style.content)}>
            <Row className={style.wrapper}>
                <Col sm={24} lg={16} className={style.learningPathWrapper}>
                    <LearningPath />
                    <LearningPath />
                    <LearningPath />
                </Col>
                <Col lg={8} className={style.boxWrapper}>
                    <div className={style.fixedBox}>
                        <RankingBox />
                        <MissionBox />
                        <FriendBox />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default memo(LearningPage);
