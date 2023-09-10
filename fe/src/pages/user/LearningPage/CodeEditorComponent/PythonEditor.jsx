// import clsx from 'clsx';
import React, { memo, useRef, useState } from 'react';
import styles from './style.module.scss';
import { Editor } from '@monaco-editor/react';
const PythonEditor = ({ handleEditorDidMount, height = '100%' }) => {
    return (
        <>
            <div className={styles.codeEditor} style={{ height: height }}>
                <Editor
                    width="100%"
                    height="100%"
                    theme="vs-dark"
                    defaultLanguage="python"
                    path="script.py"
                    defaultValue="#Here is some python text"
                    onMount={handleEditorDidMount}
                />
            </div>
        </>
    );
};

export default memo(PythonEditor);
