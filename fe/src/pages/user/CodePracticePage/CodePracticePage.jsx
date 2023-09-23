import React, { useRef, useEffect, useState, createContext, useReducer, useMemo } from 'react';
import clsx from 'clsx';
import { Row, Col, notification, Spin } from 'antd';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import styles from './style.module.scss';
import UserInteract from './UserInteract';
import ProblemDescription from './ProblemDescription';
import request, { request_node } from 'utils/http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCloudArrowUp, faPlay } from '@fortawesome/free-solid-svg-icons';
import { VARIABLE_TYPE } from 'utils/constant';
import { Link } from 'react-router-dom';

export const CodePracticeContext = createContext();

const initTestCase = {
    id: 0,
    input: [],
};
const initState = {
    testCase: initTestCase,
    idIncrement: 0,
    allTestCases: [initTestCase],
};
const ADD_ACTION = 'add';
const REMOVE_ACTION = 'remove';
const SET_ACTIVE = 'active';
const UPDATE_TESTCASE = 'update';
const INIT_TESTCASE = 'init';

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
        case UPDATE_TESTCASE:
            let newTestCase = state.testCase.input.map((value) => {
                if (value.name === action.value.name) {
                    return action.value;
                } else return value;
            });
            newTestCase = { id: state.testCase.id, input: [...newTestCase] };
            const newArrTestCase = state.allTestCases.map((value) => {
                if (value.id === state.testCase.id) {
                    return newTestCase;
                } else return value;
            });
            return {
                ...state,
                testCase: newTestCase,
                allTestCases: newArrTestCase,
            };
        default: //set initial state
            const init = { ...state.testCase, input: action.init };
            return { testCase: init, idIncrement: 0, allTestCases: [init] };
    }
};

const CodePractice = () => {
    const editorRef = useRef(null);
    const [problem, setProblem] = useState(null);
    const [defaultValue, setDefaultValue] = useState(null);
    const [load, setLoad] = useState('');
    const [type, setType] = useState('test');
    const [tab, setTab] = useState('1');
    const [testCaseState, dispatch] = useReducer(reducer, initState);
    const [result, setResult] = useState({ status: '', data: [] });
    const handleRunBtn = (type) => {
        const code = editorRef.current.getValue();
        setType(type);
        try {
            setLoad(type);
            request_node
                .post('/code-practice', {
                    code,
                    user_id: userId,
                    practice_code_id: practiceId,
                    run: true,
                    test_case: testCaseState.allTestCases,
                    function_name: problem.function,
                    solution: problem.solution,
                    type: type,
                })
                .then((data) =>
                    setTimeout(() => {
                        setLoad('');
                        setTab('2');
                        setResult({ status: 'success', value: data.data.data });
                    }, 500),
                )
                .catch((e) => {
                    setTimeout(() => {
                        setLoad('');
                        try {
                            setResult({ status: 'error', value: e.response.data.error });
                            setTab('2');
                        } catch (error) {
                            notification.error({ message: 'Lỗi hệ thống!' });
                        }
                    }, 500);
                });
        } catch (error) {
            notification.error({ message: 'Lỗi hệ thống!' });
        }
    };

    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const practiceId = '4e722caf-6601-4a6c-98b6-e718392f0714';

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        let myBinding = editor.addCommand(monaco.KeyMod.Ctrl | monaco.KeyCode.KEY_S, function () {
            alert('SAVE pressed!');
        });
    };

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const response = await request.get('problems/1a67bff7-1f45-416a-af49-907ac8e6bd09');
                let data = {
                    ...response.data.data,
                    args: '[{"name":"nums","type":"array","value":"[2,7,11,15]"},{"name":"target","type":"number","value":"9"}]',
                    available_code:
                        'class Solution(object):\n    def twoSum(self, nums, target):\n        """\n        :type nums: List[int]\n        :type target: int\n        :rtype: List[int]\n        """',
                    function: 'twoSum',
                    solution:
                        'from typing import List\nclass Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        n = len(nums)\n        for i in range(n - 1):\n            for j in range(i + 1, n):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n        return []',
                    testcase: '',
                };
                setProblem({ ...data, args: JSON.parse(data.args) });
                dispatch({ type: INIT_TESTCASE, init: JSON.parse(data.args) });
                const node_response = await request_node.get('/code-practice/get-saved-file', {
                    params: {
                        user_id: 'c5c10397-37c3-4e96-a9c6-ab6ac47dd700',
                        problem_id: response.data.data.id,
                    },
                });
                setDefaultValue(node_response.data.data ? node_response.data.data : data.available_code);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!' });
            }
        };
        fetchProblem();
    }, []);
    console.log(problem);
    const valueProvider = useMemo(() => {
        return { dispatch: dispatch, testCaseState: testCaseState, problem: problem, result: result, type: type };
    }, [testCaseState, result]);
    if (!problem) {
        return <Spin />;
    } else {
        return (
            <CodePracticeContext.Provider value={valueProvider}>
                <Col className={clsx([styles.codePracticeWrapper, 'codePracticeWrapperCustom'])}>
                    <Row className={styles.problemHeader}>
                        <Col span={8} className={styles.btnBackWrapper}>
                            <Link to="/">
                                <span className={styles.btnBack}>
                                    <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 4 }} />
                                    Quay về
                                </span>
                            </Link>
                        </Col>
                        <Col span={8} className={styles.btnExecuteWrapper}>
                            <span className={clsx([styles.btn, styles.btnRun])} onClick={() => handleRunBtn('test')}>
                                <FontAwesomeIcon icon={faPlay} style={{ marginRight: 4 }} />
                                {load !== 'test' && 'Chạy thử'}
                                {load === 'test' && <Spin />}
                            </span>
                            <span
                                className={clsx([styles.btn, styles.btnSubmit])}
                                onClick={() => handleRunBtn('submit')}
                            >
                                <FontAwesomeIcon icon={faCloudArrowUp} style={{ marginRight: 4 }} />
                                {load !== 'submit' && 'Nộp bài'}
                                {load === 'submit' && <Spin />}
                            </span>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                    <Row style={{ width: '100%' }}>
                        <Splitter
                            direction={SplitDirection.Horizontal}
                            initialSizes={[50, 50]}
                            minWidths={[400, 400]}
                            gutterClassName={styles.gutterSplit}
                        >
                            <Col className={styles.problemDetail}>
                                <ProblemDescription problem={problem} />
                            </Col>
                            <Col className={styles.userInteract}>
                                <UserInteract
                                    handleEditorDidMount={handleEditorDidMount}
                                    problem={problem}
                                    editorRef={editorRef}
                                    defaultEditorValue={defaultValue}
                                    tab={tab}
                                    setTab={setTab}
                                />
                            </Col>
                        </Splitter>
                    </Row>
                </Col>
            </CodePracticeContext.Provider>
        );
    }
};

export default CodePractice;
