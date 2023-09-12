import { useState } from 'react';
import clsx from 'clsx';
import { Col, Row } from 'antd';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
const TestCase = () => {
    //useState for data
    const [testCase, setTestCase] = useState({ id: 0, input: '0', target: '0' });
    const [allTestCases, setAllTestCases] = useState([testCase]);
    //useState for style
    const [showDelete, setShowDelete] = useState(-1);
    //function handle buttons
    const handleAddBtn = () => {
        setTestCase({ ...testCase, id: testCase.id + 1 });
        setAllTestCases([...allTestCases, { ...testCase, id: testCase.id + 1 }]);
    };
    const handleDeleteBtn = (id) => {
        const temp = allTestCases.filter((testCase) => testCase.id !== id);
        setAllTestCases(temp);
    };
    return (
        <>
            <Col>
                <Row justify={'start'} style={{ width: '100%' }}>
                    {allTestCases.map((value, idx) => {
                        return (
                            <Col
                                key={value.id}
                                className={clsx([
                                    styles.itemTestCase,
                                    { [styles.itemTestCaseActive]: value.id === testCase.id },
                                ])}
                                onMouseMove={() => setShowDelete(value.id)}
                                onMouseLeave={() => setShowDelete(-1)}
                                onClick={() => setTestCase(value)}
                            >
                                Case {idx + 1}
                                {showDelete === value.id && allTestCases.length !== 1 && (
                                    <div className={styles.deleteTestCaseBtn} onClick={() => handleDeleteBtn(value.id)}>
                                        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
                                    </div>
                                )}
                            </Col>
                        );
                    })}
                    {allTestCases.length < 8 && (
                        <div className={styles.addTestCaseBtn}>
                            <FontAwesomeIcon icon={faPlus} className={styles.addIcon} onClick={handleAddBtn} />
                        </div>
                    )}
                </Row>
                <Row>input</Row>
                <Row>target</Row>
            </Col>
        </>
    );
};

export default TestCase;
