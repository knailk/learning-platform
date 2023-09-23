import styles from './style.module.scss';
import { Col, Row, notification } from 'antd';
import clsx from 'clsx';
import { CodePracticeContext } from '../CodePracticePage';
import FailedResult from './FailedResult';
import { useContext, useEffect, useState } from 'react';

const Result = () => {
    const CodePractice = useContext(CodePracticeContext);
    const [isWrong, setIsWrong] = useState(false);
    const [result, setResult] = useState([]);
    let solution = [];

    const [active, setActive] = useState(0);
    const [dataResult, setDataResult] = useState(
        result.length > 0 ? { ...result[0].value } : { input: [], output: '', expected: '' },
    );
    const handleChangeCase = (value, idx) => {
        setActive(idx);
        setDataResult({
            input: value.value.input,
            output: value.value.output,
            expected: value.value.expected,
        });
    };
    useEffect(() => {
        try {
            let result_temp = [];
            if (CodePractice.result.status === 'success') {
                result_temp = CodePractice.result.value.user.sort(function (a, b) {
                    return a.id - b.id;
                });
                solution = CodePractice.result.value.solution.sort(function (a, b) {
                    return a.id - b.id;
                });

                let flag = false;
                result_temp = result_temp.map((value, idx) => {
                    if (solution[idx].value.output !== value.value.output && !flag) {
                        flag = true;
                        if (CodePractice.type === 'submit') {
                            setDataResult({ ...value.value, expected: solution[idx].value.output });
                        }
                    }
                    return { ...value, value: { ...value.value, expected: solution[idx].value.output } };
                });
                setIsWrong(flag);
            } else {
                result_temp = [];
            }
            setResult(result_temp);
            setActive(0);
            CodePractice.type === 'test' &&
                setDataResult(
                    result_temp.length > 0 ? { ...result_temp[0].value } : { input: [], output: '', expected: '' },
                );
        } catch (error) {
            notification.error({ message: 'Hệ thống lỗi, vui lòng thử lại sau' });
        }
    }, [CodePractice.result]);
    if (CodePractice.result.status === 'error') {
        return <FailedResult detail={CodePractice.result.value} />;
    } else if (CodePractice.result.status === 'success' && CodePractice.type === 'test') {
        return (
            <Col>
                {isWrong && <Row className={styles.wrongAnswer}>Câu trả lời sai</Row>}
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
                                <span>
                                    {value.value.output !== value.value.expected && (
                                        <p style={{ color: '#ef4743', display: 'inline-block', marginRight: 5 }}>
                                            &#x2022;
                                        </p>
                                    )}
                                    Case {idx + 1}
                                </span>
                            </Col>
                        );
                    })}
                </Row>
                <Row className={styles.inputResultWrapper}>
                    <div className={styles.inputTitle}>Input</div>
                    {dataResult.input.map((input, idx) => {
                        return (
                            <div className={styles.inputWrapper} key={idx}>
                                <div style={{ display: 'block' }} className={styles.inputName}>
                                    {input.name}
                                </div>
                                <div>{input.value}</div>
                            </div>
                        );
                    })}
                </Row>
                <Row className={styles.outputResultWrapper}>
                    <div className={styles.outputTitle}>Output</div>
                    <div className={styles.outputWrapper}>{dataResult.output}</div>
                </Row>
                <Row className={styles.expectedResultWrapper}>
                    <div className={styles.expectedTitle}>Expected</div>
                    <div className={styles.expectedWrapper}>{dataResult.expected}</div>
                </Row>
            </Col>
        );
    } else if (CodePractice.result.status === 'success' && CodePractice.type === 'submit') {
        return (
            <Col>
                {isWrong && <Row className={styles.wrongAnswer}>Câu trả lời sai</Row>}
                <Row className={styles.inputResultWrapper}>
                    <div className={styles.inputTitle}>Input</div>
                    {dataResult.input.map((input, idx) => {
                        return (
                            <div className={styles.inputWrapper} key={idx}>
                                <div style={{ display: 'block' }} className={styles.inputName}>
                                    {input.name}
                                </div>
                                <div>{input.value}</div>
                            </div>
                        );
                    })}
                </Row>
                <Row className={styles.outputResultWrapper}>
                    <div className={styles.outputTitle}>Output</div>
                    <div className={styles.outputWrapper}>{dataResult.output}</div>
                </Row>
                <Row className={styles.expectedResultWrapper}>
                    <div className={styles.expectedTitle}>Expected</div>
                    <div className={styles.expectedWrapper}>{dataResult.expected}</div>
                </Row>
            </Col>
        );
    } else {
        return (
            <>
                <div className={styles.runCodeFirst}>Hãy chạy đoạn code để xem kết quả</div>
            </>
        );
    }
};

export default Result;
