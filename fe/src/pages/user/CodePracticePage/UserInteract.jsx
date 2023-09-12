import React from 'react';
import { Row, Tabs } from 'antd';
import styles from './style.module.scss';
import PythonEditor from 'components/PythonEditor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCase from './TabComponent/TestCase';

const UserInteract = ({ handleEditorDidMount }) => {
    const itemsTab = [
        {
            key: '1',
            label: 'Test case',
            children: (
                <div className={styles.contentConsole}>
                    <TestCase />
                </div>
            ),
        },
        {
            key: '2',
            label: 'Kết quả',
            children: <div className={styles.contentConsole}>Content of Tab Pane 2</div>,
        },
    ];

    return (
        <>
            <Splitter direction={SplitDirection.Vertical} minHeights={[200, 200]} initialSizes={[60, 40]}>
                <PythonEditor handleEditorDidMount={handleEditorDidMount} />
                <Row className={styles.consoleWrapper}>
                    <Tabs defaultActiveKey="1" items={itemsTab} />
                </Row>
            </Splitter>
        </>
    );
};

export default UserInteract;
