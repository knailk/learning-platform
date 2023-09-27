import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Col, Popover, Row } from 'antd';
import PythonEditor from 'components/PythonEditor';
import PossibleMove from './PossibleMove';
import { request_node } from 'utils/http';

const possibleMove = [
    {
        name: 'hero.moveLeft(steps)',
        description: 'Di chuyển Thánh Gióng sang trái',
        example: 'hero.moveLeft(2)',
        param: 'move',
    },
    {
        name: 'hero.moveRight(steps)',
        description: 'Di chuyển Thánh Gióng sang phải',
        example: 'hero.moveRight(2)',
        param: 'move',
    },
    {
        name: 'hero.moveUp(steps)',
        description: 'Di chuyển Thánh Gióng lên trên',
        example: 'hero.moveUp(2)',
        param: 'move',
    },
    {
        name: 'hero.moveDown(steps)',
        description: 'Di chuyển Thánh Gióng xuống dưới',
        example: 'hero.moveDown(2)',
        param: 'move',
    },
    {
        name: 'hero.attack()',
        description: 'Điều khiển Thánh Gióng tấn công mục tiêu',
        example: 'hero.attack()',
        param: '',
    },
    {
        name: 'meet(hero, bandit)',
        description: 'Kiểm tra Thánh Gióng có gặp tên cướp hay không',
        example: 'meet(hero, bandit)',
        param: 'meet',
    },
];

function CodeControl({ sendMessage, level }) {
    const provider = useRef(null);
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
        const providerMonaco = monaco.languages.registerCompletionItemProvider('python', {
            provideCompletionItems: () => {
                let suggestions = [
                    {
                        label: 'hero.moveLeft()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveLeft(${1:})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveRight()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveRight(${1:})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveUp()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveUp(${1:})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.moveDown()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.moveDown(${1:})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'hero.attack()',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'hero.attack()',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'meet(hero, bandit)',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'meet(${1:hero}, ${2:bandit})',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'if',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'if ${1:condition}:\n    ${2:expression}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                    {
                        label: 'for range',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: 'for i in range(${1:range}):\n    ${3:expression}',
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    },
                ];
                return { suggestions: suggestions };
            },
        });
        provider.current = providerMonaco;
    };
    const CreateStates = async () => {
        try {
            let response = await request_node.post('/game/run', {
                code: editorRef.current.getValue(),
            });
            sendMessage('SonRice', 'CreateStates', response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const reloadGame = () => {
        sendMessage('SonRice', 'ReLoadLevel');
        console.warn('Reloading', level);
    };

    useEffect(() => {
        sendMessage('GameManager', 'LoadLevel', parseInt(level));
    });
    useEffect(() => {
        return () => {
            provider.current?.dispose();
        };
    }, []);
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
