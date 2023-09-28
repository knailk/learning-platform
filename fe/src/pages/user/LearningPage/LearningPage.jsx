import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Row, Col, notification } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
import request from 'utils/http';
import { Helmet } from 'react-helmet';

const LearningPage = () => {
    const dataNullLesson = '00000000-0000-0000-0000-000000000000';
    const [chapters, setChapters] = useState([]);
    const [currentLesson, setCurrentLesson] = useState('');
    const [finishState, setFinishState] = useState([]);
    const nextState = () => {
        let flag = false;
        let isSet = false;
        for (let chapter of chapters) {
            if (isSet) {
                break;
            }
            for (const lesson of chapter.lessons) {
                if (isSet) {
                    break;
                }
                if (flag === true) {
                    let dataSave = lesson.id;
                    setCurrentLesson(dataSave);
                    isSet = true;
                    break;
                }
                if (lesson.id === currentLesson) {
                    flag = true;
                    let dataSave = [...finishState, currentLesson];
                    setFinishState(dataSave);
                }
            }
        }
    };
    const getData = async () => {
        try {
            const responseChapter = await request.get('chapters');
            const dataChapter = responseChapter.data.data;
            const responseUser = await request.get('/auth/me');
            const dataCurrentLesson = responseUser.data.user.current_lesson;
            setChapters(dataChapter);
            if (dataCurrentLesson === dataNullLesson) {
                setCurrentLesson(dataChapter[1].lessons[0].id);
            } else {
                let isSet = false;
                let flag = false;
                for (let chapter of dataChapter) {
                    if (flag && isSet) {
                        break;
                    }
                    for (const lesson of chapter.lessons) {
                        if (flag) {
                            setCurrentLesson(lesson.id);
                            isSet = true;
                            break;
                        }
                        finishState.push(lesson.id);
                        if (lesson.id === dataCurrentLesson) {
                            flag = true;
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Lỗi lấy dữ liệu',
            });
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Helmet>
                <title>Học tập</title>
            </Helmet>
            <div className={clsx(style.content)}>
                <Row className={style.wrapper}>
                    <Col sm={24} lg={16} className={style.learningPathWrapper}>
                        {chapters.map(
                            (element) =>
                                // <LearningPath key={element.id} data={element} />
                                element.level !== 0 && (
                                    <LearningPath
                                        key={element.id}
                                        data={element}
                                        currentLesson={currentLesson}
                                        finishState={finishState}
                                        nextState={nextState}
                                    />
                                ),
                        )}
                    </Col>
                    <Col lg={8} className={style.boxWrapper}>
                        <div className={style.fixedBox}>
                            <RankingBox />
                            <MissionBox />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default memo(LearningPage);
