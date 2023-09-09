import clsx from 'clsx';
import React, { memo, useState, useRef } from 'react';
import styles from './style.module.scss';
import { Drawer, Space } from 'antd';
import PythonEditor from './PythonEditor';
import InputOutputDrawer from './InputOutputDrawer';

const CodeEditorIcon = () => {
    const [open, setOpen] = useState(false);
    const [inputOutputDrawer, setInputOutputDrawer] = useState(false);
    const showDefaultDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        setInputOutputDrawer(false);
    };
    const showInputOutputDrawer = () => {
        setInputOutputDrawer(!inputOutputDrawer);
    };

    // handle button
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    return (
        <>
            <Space>
                <div className={styles.pythonIcon} onClick={showDefaultDrawer}>
                    <img src="/images/python_icon.png" alt="python_icon" />
                    <span className={styles.name}>Mở trình soạn thảo Code</span>
                </div>
            </Space>
            <Drawer
                title="Python Code Editor"
                placement="right"
                size="large"
                onClose={onClose}
                open={open}
                closable={false}
                push={false}
            >
                <PythonEditor handleEditorDidMount={handleEditorDidMount} />
                <div type="primary" onClick={showInputOutputDrawer} className={styles.terminalIcon}>
                    <img src="/images/terminal.png" alt="terminal" />
                </div>
            </Drawer>
            <Drawer
                headerStyle={{ display: 'none' }}
                width={400}
                closable={false}
                open={inputOutputDrawer}
                placement="left"
                mask={false}
                push={false}
            >
                <InputOutputDrawer editorRef={editorRef} />
            </Drawer>
        </>
    );
};
export default memo(CodeEditorIcon);
