import { useRef, useState } from 'react';
import { Row, Col } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';
import PythonEditor from 'components/PythonEditor';
import { Tabs } from 'antd';
import axios from 'axios';

const UserInteract = () => {
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const [showConsole, setShowConsole] = useState(false);
    const practiceId = 'Bai1';
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };
    const getEditorValue = () => {
        const code = editorRef.current.getValue();
        axios
            .post('http://localhost:80/code-practice', { code, user_id: userId, practice_code_id: practiceId })
            .then((data) => console.log(data));
    };
    const itemsTab = [
        {
            key: '1',
            label: 'Tab 1',
            children: <div className={styles.contentConsole}>Content of Tab Pane 1</div>,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: <div className={styles.contentConsole}>Content of Tab Pane 2</div>,
        },
    ];

    return (
        <>
            <Row className={styles.codeEditor}>
                <PythonEditor handleEditorDidMount={handleEditorDidMount} />
            </Row>
            <Row className={styles.consoleWrapper}>{showConsole && <Tabs defaultActiveKey="1" items={itemsTab} />}</Row>
            <Row className={styles.btnWrapper}>
                <div className={clsx([styles.btnShowConsole])} onClick={() => setShowConsole(!showConsole)}>
                    Console
                </div>
                <div className={clsx([styles.btn, styles.btnRun])} onClick={getEditorValue}>
                    Run
                </div>
                <button className={clsx([styles.btn, styles.btnSubmit])}>Submit</button>
            </Row>
        </>
    );
};

export default UserInteract;
