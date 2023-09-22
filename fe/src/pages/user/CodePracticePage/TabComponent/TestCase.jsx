import { useContext, useRef } from 'react';
import clsx from 'clsx';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CodePracticeContext } from '../CodePracticePage';

const TestCase = () => {
    const ADD_ACTION = 'add';
    const REMOVE_ACTION = 'remove';
    const SET_ACTIVE = 'active';
    const UPDATE_TESTCASE = 'update';
    const CodePractice = useContext(CodePracticeContext);
    return (
        <>
            <Col>
                <Row justify={'start'} style={{ width: '100%' }}>
                    {CodePractice.testCaseState.allTestCases.map((value, idx) => {
                        return (
                            <Col
                                key={value.id}
                                className={clsx([
                                    styles.itemTestCase,
                                    {
                                        [styles.itemTestCaseActive]:
                                            value.id === CodePractice.testCaseState.testCase.id,
                                    },
                                ])}
                                onClick={() => CodePractice.dispatch({ type: SET_ACTIVE, testCase: value })}
                            >
                                <span>Case {idx + 1}</span>
                                {CodePractice.testCaseState.allTestCases.length !== 1 && (
                                    <div
                                        className={styles.deleteTestCaseBtn}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            CodePractice.dispatch({ type: REMOVE_ACTION, testCaseId: value.id });
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
                                    </div>
                                )}
                            </Col>
                        );
                    })}
                    {CodePractice.testCaseState.allTestCases.length < 8 && (
                        <div className={styles.addTestCaseBtn}>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={styles.addIcon}
                                onClick={() => CodePractice.dispatch({ type: ADD_ACTION })}
                            />
                        </div>
                    )}
                </Row>
                {CodePractice.testCaseState.testCase.input.map((input, idx) => {
                    return (
                        <Row className={styles.inputWrapper} key={idx}>
                            <span style={{ display: 'block' }}>{input.name} =</span>
                            <input
                                onChange={(e) =>
                                    CodePractice.dispatch({
                                        type: UPDATE_TESTCASE,
                                        value: { ...input, value: e.target.value },
                                    })
                                }
                                value={input.value}
                            />
                        </Row>
                    );
                })}
            </Col>
        </>
    );
};

export default TestCase;
