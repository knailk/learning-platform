import React, { memo, useRef, useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Col, Row, Carousel } from "antd";
import Lecture from "./Lecture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const LectureLayout = ({ ...props }) => {
    const CHOOSE_ONE = "single_choice";
    const FILL = "text_input";
    const CHOOSE_MULTI = "multiple_choice";
    const [widthStyle, setWidthStyle] = useState(0);
    const [activeOption, setActiveOption] = useState(-1);
    const [selectionAnswer, setSelectionAnswer] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0);
    const [typeButtonNext, setTypeButtonNext] = useState(false);
    const [textInput, setTextInput] = useState("");
    const carousel = useRef();
    const [lesson, setLesson] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [enableButton, setEnableButton] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showInCorrect, setShowInCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState("");
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
        setSelectionAnswer((props) =>
            props.includes(id)
                ? props.filter((val) => val !== id)
                : [...props, id],
        );
    };
    const handleContinueButton = () => {
        setActiveOption(-1);
        setSelectionAnswer([]);
        setEnableButton(false);
        setShowCorrect(false);
        setShowInCorrect(false);
        setTypeButtonNext(false);
        setTextInput("");
        const lengthSlide =
            props.data.type === "lecture"
                ? lesson.lectures.length
                : questions.length;
        if (slideNumber < lengthSlide - 1) {
            carousel.current.next();
            if (widthStyle < 700) {
                setWidthStyle(widthStyle + 700 / lengthSlide);
            }
        }
    };
    const handleCheckButton = () => {
        const currentQuestion = questions[slideNumber];
        switch (currentQuestion.answer_type) {
            case CHOOSE_ONE:
                const score = currentQuestion.score[activeOption];
                currentQuestion.score.forEach((element, idx) => {
                    if (element > 0) {
                        setCorrectAnswer(currentQuestion.answer_content[idx]);
                    }
                });
                if (score > 0) {
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setTypeButtonNext(true);
                }
                break;
            case FILL:
                if (textInput == currentQuestion.answer_content) {
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setCorrectAnswer(currentQuestion.answer_content);
                    setTypeButtonNext(true);
                }
                break;
            case CHOOSE_MULTI:
                let correctAnswers = [];
                currentQuestion.score.forEach((score, idx) => {
                    if (score > 0) {
                        correctAnswers.push(idx);
                    }
                });
                let temp = "";
                correctAnswers.forEach((correctAnswer, idx) => {
                    if (idx === correctAnswers.length - 2) {
                        temp += (correctAnswer + 1).toString() + " và ";
                    } else if (idx === correctAnswers.length - 1) {
                        temp += (correctAnswer + 1).toString();
                    } else {
                        temp += (correctAnswer + 1).toString() + ", ";
                    }
                });
                setCorrectAnswer(temp);
                if (areEqual(correctAnswers, selectionAnswer)) {
                    setShowCorrect(true);
                    setShowInCorrect(false);
                    setTypeButtonNext(true);
                } else {
                    setShowCorrect(false);
                    setShowInCorrect(true);
                    setTypeButtonNext(true);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        fetch(
            "http://ec2-3-0-139-245.ap-southeast-1.compute.amazonaws.com:8080/v1/lessons/" +
                props.data.id,
        )
            .then((res) => res.json())
            .then((json) => {
                props.data.type === "lecture"
                    ? setLesson(json.data)
                    : setQuestions(json.data.questions);
            })
            .catch((error) => console.error(error));
    }, []);

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
                                                [styles.itemOptionActive]:
                                                    activeOption === idx,
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
                            <Col
                                className={styles.answer}
                                style={{ marginLeft: 0, marginTop: 70 }}
                            >
                                <Row className={clsx(styles.itemFill)}>
                                    <Col>
                                        <input
                                            type="text"
                                            width={"auto"}
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
                                                [styles.itemOptionActive]:
                                                    selectionAnswer.includes(
                                                        idx,
                                                    ),
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
        }
    };
    const render = () => {
        if (props.data.type === "lecture") {
            return <Lecture data={lesson} />;
        } else {
            return questions.map((question, idx) => {
                return <div key={idx}>{lessonRender(question)}</div>;
            });
        }
    };
    return (
        <>
            <div className={styles.lectureLayoutWrapper}>
                {props.data.type === "practice" && (
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
                        [styles.lessonContentPractice]:
                            props.data.type === "practice",
                    })}
                >
                    <Col>
                        <Carousel
                            ref={carousel}
                            afterChange={(currentSlide) =>
                                setSlideNumber(currentSlide)
                            }
                            dots={false}
                        >
                            {render()}
                        </Carousel>
                    </Col>
                </div>
                <div
                    className={clsx(styles.actionButtonWrappper, {
                        [styles.inCorrectBg]: showInCorrect,
                        [styles.correctBg]: showCorrect,
                    })}
                >
                    <Row
                        justify={"space-around"}
                        align={"middle"}
                        style={{ height: "100%" }}
                    >
                        {!showCorrect && !showInCorrect && (
                            <Col className={styles.actionButton} span={5}>
                                BỎ QUA
                            </Col>
                        )}
                        {(showCorrect || showInCorrect) && (
                            <Col span={5}>
                                <Row>
                                    <Col className={clsx(styles.iconResult)}>
                                        {showInCorrect && (
                                            <img
                                                src="images/close.svg"
                                                alt="close"
                                            />
                                        )}
                                        {showCorrect && (
                                            <img
                                                src="images/correct.svg"
                                                alt="correct"
                                            />
                                        )}
                                    </Col>
                                    <Col
                                        style={{
                                            marginLeft: 10,
                                        }}
                                    >
                                        <Row className={styles.resultTitle}>
                                            {showInCorrect && "Đáp án đúng"}
                                            {showCorrect && "Chính xác"}
                                        </Row>
                                        {showInCorrect && (
                                            <Row style={{ fontSize: 16 }}>
                                                {correctAnswer}
                                            </Row>
                                        )}
                                        <Row
                                            className={clsx(
                                                styles.reportButton,
                                            )}
                                        >
                                            <span
                                                style={{
                                                    marginRight: 5,
                                                    marginTop: 2,
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faFlag}
                                                />
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
                            {typeButtonNext ? "TIẾP TỤC" : "KIỂM TRA"}
                        </button>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default memo(LectureLayout);
