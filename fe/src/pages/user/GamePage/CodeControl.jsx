import React, { memo, useRef, useState, useEffect } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import styles from './style.module.scss';
import { Col, Row } from 'antd';
import clsx from 'clsx';
import PythonEditor from 'components/PythonEditor';

function CodeControl({ sendMessage, level }) {
    const [play, setPlay] = useState(false);
    const [horseMoves, setHorseMoves] = useState('');
    const [codeMoves, setCodeMoves] = useState('#Move horse\n');
    const editorRef = useRef(null);
    const handleEditorDidMount = (editor, monaco) => {
        console.log(editor);
        editorRef.current = editor;
    };
    const CreateStates = () => {
        sendMessage('SonRice', 'CreateStates', horseMoves);
    };
    const reloadGame = () => {
        sendMessage('SonRice', 'ReLoadLevel');
        console.warn('Reloading', level);
    };

    useEffect(() => {
        sendMessage('GameManager', 'LoadLevel', level);
    });

    const handleAddItem = (name) => {
        if (!play) {
            let code = editorRef.current.getValue().trim() + '\n';
            let horse = horseMoves;
            switch (name) {
                case 'L':
                    code += 'horse.TurnLeft()';
                    horse += 'L';
                    break;
                case 'R':
                    code += 'horse.TurnRight()';
                    horse += 'R';
                    break;
                case 'T':
                    code += 'horse.TurnTop()';
                    horse += 'U';
                    break;
                case 'D':
                    code += 'horse.TurnDown()';
                    horse += 'D';
                    break;
                default:
                    break;
            }
            code += '\n';
            setCodeMoves(code);
            if (editorRef.current) {
                editorRef.current.setValue(code);
            }
            setHorseMoves(horse);
        }
    };
    return (
        <>
            <Col>
                <div className={styles.codeEditor}>
                    <PythonEditor handleEditorDidMount={handleEditorDidMount} langue_type="javascript" />
                </div>
                <Row className={styles.listControl}>
                    <div onClick={() => handleAddItem('L')} className={styles.itemList}>
                        <div>Left</div>
                    </div>
                    <div onClick={() => handleAddItem('R')} className={styles.itemList}>
                        <div>Right</div>
                    </div>

                    <div onClick={() => handleAddItem('T')} className={styles.itemList}>
                        <div>Top</div>
                    </div>
                    <div onClick={() => handleAddItem('D')} className={styles.itemList}>
                        <div>Down</div>
                    </div>
                </Row>
                <Row className={styles.buttonControl}>
                    <Col className={clsx([styles.excuteButton])}>
                        <img
                            src={play ? '/images/pause.png' : '/appimages/execute.png'}
                            alt="execute"
                            onClick={() => {
                                setPlay(true);
                                CreateStates();
                            }}
                        />
                    </Col>
                    <Col className={clsx([styles.excuteButton])}>
                        <img
                            src="/images/stop.png"
                            alt="stop"
                            onClick={() => {
                                setPlay(false);
                                reloadGame();
                            }}
                        />
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default CodeControl;
