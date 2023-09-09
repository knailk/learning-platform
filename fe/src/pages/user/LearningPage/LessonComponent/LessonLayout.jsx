import React, { memo, useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Col, Row, Carousel, Popconfirm, notification, Spin } from 'antd';
import Lecture from './Lecture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Total from './Total';
import CodeEditor from '../CodeEditorComponent/CodeEditorIcon';
import request from 'utils/http';

const LectureLayout = ({ ...props }) => {
    const [lengthSlide, setLengthSlide] = useState(0);
    const CHOOSE_ONE = 'single_choice';
    const FILL = 'text_input';
    const CHOOSE_MULTI = 'multiple_choice';
    const [widthStyle, setWidthStyle] = useState(0);
    const [activeOption, setActiveOption] = useState(-1);
    const [selectionAnswer, setSelectionAnswer] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);
    const [typeButtonNext, setTypeButtonNext] = useState(false);
    const [textInput, setTextInput] = useState('');
    const carousel = useRef();
    const [lecture, setLecture] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [enableButton, setEnableButton] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [totalScore, setTotalScore] = useState(0);
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const lessonId = props.data.id;
    const lessonType = props.data.type;
    const [currentQuestion, setCurrentQuestion] = useState('');
    const getData = async () => {
        try {
            const response = await request.get('lessons/' + lessonId);
            const data = response.data.data;
            console.log('data', data);
            lessonType === 'lecture' ? setLecture(data) : setQuestions(data.questions);
            setLengthSlide(lessonType === 'lecture' ? data.lectures.length : data.questions.length);
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

    const areEqual = (array1, array2) => {
        if (array1.length === array2.length) {
            return array1.every((element) => {
                if (array2.includes(element)) {
                    return true;
                }
                return false;
            });
        }

        return false;
    };
    const handleSelection = (id) => {
        setSelectionAnswer((props) => (props.includes(id) ? props.filter((val) => val !== id) : [...props, id]));
    };
    const handleContinueButton = () => {
        setActiveOption(-1);
        setSelectionAnswer([]);
        setEnableButton(false);
        setShowCorrect(false);
        setShowInCorrect(false);
        setTypeButtonNext(false);
        setTextInput('');
        setSlideNumber(slideNumber + 1);
        if (slideNumber < lengthSlide - 1) {
            carousel.current.next();
            if (widthStyle < 700) {
                setWidthStyle(widthStyle + 700 / lengthSlide);
            }
        } else if (slideNumber === lengthSlide - 1) {
            carousel.current.next();
            setWidthStyle(700);
        }
    };
    const handleCheckButton = (isSkip = false) => {
        console.log(slideNumber);
        const currentQuestion = questions[slideNumber];
        let score = 0;
        let userAnswer = {};
        let isTrue = false;
        switch (currentQuestion.answer_type) {
            case CHOOSE_ONE:
                score = currentQuestion.score[activeOption];
                currentQuestion.score.forEach((element, idx) => {
                    if (element > 0) {
                        setCorrectAnswer(currentQuestion.answer_content[idx]);
                    }
                });
                if (score > 0 && !isSkip) {
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                    setTotalScore(totalScore + score);
                    setEnableButton(true);
                    isTrue = true;
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setTypeButtonNext(true);
                    setEnableButton(true);
                }
                userAnswer = {
                    question_id: currentQuestion.id,
                    score: isSkip ? 0 : score,
                    answer: [isSkip ? '' : currentQuestion.answer_content[activeOption]],
                    is_true: isTrue,
                };
                setQuestionAnswers([...questionAnswers, userAnswer]);
                break;
            case FILL:
                score = 0;
                if (textInput === currentQuestion.answer_content[0]) {
                    score = currentQuestion.score[0];
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                    setTotalScore(totalScore + score);
                    setEnableButton(true);
                    isTrue = true;
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setCorrectAnswer(currentQuestion.answer_content);
                    setTypeButtonNext(true);
                    setEnableButton(true);
                }
                userAnswer = {
                    question_id: currentQuestion.id,
                    score: score,
                    answer: [textInput],
                    is_true: isTrue,
                };
                setQuestionAnswers([...questionAnswers, userAnswer]);
                break;
            case CHOOSE_MULTI:
                let correctAnswers = [];
                let tempTotalScore = 0;
                let userMultiAnswer = [];
                currentQuestion.score.forEach((score, idx) => {
                    if (score > 0) {
                        correctAnswers.push(idx);
                        tempTotalScore += score;
                    }
                });
                let temp = '';
                correctAnswers.forEach((correctAnswer, idx) => {
                    if (idx === correctAnswers.length - 2) {
                        temp += (correctAnswer + 1).toString() + ' và ';
                    } else if (idx === correctAnswers.length - 1) {
                        temp += (correctAnswer + 1).toString();
                    } else {
                        temp += (correctAnswer + 1).toString() + ', ';
                    }
                });
                setCorrectAnswer(temp);
                if (areEqual(correctAnswers, selectionAnswer) && !isSkip) {
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                    setTotalScore(tempTotalScore + totalScore);
                    setEnableButton(true);
                    isTrue = true;
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setTypeButtonNext(true);
                    setEnableButton(true);
                }
                selectionAnswer.forEach((value) => {
                    userMultiAnswer.push(currentQuestion.answer_content[value].toString());
                });
                userAnswer = {
                    question_id: currentQuestion.id,
                    score: isSkip ? 0 : tempTotalScore,
                    answer: isSkip ? [''] : userMultiAnswer,
                    is_true: isTrue,
                };
                setQuestionAnswers([...questionAnswers, userAnswer]);
                break;
            default:
                break;
        }
    };

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
                                        onClick={() => {
                                            setActiveOption(idx);
                                            setEnableButton(true);
                                        }}
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
                                        <input
                                            className={clsx(styles.inputText)}
                                            type="text"
                                            width={'auto'}
                                            // ref={inputFill}
                                            onChange={(e) => {
                                                setTextInput(e.target.value);
                                                setEnableButton(true);
                                            }}
                                        />
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
                                        onClick={() => {
                                            handleSelection(idx);
                                            setEnableButton(true);
                                        }}
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
            return <Lecture data={lecture} />;
        } else {
            return questions.map((question, idx) => {
                return <div key={idx}>{lessonRender(question)}</div>;
            });
        }
    };
    const sendScore = async (lesson_id, score, question_answers) => {
        try {
            await request.post('lessons/answer', {
                lesson_id,
                score,
                question_answers,
            });
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Lỗi hệ thống',
            });
        }
    };
    console.log(questionAnswers);
    const confirm = (isCheck = false) => {
        if (isCheck) {
            props.nextState();
            //send score to server
            console.log(questionAnswers);
            sendScore(lessonId, totalScore, questionAnswers);
        }
        props.onClose();
    };
    if (questions.length != 0 || lecture.length != 0) {
        return (
            <>
                <div className={styles.lectureLayoutWrapper}>
                    {lessonType === 'practice' && (
                        <div className={styles.progressBarWrapper}>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressBarSuccess}
                                    style={{ width: widthStyle }}
                                    key={widthStyle}
                                ></div>
                            </div>
                        </div>
                    )}
                    <div
                        className={clsx(styles.lessonContent, {
                            [styles.lessonContentPractice]: lessonType === 'practice',
                        })}
                    >
                        <Col>
                            <Carousel
                                ref={carousel}
                                // afterChange={(currentSlide) => setSlideNumber(currentSlide)}
                                dots={false}
                            >
                                {render()}
                                <div>
                                    <Total data={totalScore} />
                                </div>
                            </Carousel>
                        </Col>
                    </div>
                    <div
                        className={clsx(styles.actionButtonWrappper, {
                            [styles.inCorrectBg]: showInCorrect,
                            [styles.correctBg]: showCorrect,
                        })}
                    >
                        {slideNumber !== lengthSlide && lessonType === 'practice' && (
                            <Row justify={'space-around'} align={'middle'} style={{ height: '100%' }}>
                                {!showCorrect && !showInCorrect && (
                                    <Col
                                        className={styles.actionButton}
                                        span={5}
                                        onClick={() => handleCheckButton(true)}
                                    >
                                        BỎ QUA
                                    </Col>
                                )}
                                {(showCorrect || showInCorrect) && (
                                    <Col span={5}>
                                        <Row>
                                            <Col className={clsx(styles.iconResult)}>
                                                {showInCorrect && <img src="images/close.svg" alt="close" />}
                                                {showCorrect && <img src="images/correct.svg" alt="correct" />}
                                            </Col>
                                            <Col
                                                style={{
                                                    marginLeft: 10,
                                                }}
                                            >
                                                <Row className={styles.resultTitle}>
                                                    {showInCorrect && 'Đáp án đúng'}
                                                    {showCorrect && 'Chính xác'}
                                                </Row>
                                                {showInCorrect && <Row style={{ fontSize: 16 }}>{correctAnswer}</Row>}
                                                <Row className={clsx(styles.reportButton)}>
                                                    <span
                                                        style={{
                                                            marginRight: 5,
                                                            marginTop: 2,
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faFlag} />
                                                    </span>
                                                    <span>Báo cáo</span>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                )}
                                <button
                                    className={clsx(
                                        styles.actionButton,
                                        {
                                            [styles.disableButton]: !enableButton,
                                        },
                                        {
                                            [styles.checkButton]: enableButton,
                                        },
                                        {
                                            [styles.correctAnswer]: showCorrect,
                                        },
                                        {
                                            [styles.inCorrectAnswer]: showInCorrect,
                                        },
                                    )}
                                    span={5}
                                    onClick={() => {
                                        if (typeButtonNext) {
                                            handleContinueButton();
                                        } else {
                                            handleCheckButton();
                                        }
                                    }}
                                    disabled={!enableButton}
                                >
                                    {typeButtonNext ? 'TIẾP TỤC' : 'KIỂM TRA'}
                                </button>
                            </Row>
                        )}

                        {(slideNumber === lengthSlide || lessonType === 'lecture') && (
                            <Row justify={'space-around'} align={'middle'} style={{ height: '100%' }}>
                                <button
                                    className={clsx(styles.actionButton, styles.inCorrectAnswer)}
                                    span={5}
                                    onClick={() => confirm(slideNumber === lengthSlide && lessonType === 'practice')}
                                >
                                    Đóng
                                </button>
                                {lessonType === 'lecture' && (
                                    <Col>
                                        <Popconfirm
                                            title="Xác nhận"
                                            description="Bạn đã học xong bài học này chưa"
                                            onConfirm={() => confirm(true)}
                                            okText="Xong rồi"
                                            cancelText="Vẫn chưa"
                                        >
                                            <button
                                                className={clsx(styles.actionButton, styles.correctAnswer)}
                                                span={5}
                                            >
                                                Hoàn thành
                                            </button>
                                        </Popconfirm>
                                    </Col>
                                )}
                            </Row>
                        )}
                    </div>
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

export default memo(LectureLayout);
