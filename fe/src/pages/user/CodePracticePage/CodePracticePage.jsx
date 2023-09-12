import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Row, Col, notification, Spin } from 'antd';
import axios from 'axios';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import styles from './style.module.scss';
import UserInteract from './UserInteract';
import ProblemDescription from './ProblemDescription';
import request from 'utils/http';

const CodePractice = () => {
    const editorRef = useRef(null);
    const [problem, setProblem] = useState(null);

    const handleRunBtn = () => {
        const code = editorRef.current.getValue();
        axios
            .post('http://localhost:80/code-practice', { code, user_id: userId, practice_code_id: practiceId })
            .then((data) => console.log(data));
    };

    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const practiceId = 'Bai1';

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                const response = await request.get('problems/1de43a84-07fc-4a1c-9848-ccd0e8b6a250');
                console.log(response.data.data);
                setProblem(response.data.data);
            } catch (error) {
                notification.error({ message: 'Lỗi hệ thống!' });
            }
        };

        fetchProblem();
    }, []);

    if (!problem) {
        return <Spin />;
    } else {
        return (
            <>
                <Col className={styles.codePracticeWrapper}>
                    <Row style={{ width: '100%', height: '100%' }}>
                        <Splitter
                            direction={SplitDirection.Horizontal}
                            initialSizes={[55, 45]}
                            minWidths={[400, 400]}
                            gutterClassName={styles.gutterSplit}
                        >
                            <Col className={styles.tile}>
                                <ProblemDescription problem={problem} />
                            </Col>
                            <Col className={styles.userInteract}>
                                <UserInteract handleEditorDidMount={handleEditorDidMount} />
                            </Col>
                        </Splitter>
                    </Row>
                    <Row className={styles.btnWrapper}>
                        <div className={clsx([styles.btn, styles.btnRun])} onClick={handleRunBtn}>
                            Run
                        </div>
                        <button className={clsx([styles.btn, styles.btnSubmit])}>Submit</button>
                    </Row>
                </Col>
            </>
        );
    }
};

export default CodePractice;
