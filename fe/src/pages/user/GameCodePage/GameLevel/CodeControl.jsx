import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Col, Popover, Row } from 'antd';
import PythonEditor from 'components/PythonEditor';
import PossibleMove from './PossibleMove';

const possibleMove = ['hero.moveLeft(steps)', 'hero.moveRight(steps)', 'hero.moveUp(steps)', 'hero.moveDown(steps)'];

function CodeControl({ sendMessage, level }) {
    const [play, setPlay] = useState(false);
    const [horseMoves, setHorseMoves] = useState('');
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        console.log(editor);
        editorRef.current = editor;
        monaco.languages.registerCompletionItemProvider('python', {
            provideCompletionItems: () => {
                let suggestions = [
                    {
                        label: 'hero.moveLeft()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveLeft(${1:steps})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveRight()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveRight(${1:steps})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveUp()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveUp(${1:steps})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveDown()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveDown(${1:steps})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                ];
                return { suggestions: suggestions };
            },
        });
    };
    const CreateStates = () => {
        sendMessage('SonRice', 'CreateStates', 'RUR');
    };
    const reloadGame = () => {
        sendMessage('SonRice', 'ReLoadLevel');
        console.warn('Reloading', level);
    };

    useEffect(() => {
        sendMessage('GameManager', 'LoadLevel', parseInt(level));
    });

    return (
        <>
            <div className={styles.codeControlWrapper}>
                <div className={styles.header}>
                    <div className={styles.pythonIcon}></div>
                    Điều khiển Thánh Gióng bằng các câu lệnh
                </div>
                <div className={styles.codeEditor}>
                    <PythonEditor
                        handleEditorDidMount={handleEditorDidMount}
                        langue_type="javascript"
                        width={'calc( 100% - 55px )'}
                        theme={'game.json'}
                    />
                    <div className={styles.buttonWrapper}>
                        <div className={styles.playBtn} onClick={CreateStates}>
                            CHẠY
                        </div>
                        <div className={styles.reloadBtn} onClick={reloadGame}>
                            LOAD LẠI
                        </div>
                    </div>
                </div>
                <div className={styles.possibleMoveWrapper}>
                    <div className={styles.possibleMove}>
                        {possibleMove.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <PossibleMove item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CodeControl;
