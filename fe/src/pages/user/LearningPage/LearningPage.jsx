import clsx from 'clsx';
import { memo } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
import { LESSON_TYPE, LESSON_STATUS } from '../../../utils/constant';

const LearningPage = () => {
    const lesson_data = [
        {
            id: 1,
            level: 1,
            name: 'Giới thiệu về nội dung quá trình học và ngôn ngữ sử dụng',
            lesson: [
                { position: 1, status: LESSON_STATUS.FINISHED, type: LESSON_TYPE.LEARNING },
                { position: 2, status: LESSON_STATUS.FINISHED, type: LESSON_TYPE.LEARNING },
                { position: 3, status: LESSON_STATUS.FINISHED, type: LESSON_TYPE.PRACTICE },
                { position: 4, status: LESSON_STATUS.CURRENT, type: LESSON_TYPE.PRACTICE },
                { position: 5, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 6, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 7, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
            ],
        },
        {
            id: 2,
            level: 2,
            name: 'Tính toán và biến trong lập trình',
            lesson: [
                { position: 1, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 2, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 3, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 4, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 5, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 6, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 7, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
            ],
        },
        {
            id: 3,
            level: 3,
            name: 'Chuỗi, mảng, tuble và map',
            lesson: [
                { position: 1, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 2, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 3, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 4, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 5, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 6, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 7, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
            ],
        },
        {
            id: 4,
            level: 4,
            name: 'Đặt câu hỏi với if và else',
            lesson: [
                { position: 1, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 2, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 3, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 4, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 5, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.LEARNING },
                { position: 6, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
                { position: 7, status: LESSON_STATUS.DISABLED, type: LESSON_TYPE.PRACTICE },
            ],
        },
    ];
    return (
        <div className={clsx(style.content)}>
            <Row className={style.wrapper}>
                <Col sm={24} lg={16} className={style.learningPathWrapper}>
                    {lesson_data.map((element) => (
                        <LearningPath key={element.id} data={element} />
                    ))}
                </Col>
                <Col lg={8} className={style.boxWrapper}>
                    <div className={style.fixedBox}>
                        <RankingBox />
                        <MissionBox />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default memo(LearningPage);
