import styles from './style.module.scss';
import { Col, Row } from 'antd';
import clsx from 'clsx';
import { CodePracticeContext } from '../CodePracticePage';
import { useContext, useState } from 'react';

const ADD_ACTION = 'add';
const REMOVE_ACTION = 'remove';
const SET_ACTIVE = 'active';
const UPDATE_TESTCASE = 'update';
const Result = () => {
    const CodePractice = useContext(CodePracticeContext);
    const result = CodePractice.result.sort(function (a, b) {
        return a.id - b.id;
    });
    const [active, setActive] = useState(0);
    const [dataResult, setDataResult] = useState(result.length > 0 ? result[0].value : { input: [], output: '' });
    const handleChangeCase = (value, idx) => {
        setActive(idx);
        setDataResult({
            input: value.value.input,
            output: value.value.output,
        });
    };
    return (
        <Col>
            <Row justify={'start'} style={{ width: '100%' }}>
                {result.map((value, idx) => {
                    return (
                        <Col
                            key={value.id}
                            className={clsx([
                                styles.itemTestCase,
                                {
                                    [styles.itemTestCaseActive]: idx === active,
                                },
                            ])}
                            onClick={() => handleChangeCase(value, idx)}
                        >
                            <span>Case {idx + 1}</span>
                        </Col>
                    );
                })}
            </Row>
            <Row className={styles.inputResultWrapper}>
                <div className={styles.inputTitle}>input</div>
                <div className={styles.inputWrapper}>
                    <div style={{ display: 'block' }} className={styles.inputName}>
                        nums =
                    </div>
                    <div>{dataResult.input[0]}</div>
                </div>
                <div className={styles.inputWrapper}>
                    <div style={{ display: 'block' }} className={styles.inputName}>
                        target =
                    </div>
                    <div>{dataResult.input[1]}</div>
                </div>
            </Row>
            <Row className={styles.outputResultWrapper}>
                <div className={styles.outputTitle}>output</div>
                <div className={styles.outputWrapper}>{dataResult.output}</div>
            </Row>
            <Row className={styles.expectedResultWrapper}>
                <div className={styles.expectedTitle}>expected</div>
                <div className={styles.expectedWrapper}>[1]</div>
            </Row>
        </Col>
    );
};

export default Result;
