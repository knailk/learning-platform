import React, { memo } from 'react';
import styles from './style.module.scss';
import { Editor } from '@monaco-editor/react';
const PythonEditor = ({ handleEditorDidMount, height = '100%', defaultValue = '#Here is some python text' }) => {
    // Save a reference to the original ResizeObserver
    const OriginalResizeObserver = window.ResizeObserver;

    // Create a new ResizeObserver constructor
    window.ResizeObserver = function (callback) {
        const wrappedCallback = (entries, observer) => {
            window.requestAnimationFrame(() => {
                callback(entries, observer);
            });
        };

        // Create an instance of the original ResizeObserver
        // with the wrapped callback
        return new OriginalResizeObserver(wrappedCallback);
    };

    // Copy over static methods, if any
    for (let staticMethod in OriginalResizeObserver) {
        if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
            window.ResizeObserver[staticMethod] = OriginalResizeObserver[staticMethod];
        }
    }
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
