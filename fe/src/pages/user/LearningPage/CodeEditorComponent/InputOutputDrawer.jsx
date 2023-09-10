import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';

const InputOutputDrawer = ({ ...props }) => {
    const [output, setOutput] = useState('');
    const getEditorValue = () => {
        const code = props.editorRef.current.getValue();
        axios.post('http://localhost:80/python', { code }).then((data) => setOutput(data.data.data));
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
