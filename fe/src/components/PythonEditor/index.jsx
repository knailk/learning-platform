import React, { memo } from 'react';
import styles from './style.module.scss';
import { Editor } from '@monaco-editor/react';
const PythonEditor = ({ handleEditorDidMount, height = '100%', defaultValue = '#Here is some python text' }) => {
    const options = {
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 0,
        showUnused: true,
    };

    return (
        <>
            <div className={styles.codeEditor} style={{ height: height }}>
                <Editor
                    width="100%"
                    height="100%"
                    theme="vs-dark"
                    defaultLanguage="python"
                    path="script.py"
                    defaultValue={defaultValue}
                    onMount={handleEditorDidMount}
                    options={options}
                />
            </div>
        </>
    );
};

export default memo(PythonEditor);
