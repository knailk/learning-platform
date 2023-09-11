import { Col, Row } from 'antd';
import { useState } from 'react';

const TestCase = () => {
    const [testCases, setTestCases] = useState([]);
    return (
        <>
            <Col>
                <Row>
                    <div>Case 1</div>
                </Row>
                <Row>input</Row>
                <Row>target</Row>
            </Col>
        </>
    );
};

export default TestCase;
