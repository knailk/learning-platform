import { useState } from 'react';
import { Row, Col } from 'antd';
import styles from './style.module.scss';
import clsx from 'clsx';
import ReactSplit, { SplitDirection } from '@devbookhq/splitter';
import UserInteract from './UserInteract';
const CodePractice = () => {
   

    return (
        <>
            <Row>
                <ReactSplit
                    direction={SplitDirection.Horizontal}
                    initialSizes={[60, 40]}
                    minWidths={[400, 400]}
                    gutterClassName={styles.gutterSplit}
                >
                    <Col className={styles.problemDetail}>
                        <div>test</div>
                    </Col>
                    <Col className={styles.userInteract}>
                        <UserInteract />
                    </Col>
                </ReactSplit>
            </Row>
        </>
    );
};

export default CodePractice;
