import { useContext, useRef } from 'react';
import clsx from 'clsx';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CodePracticeContext } from '../CodePracticePage';

const TestCase = ({ args }) => {
    const ADD_ACTION = 'add';
    const REMOVE_ACTION = 'remove';
    const SET_ACTIVE = 'active';
    const UPDATE_TESTCASE = 'update';
    const CodePractice = useContext(CodePracticeContext);
    //useReducer for data testcase
    const inputRef = useRef('1');
    const targetRef = useRef('1');
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
                <Row className={styles.inputWrapper}>
                    <span style={{ display: 'block' }}>nums =</span>
                    <input
                        onChange={(e) =>
                            CodePractice.dispatch({
                                type: UPDATE_TESTCASE,
                                inputValue: e.target.value,
                                targetValue: targetRef.current.value,
                            })
                        }
                        value={CodePractice.testCaseState.testCase.input.value}
                        ref={inputRef}
                    />
                </Row>
                <Row className={styles.inputWrapper}>
                    <span style={{ display: 'block' }}>target =</span>
                    <input
                        onChange={(e) =>
                            CodePractice.dispatch({
                                type: UPDATE_TESTCASE,
                                targetValue: e.target.value,
                                inputValue: inputRef.current.value,
                            })
                        }
                        value={CodePractice.testCaseState.testCase.target.value}
                        ref={targetRef}
                    />
                </Row>
            </Col>
        </>
    );
};

export default TestCase;
