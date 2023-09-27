import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';
import { notification } from 'antd';
import { request_node } from 'utils/http';

const InputOutputDrawer = ({ output }) => {
    return (
        <>
            <div className={styles.outputWrapper}>
                <div className={styles.outputHeader}>Output</div>
                <div className={styles.outputContent}>
                    <pre>{output}</pre>
                    {/* <textarea value={output} disabled></textarea> */}
                </div>
                {/* <div className={styles.executeBtnWrapper}>
                    <div type="primary" onClick={getEditorValue} className={styles.executeBtn}>
                        Run
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default memo(InputOutputDrawer);
