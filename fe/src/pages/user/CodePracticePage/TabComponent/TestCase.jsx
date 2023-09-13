import { useEffect, useReducer, useState } from 'react';
import clsx from 'clsx';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const initTestCase = { id: 0, input: '0', target: '0' };
const initState = {
    testCase: initTestCase,
    idIncrement: 0,
    allTestCases: [initTestCase],
};
const ADD_ACTION = 'add';
const REMOVE_ACTION = 'remove';
const SET_ACTIVE = 'active';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ACTION:
            const newId = state.idIncrement + 1;
            const newCase = { ...state.testCase, id: newId };
            return {
                testCase: newCase,
                idIncrement: newId,
                allTestCases: [...state.allTestCases, newCase],
            };
        case REMOVE_ACTION:
            let idxRemove = -1;
            const temp = state.allTestCases.filter((testCase, idx) => {
                if (state.testCase.id === action.testCaseId && testCase.id === action.testCaseId) {
                    idxRemove = idx > 0 ? idx - 1 : 0;
                }
                return testCase.id !== action.testCaseId;
            });
            const testCase = idxRemove === -1 ? state.testCase : temp[idxRemove];
            return { ...state, testCase, allTestCases: temp };
        case SET_ACTIVE:
            return { ...state, testCase: action.testCase };
        default:
            break;
    }
};

const TestCase = () => {
    //useReducer for data testcase
    const [testCaseState, dispatch] = useReducer(reducer, initState);

    return (
        <>
            <Col>
                <Row justify={'start'} style={{ width: '100%' }}>
                    {testCaseState.allTestCases.map((value, idx) => {
                        console.log(123);
                        return (
                            <Col
                                key={value.id}
                                className={clsx([
                                    styles.itemTestCase,
                                    { [styles.itemTestCaseActive]: value.id === testCaseState.testCase.id },
                                ])}
                                onClick={() => dispatch({ type: SET_ACTIVE, testCase: value })}
                            >
                                <span>Case {idx + 1}</span>
                                {testCaseState.allTestCases.length !== 1 && (
                                    <div
                                        className={styles.deleteTestCaseBtn}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch({ type: REMOVE_ACTION, testCaseId: value.id });
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
                                    </div>
                                )}
                            </Col>
                        );
                    })}
                    {testCaseState.allTestCases.length < 8 && (
                        <div className={styles.addTestCaseBtn}>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={styles.addIcon}
                                onClick={() => dispatch({ type: ADD_ACTION })}
                            />
                        </div>
                    )}
                </Row>
                <Row>{testCaseState.testCase.id}</Row>
                <Row>target</Row>
            </Col>
        </>
    );
};

export default TestCase;
