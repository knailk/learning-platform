import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import LearningPath from './LearningPath';

const LearningPage = () => {
    return (
        <div className={clsx(style.content)}>
            <Row className={style.wrapper}>
                <Col span={16} className={style.learningPathWrapper}>
                    <LearningPath />
                    <LearningPath />
                    <LearningPath />
                </Col>
                <Col span={8}>Temp</Col>
            </Row>
        </div>
    );
};

export default memo(LearningPage);
