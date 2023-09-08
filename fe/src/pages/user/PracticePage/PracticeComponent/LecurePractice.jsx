import React, { memo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Row, Col, Menu, notification, Spin } from 'antd';
import TitleMenu from './TitleMenu';
import Lecture from 'components/Lecture/Lecture';
import request from 'utils/http';

const LecturePractice = () => {
    /// need to refactor this
    ///
    const CHOOSE_ONE = 'single_choice';
    const FILL = 'text_input';
    const CHOOSE_MULTI = 'multiple_choice';
    const [activeOption, setActiveOption] = useState(-1);
    const [selectionAnswer, setSelectionAnswer] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const lessonRender = (question) => {
        switch (question.answer_type) {
            case CHOOSE_ONE:
                return (
                    <>
                        <Row className={styles.question}>
                            <h1>{question.question_content}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer}>
                                {question.answer_content.map((item, idx) => (
                                    <Row
                                        key={idx}
                                        className={clsx([
                                            styles.itemOption,
                                            {
                                                [styles.itemOptionActive]: activeOption === idx,
                                            },
                                        ])}
                                    >
                                        {item}
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </>
                );
            case FILL:
                return (
                    <>
                        <Row className={styles.question}>
                            <h1>{question.question_content}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer} style={{ marginLeft: 0, marginTop: 70 }}>
                                <Row className={clsx(styles.itemFill)}>
                                    <Col>
                                        <input className={clsx(styles.inputText)} type="text" width={'auto'} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                );
            case CHOOSE_MULTI:
                return (
                    <>
                        <Row className={styles.question}>
                            <h1>{question.question_content}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer}>
                                {question.answer_content.map((item, idx) => (
                                    <Row
                                        key={idx}
                                        className={clsx([
                                            styles.itemOption,
                                            {
                                                [styles.itemOptionActive]: selectionAnswer.includes(idx),
                                            },
                                        ])}
                                    >
                                        {item}
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </>
                );
            default:
                break;
        }
    };
    const render = () => {
        if (lessonType === 'lecture') {
            return <Lecture data={lectureData} style={style} />;
        } else {
            return questionData.map((question, idx) => {
                return <div key={idx}>{lessonRender(question)}</div>;
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
            const response = await request.get('lessons/' + lessonId);
            const data = response.data.data;
            setLessonType(data.type);
            // console.log(data.lectures);
            console.log(lessonType);
            data.type === 'lecture' ? setLectureData(data) : setQuestions(data.questions);
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

    const onClick = (e) => {
        console.log('click ', e);
    };
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem(<TitleMenu title="Navigation One" />, 'sub1', null, [
            getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')]),
            getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')]),
        ]),
        getItem(<TitleMenu title="Navigation Two" />, 'sub2', null, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
        {
            type: 'divider',
        },
        getItem(<TitleMenu title="Navigation Three" />, 'sub4', null, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
    ];
    console.log(lectureData);
    if (questionData.length != 0 || lectureData.lectures.length != 0) {
        return (
            <>
                <div className={clsx(styles.content)}>
                    <Link to="/practice" className={styles.cta}>
                        <span className={styles.backButton}>Quay về</span>
                        <img width={15} src="/images/Back_arrow.svg" alt="back" />
                    </Link>
                    <Row>
                        <Col span={20}>{render()}</Col>
                        <Col span={4}>
                            <Menu
                                onClick={onClick}
                                style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                items={items}
                            />
                        </Col>
                    </Row>
                </div>
            </>
        );
    } else {
        return <Spin />;
    }
};

export default memo(LecturePractice);
