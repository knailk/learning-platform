import React, { memo, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Col, Row, Carousel } from 'antd';

const LectureLayout = () => {
    const CHOOSE_ONE = 1;
    const FILL = 2;
    const CHOOSE_MULTI = 3;
    const [widthStyle, setWidthStyle] = useState(0);
    const [activeOption, setActiveOption] = useState(-1);
    const [selectionAnswer, setSelectionAnswer] = useState([]);
    const [slideNumber, setSlideNumber] = useState(1);
    const [typeButtonNext, setTypeButtonNext] = useState(false);
    const inputFill = useRef();
    const carousel = useRef();
    const handleSelection = (id) => {
        setSelectionAnswer((props) => (props.includes(id) ? props.filter((val) => val !== id) : [...props, id]));
    };
    const handleContinueButton = () => {
        setActiveOption(-1);
        setSelectionAnswer([]);
        if (slideNumber < questions.length - 1) {
            carousel.current.next();
            if (widthStyle < 700) {
                setWidthStyle(widthStyle + 700 / 7);
            }
        }
    };
    const questions = [
        {
            question: 'Trong Python, để lấy độ dài (số phần tử) của một danh sách (list), ta sử dụng phương thức nào sau đây?',
            type: CHOOSE_ONE,
            answer: [
                {
                    id: 1,
                    content: 'count()',
                    correct: 0,
                },
                {
                    id: 2,
                    content: 'Length()',
                    correct: 0,
                },
                {
                    id: 3,
                    content: 'len()',
                    correct: 1,
                },
            ],
        },
        {
            question: 'Hãy điền từ thích hợp vào chỗ trống',
            type: FILL,
            answer: {
                id: 1,
                content1: 'Python là một',
                content2: 'bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991',
                correct: 0,
            },
        },
        {
            question: 'Trong Python, để lấy độ dài (số phần tử) của một danh sách (list), ta sử dụng phương thức nào sau đây?',
            type: CHOOSE_MULTI,
            answer: [
                {
                    id: 1,
                    content: 'count()',
                    correct: 0,
                },
                {
                    id: 2,
                    content: 'Length()',
                    correct: 1,
                },
                {
                    id: 3,
                    content: 'len()',
                    correct: 1,
                },
            ],
        },
        {
            question: 'Hãy điền từ thích hợp vào chỗ trống',
            type: FILL,
            answer: {
                id: 1,
                content1: 'Python là một',
                content2: 'bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991',
                correct: 0,
            },
        },
        {
            question: 'Trong Python, để lấy độ dài (số phần tử) của một danh sách (list), ta sử dụng phương thức nào sau đây?',
            type: CHOOSE_MULTI,
            answer: [
                {
                    id: 1,
                    content: 'count()',
                    correct: 0,
                },
                {
                    id: 2,
                    content: 'Length()',
                    correct: 1,
                },
                {
                    id: 3,
                    content: 'len()',
                    correct: 1,
                },
            ],
        },
        {
            question: 'Hãy điền từ thích hợp vào chỗ trống',
            type: FILL,
            answer: {
                id: 1,
                content1: 'Python là một',
                content2: 'bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991',
                correct: 0,
            },
        },
        {
            question: 'Trong Python, để lấy độ dài (số phần tử) của một danh sách (list), ta sử dụng phương thức nào sau đây?',
            type: CHOOSE_MULTI,
            answer: [
                {
                    id: 1,
                    content: 'count()',
                    correct: 0,
                },
                {
                    id: 2,
                    content: 'Length()',
                    correct: 1,
                },
                {
                    id: 3,
                    content: 'len()',
                    correct: 1,
                },
            ],
        },
        {
            question: 'Hãy điền từ thích hợp vào chỗ trống',
            type: FILL,
            answer: {
                id: 1,
                content1: 'Python là một',
                content2: 'bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991',
                correct: 0,
            },
        },
    ];

    const questionRender = (question) => {
        switch (question.type) {
            case CHOOSE_ONE:
                return (
                    <>
                        <Row className={styles.question}>
                            <h1>{question.question}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer}>
                                {question.answer.map((item) => (
                                    <Row
                                        key={item.id}
                                        className={clsx([styles.itemOption, { [styles.itemOptionActive]: activeOption === item.id }])}
                                        onClick={() => setActiveOption(item.id)}>
                                        {item.content}
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
                            <h1>{question.question}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer} style={{ marginLeft: 0, marginTop: 70 }}>
                                <Row className={clsx(styles.itemFill)}>
                                    <Col>{question.answer.content1}</Col>
                                    <Col>
                                        <input type="text" width={'auto'} ref={inputFill} />
                                    </Col>
                                    <Col>{question.answer.content2}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                );
            case CHOOSE_MULTI:
                return (
                    <>
                        <Row className={styles.question}>
                            <h1>{question.question}</h1>
                        </Row>
                        <Row>
                            <Col className={styles.answer}>
                                {question.answer.map((item) => (
                                    <Row
                                        key={item.id}
                                        className={clsx([styles.itemOption, { [styles.itemOptionActive]: selectionAnswer.includes(item.id) }])}
                                        onClick={() => handleSelection(item.id)}>
                                        {item.content}
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </>
                );
        }
    };

    return (
        <>
            <div className={styles.lectureLayoutWrapper}>
                <div className={styles.progressBarWrapper}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressBarSuccess} style={{ width: widthStyle }} key={widthStyle}></div>
                    </div>
                </div>
                <div className={styles.lectureContent}>
                    <Col>
                        <Carousel ref={carousel} afterChange={(currentSlide) => setSlideNumber(currentSlide)} dots={false}>
                            {questions.map((question) => {
                                return <div>{questionRender(question)}</div>;
                            })}
                        </Carousel>
                    </Col>
                </div>
                <div className={styles.actionButtonWrappper}>
                    <Row justify={'space-around'} align={'middle'} style={{ height: '100%' }}>
                        <Col className={styles.actionButton} span={3}>
                            BỎ QUA
                        </Col>
                        <Col className={styles.actionButton} span={3} onClick={() => handleContinueButton()}>
                            {typeButtonNext ? 'TIẾP TỤC' : 'TIẾP TỤC'}
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default memo(LectureLayout);
