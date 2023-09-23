import React from 'react';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import './customStyle.scss';

const ProblemDescription = ({ problem }) => {
    return (
        <>
            <Row className={styles.problemDescription}>
                <Col>
                    <div className={styles.problemTitle}>{problem.title}</div>
                    <div className="detailDescription">
                        <div dangerouslySetInnerHTML={{ __html: problem.description }} />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default ProblemDescription;
