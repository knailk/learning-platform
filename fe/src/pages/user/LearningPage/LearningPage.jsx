import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
const LearningPage = () => {
    const dataCurrentChapter = localStorage.getItem('current_chapter');
    const dataFinishState = localStorage.getItem('finish_state');
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(
        JSON.parse(dataCurrentChapter) ? JSON.parse(dataCurrentChapter) : {},
    );
    const [finishState, setFinishState] = useState(JSON.parse(dataFinishState) ? JSON.parse(dataFinishState) : []);
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
    useEffect(() => {
        fetch('http://ec2-3-0-139-245.ap-southeast-1.compute.amazonaws.com:8080/v1/chapters')
            .then((res) => res.json())
            .then((json) => {
                setChapters(json.data);
                console.log('123', currentChapter);
                if (json.data.length > 1 && !currentChapter.hasOwnProperty('lesson')) {
                    setCurrentChapter({
                        chapter: {
                            chapter_id: json.data[1].id,
                            chapter_name: json.data[1].name,
                            chapter_level: json.data[1].level,
                        },
                        lesson: {
                            lesson_id: json.data[1].lessons[0].id,
                            lesson_name: json.data[1].lessons[0].name,
                            lesson_type: json.data[1].lessons[0].type,
                        },
                    });
                }
            })
            .catch((error) => console.error(error));
    }, [currentChapter]);
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
