import React from 'react';
import { Col, Row } from 'antd';
import styles from './style.module.scss';

const ProblemDescription = ({ problem }) => {
    return (
        <>
            <Row className={styles.problemDescription}>
                <div dangerouslySetInnerHTML={{ __html: problem.description }} />
            </Row>
        </>
    );
};

export default ProblemDescription;
