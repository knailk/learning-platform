import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';
import { notification } from 'antd';
import { request_node } from 'utils/http';

const InputOutputDrawer = ({ ...props }) => {
    const [output, setOutput] = useState('');
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const getEditorValue = () => {
        const code = props.editorRef.current.getValue();
        try {
            request_node
                .post('/python', { code, user_id: userId })
                .then((data) => setOutput(data.data.data))
                .catch((e) => {
                    notification.error({ message: 'Lỗi hệ thống!' });
                });
        } catch (error) {
            notification.error({ message: 'Lỗi hệ thống!' });
        }
    };
    return (
        <>
            <div className={styles.inputOutputWrapper}>
                <div className={styles.outputTitle}>Output</div>
                <div className={styles.output}>
                    <textarea value={output} disabled></textarea>
                </div>
                {/* <div className={styles.input}>
                    <textarea placeholder="Input here"></textarea>
                </div> */}
                {/* <div onClick={getEditorValue} className={styles.executeBtn}>
                    Compile and Execute
                </div> */}
                <div className={styles.executeBtnWrapper}>
                    <div type="primary" onClick={getEditorValue} className={styles.executeBtn}>
                        Run
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(InputOutputDrawer);
