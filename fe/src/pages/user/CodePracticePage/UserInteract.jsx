import React, { useState, useEffect } from 'react';
import { Tabs, Spin, notification, Row, Col, Tooltip } from 'antd';
import PythonEditor from 'components/PythonEditor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCase from './TabComponent/TestCase';
import Result from './TabComponent/Result';
import styles from './style.module.scss';
import './customStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { request_node } from 'utils/http';

const UserInteract = ({ editorRef, problem, handleEditorDidMount, editorValue, tab, setTab, setEditorValue }) => {
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const [load, setLoad] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const itemsTab = [
        {
            key: '1',
            label: 'Test case',
            children: (
                <div className={styles.contentConsole}>
                    <TestCase args={problem.args} />
                </div>
            ),
        },
        {
            key: '2',
            label: 'Kết quả',
            children: (
                <div className={styles.contentConsole}>
                    <Result setIsCorrect={setIsCorrect} />
                </div>
            ),
        },
    ];
    const renderTabBar = (props, DefaultTabBar) => (
        <div className={styles.tabBarHeader}>
            <DefaultTabBar {...props} style={{}} />
        </div>
    );

    //handle save code
    const handleKeyDown = (e) => {
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            // Prevent the Save dialog to open
            e.preventDefault();
            //save code
            const code = editorRef.current.getValue();
            setLoad(true);
            try {
                !load &&
                    request_node
                        .post('/code-practice', {
                            code,
                            user_id: userId,
                            practice_code_id: problem.id,
                            run: false,
                        })
                        .then((data) =>
                            setTimeout(() => {
                                setLoad(false);
                            }, 500),
                        )
                        .catch((e) => {
                            notification.error({ message: 'Lỗi hệ thống!' });
                            setLoad(false);
                        });
            } catch (e) {
                notification.error({ message: 'Lỗi hệ thống!' });
                setLoad(false);
            }
        }
    };
    const handleSolutionBtn = () => {
        setUserCode(editorRef.current.getValue());
        setEditorValue(problem.solution_code);
    };
    const handleCodeBtn = () => {
        if (isCorrect === true) {
            setEditorValue(userCode);
        }
    };
    useEffect(() => {
        console.log('setted');
        setIsCorrect(false);
    }, [problem.id]);
    return (
        <>
            <Splitter
                direction={SplitDirection.Vertical}
                minHeights={[200, 200]}
                initialSizes={[55, 45]}
                gutterClassName={styles.gutterSplitVertical}
            >
                <div className={styles.pythonEditor} onKeyDown={handleKeyDown}>
                    <div className={styles.header}>
                        <Row>
                            <Col span={10} className={styles.code}>
                                <FontAwesomeIcon icon={faCode} style={{ marginRight: 5, color: '#4bf17b' }} />
                                <div onClick={handleCodeBtn}>Code</div>
                            </Col>
                            <Col span={12} className={styles.code} style={{ justifyContent: 'end' }}>
                                {!isCorrect && (
                                    <Tooltip
                                        title="Sau khi hoàn thành bài tập bạn có thể xem tham khảo ở đây"
                                        placement="left"
                                    >
                                        <div style={{ marginLeft: 2, color: 'rgba(26, 26, 26, 0.5)' }}>Tham khảo</div>
                                    </Tooltip>
                                )}
                                {isCorrect && (
                                    <div
                                        style={{ marginLeft: 2, color: 'rgba(26, 26, 26)' }}
                                        onClick={handleSolutionBtn}
                                    >
                                        Tham khảo
                                    </div>
                                )}
                            </Col>
                            <Col span={2} className={styles.btnReload}>
                                <Tooltip title="Khôi phục đoạn mã về mặc định" placement="left">
                                    <FontAwesomeIcon
                                        icon={faArrowRotateRight}
                                        style={{ marginRight: 5, color: '#0000008c' }}
                                        className={styles.icon}
                                        onClick={() => setEditorValue(problem.available_code)}
                                    />
                                </Tooltip>
                            </Col>
                        </Row>
                    </div>
                    <PythonEditor
                        handleEditorDidMount={handleEditorDidMount}
                        height={'calc( 100% - 55px )'}
                        defaultValue={''}
                        theme="light_vs.json"
                        value={editorValue}
                    />
                    <div className={styles.footer}>
                        {!load && 'Nhấn Ctrl + S để lưu lại'}
                        {load && <Spin />}
                    </div>
                </div>
                <div className={styles.consoleWrapper}>
                    <Tabs
                        activeKey={tab}
                        items={itemsTab}
                        renderTabBar={renderTabBar}
                        onTabClick={(key) => setTab(key)}
                    />
                </div>
            </Splitter>
        </>
    );
};

export default UserInteract;
