import React, { memo, useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import { Col, Row } from 'antd';

const Question = ({ type }) => {
    const CHOOSE_ONE = 1;
    const FILL = 2;
    const CHOOSE_MULTI = 3;
    const [activeOption, setActiveOption] = useState(-1);
    const [selectionAnswer, setSelectionAnswer] = useState([]);
    const inputFill = useRef();
    const handleSelection = (id) => {
        setSelectionAnswer((props) => (props.includes(id) ? props.filter((val) => val !== id) : [...props, id]));
    };

    const lessonRender = (question) => {
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
                                        className={clsx([
                                            styles.itemOption,
                                            {
                                                [styles.itemOptionActive]: activeOption === item.id,
                                            },
                                        ])}
                                        onClick={() => setActiveOption(item.id)}
                                    >
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
                                        className={clsx([
                                            styles.itemOption,
                                            {
                                                [styles.itemOptionActive]: selectionAnswer.includes(item.id),
                                            },
                                        ])}
                                        onClick={() => handleSelection(item.id)}
                                    >
                                        {item.content}
                                    </Row>
                                ))}
                            </Col>
                        </Row>
                    </>
                );
            default:
                return <></>;
        }
    };
    return <>{lessonRender(type)}</>;
};

export default memo(Question);
