import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Row, Col, notification } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
import request from 'utils/http';

const LearningPage = () => {
    const dataNullLesson = '00000000-0000-0000-0000-000000000000';
    const dataCurrentChapter = localStorage.getItem('user_info');
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(
        JSON.parse(dataCurrentChapter) ? JSON.parse(dataCurrentChapter).current_lesson : {},
    );
    const [finishState, setFinishState] = useState([]);
    const nextState = () => {
        let flag = false;
        let isSet = false;
        chapters.forEach((chapter) => {
            if (isSet) {
                return;
            }
            chapter.lessons.forEach((lesson) => {
                if (isSet) {
                    return;
                }
                if (flag === true) {
                    let dataSave = {
                        chapter: {
                            chapter_id: chapter.id,
                            chapter_name: chapter.name,
                            chapter_level: chapter.level,
                        },
                        lesson: {
                            lesson_id: lesson.id,
                            lesson_name: lesson.name,
                            lesson_type: lesson.type,
                        },
                    };
                    setCurrentChapter(dataSave);
                    localStorage.setItem('current_chapter', JSON.stringify(dataSave));
                    isSet = true;
                    return;
                }
                if (lesson.chapter_id === currentChapter.chapter.chapter_id) {
                    if (lesson.id === currentChapter.lesson.lesson_id) {
                        flag = true;
                        let dataSave = [...finishState, currentChapter];
                        setFinishState(dataSave);
                        localStorage.setItem('finish_state', JSON.stringify(dataSave));
                    }
                } else {
                    return;
                }
            });
        });
    };
    const getData = async () => {
        try {
            const response = await request.get('chapters');
            const data = response.data.data;
            setChapters(data);
            if (currentChapter === dataNullLesson) {
                setCurrentChapter(data[1].lessons[0].id);
            } else {
                let isSet = false;
                data.forEach((chapter) => {
                    if (isSet) {
                        return;
                    }
                    chapter.lessons.forEach((lesson) => {
                        if (isSet) {
                            return;
                        }
                        if (lesson.id === currentChapter) {
                            isSet = true;
                        } else {
                            finishState.push(lesson.id);
                        }
                    });
                });
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
                                    currentChapter={currentChapter}
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
    );
};

export default memo(LearningPage);
