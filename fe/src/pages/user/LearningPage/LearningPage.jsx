import clsx from 'clsx';
import React, { memo, useEffect, useState } from 'react';
import style from './style.module.scss';
import { Row, Col } from 'antd';
import LearningPath from './LearningPath';
import RankingBox from './RankingBox';
import MissionBox from './MissionBox';
const LearningPage = () => {
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState({});
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
                    console.log(finishState);
                    setCurrentChapter({
                        chapter_id: lesson.chapter_id,
                        lesson_id: lesson.id,
                    });
                    isSet = true;
                    return;
                }
                if (lesson.chapter_id === currentChapter.chapter_id) {
                    if (lesson.id === currentChapter.lesson_id) {
                        console.log(flag);
                        console.log(currentChapter);
                        flag = true;
                        setFinishState([...finishState, currentChapter]);
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
                if (json.data.length > 1) {
                    setCurrentChapter({
                        chapter_id: json.data[1].id,
                        lesson_id: json.data[1].lessons[0].id,
                    });
                }
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <div className={clsx(style.content)}>
            <Row className={style.wrapper}>
                <Col sm={24} lg={16} className={style.learningPathWrapper}>
                    {chapters.map(
                        (element) =>
                            // <LearningPath key={element.id} data={element} />
                            element.level != 0 && (
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
