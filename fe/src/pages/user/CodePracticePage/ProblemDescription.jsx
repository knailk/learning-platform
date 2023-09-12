import React from 'react';
import { Col, Row } from 'antd';

const ProblemDescription = ({ problem }) => {
    return (
        <>
            <Row>
                <p>{problem.title}</p>
            </Row>
            <Row>
                <div dangerouslySetInnerHTML={{ __html: problem.description }} />
            </Row>
        </>
    );
};

export default ProblemDescription;
