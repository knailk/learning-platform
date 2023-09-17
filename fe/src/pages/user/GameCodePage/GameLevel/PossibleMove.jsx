import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Col, Popover, Row } from 'antd';

const PossibleMove = ({ item }) => {
    const content = (
        <div className={styles.content}>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    return (
        <Popover content={content} placement="left">
            <div className={styles.possibleItem}>{item}</div>
        </Popover>
    );
};

export default PossibleMove;
