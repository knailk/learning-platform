import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Row, Col, Menu, notification, Spin } from 'antd';
import Lecture from 'components/Lecture/Lecture';
import request from 'utils/http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import CodeEditor from 'pages/user/LearningPage/CodeEditorComponent/CodeEditorIcon';
const LecturePractice = () => {
    /// need to refactor this
    ///
    const FILL = 'text_input';
    const [dataUserAnswer, setDataUserAnswer] = useState('');
    const lessonRender = (question, answer) => {
        if (question.answer_type === FILL) {
            return (
                <>
                    <Row className={styles.question}>
                        <h1>{question.question_content}</h1>
                    </Row>
                    <Row>
                        <Col className={styles.answer} style={{ marginLeft: 0, marginTop: 20 }}>
                            <Row className={clsx(styles.itemFill)}>
                                <Col>
                                    <input
                                        className={clsx(styles.inputText)}
                                        type="text"
                                        width={'auto'}
                                        value={answer[0]}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col className={styles.fillAnswer}>{question.answer_content[0]}</Col>
                    </Row>
                </>
            );
        } else {
            return (
                <>
                    <Row className={styles.question}>
                        <h1>{question.question_content}</h1>
                    </Row>
                    <Row>
                        <Col className={styles.answer}>
                            {question.answer_content.map((item, idx) => (
                                <Row key={idx}>
                                    <Col
                                        span={20}
                                        className={clsx([
                                            styles.itemOption,
                                            {
                                                [styles.itemOptionActive]: answer.includes(item),
                                            },
                                        ])}
                                    >
                                        {item}
                                    </Col>
                                    <Col className={styles.checkCorrect} span={4}>
                                        {question.score[idx] > 0 && (
                                            <img src="/images/check_correct.png" alt="check" visible={false} />
                                        )}
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </>
            );
        }
    };
    const render = () => {
        if (lessonType === 'lecture') {
            return <Lecture data={lectureData} style={style} />;
        } else {
            return questionData.map((question, idx) => {
                let answer = dataUserAnswer.find((o) => o.question_id === question.id);
                answer = answer ? answer.answer : [''];
                return <div key={idx}>{lessonRender(question, answer)}</div>;
            });
        }
    };
    ///
    ///
    const [lessonId, setLessonId] = useState(useParams().lesson_id);
    const [lectureData, setLectureData] = useState({ lectures: [] });
    const [questionData, setQuestions] = useState([]);
    const [lessonType, setLessonType] = useState('');
    let style = {
        padding: '30px 70px',
        marginBottom: '50px',
    };
    const getData = async () => {
        try {
            const responseLesson = await request.get('lessons/' + lessonId);
            const dataLesson = responseLesson.data.data;
            setLessonType(dataLesson.type);
            if (dataLesson.type === 'lecture') {
                setLectureData(dataLesson);
            } else {
                const quesionAnswer = await request.get('/lessons/answer/' + lessonId);
                setDataUserAnswer(quesionAnswer.data.data.question_answers);
                setQuestions(dataLesson.questions);
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
    }, [lessonId]);

    if (questionData.length != 0 || lectureData.lectures.length != 0) {
        return (
            <>
                <div className={clsx(styles.content)}>
                    <Link to="/practice" className={styles.cta}>
                        <span className={styles.backButton}>Quay về</span>
                        <img width={15} src="/images/Back_arrow.svg" alt="back" />
                    </Link>
                    <Row>
                        <Col span={24}>{render()}</Col>
                    </Row>
                    <div className={styles.codeEditor}>
                        <CodeEditor />
                    </div>
                </div>
            </>
        );
    } else {
        return <Spin />;
    }
};

export default memo(LecturePractice);
