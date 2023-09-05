// import clsx from 'clsx';
import React, { memo, useRef, useState } from 'react';
import styles from './style.module.scss';
import { Editor } from '@monaco-editor/react';
const PythonEditor = ({ ...props }) => {
    return (
        <>
            <div className={styles.codeEditor}>
                <Editor
                    width="100%"
                    height="100%"
                    theme="vs-dark"
                    defaultLanguage="python"
                    path="script.py"
                    defaultValue="#Here is some python text"
                    onMount={props.handleEditorDidMount}
                />
            </div>
        </>
    );
};

export default memo(PythonEditor);
