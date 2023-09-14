import React from 'react';
import { Row, Tabs } from 'antd';
import PythonEditor from 'components/PythonEditor';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import TestCase from './TabComponent/TestCase';
import styles from './style.module.scss';
import './customStyle.scss';

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
    const renderTabBar = (props, DefaultTabBar) => (
        <div className={styles.tabBarHeader}>
            <DefaultTabBar {...props} style={{}} />
        </div>
    );
    return (
        <>
            <Splitter direction={SplitDirection.Vertical} minHeights={[200, 200]} initialSizes={[60, 40]}>
                <div className={styles.pythonEditor}>
                    <div className={styles.header}>header</div>
                    <PythonEditor handleEditorDidMount={handleEditorDidMount} height={'calc( 100% - 50px )'} />
                    <div className={styles.footer}>header</div>
                </div>
                <div className={styles.consoleWrapper}>
                    <Tabs defaultActiveKey="1" items={itemsTab} renderTabBar={renderTabBar} />
                </div>
                {/* <Row className={styles.consoleWrapper}></Row> */}
            </Splitter>
        </>
    );
};

export default UserInteract;
