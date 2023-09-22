import styles from './style.module.scss';
import { Col, Row, notification } from 'antd';
import clsx from 'clsx';
import { CodePracticeContext } from '../CodePracticePage';
import FailedResult from './FailedResult';
import { useContext, useEffect, useState } from 'react';

const Result = () => {
    const CodePractice = useContext(CodePracticeContext);
    let result = [];
    try {
        if (CodePractice.result.status === 'success') {
            result = CodePractice.result.value.sort(function (a, b) {
                return a.id - b.id;
            });
        } else {
            result = [];
        }
    } catch (error) {
        notification.error({ message: 'Hệ thống lỗi, vui lòng thử lại sau' });
    }
    const [active, setActive] = useState(0);
    const [dataResult, setDataResult] = useState(result.length > 0 ? result[0].value : { input: [], output: '' });
    const handleChangeCase = (value, idx) => {
        setActive(idx);
        setDataResult({
            input: value.value.input,
            output: value.value.output,
        });
    };
    useEffect(() => {
        setActive(0);
        setDataResult(result.length > 0 ? result[0].value : { input: [], output: '' });
    }, [CodePractice.result]);
    if (CodePractice.result.status === 'error') {
        return <FailedResult detail={CodePractice.result.value} />;
    } else if (CodePractice.result.status === 'success') {
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
                    <div className={styles.expectedWrapper}>[1]</div>
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
