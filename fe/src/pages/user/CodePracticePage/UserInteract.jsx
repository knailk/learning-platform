import React, { useState } from 'react';
import { Tabs, Spin, notification } from 'antd';
import PythonEditor from 'components/PythonEditor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCase from './TabComponent/TestCase';
import Result from './TabComponent/Result';
import styles from './style.module.scss';
import './customStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { request_node } from 'utils/http';

const UserInteract = ({ editorRef, problem, handleEditorDidMount, defaultEditorValue, tab, setTab }) => {
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const [load, setLoad] = useState(false);
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
                    <Result />
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
        if (e.ctrlKey && e.key === 's') {
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
                                setTab('2');
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

    return (
        <>
            <Splitter direction={SplitDirection.Vertical} minHeights={[200, 200]} initialSizes={[55, 45]}>
                <div className={styles.pythonEditor} onKeyDown={handleKeyDown}>
                    <div className={styles.header}>
                        <FontAwesomeIcon icon={faCode} style={{ marginRight: 5, color: '#4bf17b' }} />
                        Code
                    </div>
                    <PythonEditor
                        handleEditorDidMount={handleEditorDidMount}
                        height={'calc( 100% - 55px )'}
                        defaultValue={defaultEditorValue}
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
