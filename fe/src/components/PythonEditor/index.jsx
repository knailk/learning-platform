import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import { Editor } from '@monaco-editor/react';
const PythonEditor = ({ handleEditorDidMount, height = '100%', defaultValue = '#Here is some python text' }) => {
    //SETTING FOR RESIZE OBSERVERS
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

    // SETTING FOR EDITOR
    // get theme for editor
    const [option, setOption] = useState({
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 0,
        showUnused: true,
    });
    const handleEditorWillMount = (monaco) => {
        //set theme heere
        console.log('will mount');
        fetch('themes/dark_vs.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((myJson) => {
                monaco.editor.defineTheme('dark-vs-custom', myJson);
                setOption({ ...option, theme: 'dark-vs-custom' });
            })
            .catch((err) => {
                console.log(err);
            });
    };
  
    return (
        <>
            <div className={styles.codeEditor} style={{ height: height }}>
                <Editor
                    width="100%"
                    height="100%"
                    language="python"
                    path="script.py"
                    defaultValue={defaultValue}
                    onMount={handleEditorDidMount}
                    beforeMount={handleEditorWillMount}
                    options={option}
                />
            </div>
        </>
    );
};

export default memo(PythonEditor);
