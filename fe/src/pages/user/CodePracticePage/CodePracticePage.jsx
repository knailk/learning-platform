import React, { useRef, useEffect, useState, createContext, useReducer, useMemo } from 'react';
import clsx from 'clsx';
import { Row, Col, notification, Spin, Drawer } from 'antd';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import styles from './style.module.scss';
import './customStyle.scss';
import UserInteract from './UserInteract';
import ProblemDescription from './ProblemDescription';
import request, { request_node } from 'utils/http';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCloudArrowUp, faIndent, faPlay } from '@fortawesome/free-solid-svg-icons';
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
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const [problem, setProblem] = useState({});
    const [problemId, setProblemId] = useState('5ae59f1e-d97c-4cdd-9846-62de19009bb6');
    const [allProblems, setAllProblems] = useState([]);
    const [defaultValue, setDefaultValue] = useState(null);
    const [testCaseState, dispatch] = useReducer(reducer, initState);
    const [result, setResult] = useState({ status: '', data: [] });
    const [load, setLoad] = useState('');
    const [type, setType] = useState('test');
    const [tab, setTab] = useState('1');
    const [open, setOpen] = useState(false);
    const handleRunBtn = (type) => {
        const code = editorRef.current.getValue();
        setType(type);
        try {
            setLoad(type);
            request_node
                .post('/code-practice', {
                    code,
                    user_id: userId,
                    practice_code_id: problemId,
                    run: true,
                    user_test_case: testCaseState.allTestCases,
                    test_case: problem.test_cases,
                    function_name: problem.function_name,
                    solution: problem.solution_code,
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
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };
    const handleChangeProblem = (id) => {
        setProblemId(id);
        editorRef.current.setValue(defaultValue);
    };

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const response = await request.get(`problems/${problemId}`);
                let data = response.data.data;
                setProblem(data);
                dispatch({ type: INIT_TESTCASE, init: data.args });
                const node_response = await request_node.get('/code-practice/get-saved-file', {
                    params: {
                        user_id: 'c5c10397-37c3-4e96-a9c6-ab6ac47dd700',
                        problem_id: problemId,
                    },
                });
                let user_data = node_response.data.data;
                setDefaultValue(user_data || data.available_code);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!' });
            }
        };
        fetchProblem();
    }, [problemId]);
    useEffect(() => {
        const fetchAllProblems = async () => {
            try {
                const response = await request.get('problems');
                setAllProblems(response.data.data);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!' });
            }
        };
        fetchAllProblems();
    }, []);
    const valueProvider = useMemo(() => {
        return {
            dispatch: dispatch,
            testCaseState: testCaseState,
            problem: problem,
            result: result,
            type: type,
            problemId: problemId,
        };
    }, [testCaseState, result, problemId]);
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
                            <span className={styles.btnBack} style={{ marginLeft: 4 }} onClick={() => setOpen(true)}>
                                <FontAwesomeIcon icon={faIndent} style={{ marginRight: 4 }} />
                                Xem thêm
                            </span>
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
                <Drawer
                    title="Một số bài toán khác"
                    placement={'left'}
                    width={500}
                    onClose={() => setOpen(false)}
                    open={open}
                    closeIcon={false}
                    style={{ backgroundColor: 'rgb(42 42 42', color: 'white' }}
                    maskStyle={{ backgroundColor: 'rgba(38 38 38,0.2)' }}
                    headerStyle={{ color: 'white' }}
                >
                    <div className={clsx([styles.problemDrawer, 'problemDrawer'])}>
                        {allProblems.map((value) => {
                            return (
                                <div
                                    key={value.id}
                                    className={styles.problemItem}
                                    onClick={() => handleChangeProblem(value.id)}
                                >
                                    <Row>
                                        <Col span={18} className={styles.title}>
                                            <div>{value.title}</div>
                                        </Col>
                                        <Col span={5} className={styles.level}>
                                            <div>{value.level}</div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        })}
                    </div>
                </Drawer>
            </CodePracticeContext.Provider>
        );
    }
};

export default CodePractice;
