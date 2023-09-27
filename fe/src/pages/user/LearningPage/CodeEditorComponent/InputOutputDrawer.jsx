import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import axios from 'axios';
import { Col, Row, notification } from 'antd';
import { request_node } from 'utils/http';

const InputOutputDrawer = ({ output }) => {
    return (
        <>
            <div className={styles.outputWrapper}>
                <div className={styles.outputHeader}>Output</div>
                <div className={styles.outputContent}>
                    {output.status === 'success' && <pre>{output.value}</pre>}
                    {output.status === 'error' && (
                        <Col className={styles.failedResultWrapper}>
                            <Row className={styles.errorTitle}>{output.value.title}</Row>
                            <Row className={styles.errorDetail}>
                                <pre>{output.value.message}</pre>
                            </Row>
                        </Col>
                    )}
                </div>
            </div>
        </>
    );
};

export default memo(InputOutputDrawer);
