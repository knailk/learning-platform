import React, { memo, useRef, useState } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';

const InputOutputDrawer = ({ ...props }) => {
    const getEditorValue = () => {
        alert(props.editorRef.current.getValue());
    };
    return (
        <>
            <div className={styles.inputOutputWrapper}>
                <div className={styles.outputTitle}>Output</div>
                <div className={styles.output}>
                    <textarea></textarea>
                </div>
                <div className={styles.input}>
                    <textarea placeholder="Input here"></textarea>
                </div>
                <div onClick={getEditorValue} className={styles.executeBtn}>
                    Compile and Execute
                </div>
            </div>
        </>
    );
};

export default memo(InputOutputDrawer);
