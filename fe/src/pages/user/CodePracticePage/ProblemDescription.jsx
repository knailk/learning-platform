import React from 'react';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import './customStyle.scss';

const ProblemDescription = ({ problem }) => {
    return (
        <>
            <Row className={styles.problemDescription}>
                <div className="detailDescription" dangerouslySetInnerHTML={{ __html: problem.description }} />
            </Row>
        </>
    );
};

export default ProblemDescription;
