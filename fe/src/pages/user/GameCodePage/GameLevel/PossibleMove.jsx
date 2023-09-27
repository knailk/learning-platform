import React, { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import { Col, Popover, Row } from 'antd';

const PossibleMove = ({ item }) => {
    const content = (
        <div className={styles.content}>
            <div className={styles.header}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.example}>
                <p>Ví dụ:</p>
                <code>{item.example}</code>
            </div>
            {item.param === 'move' && (
                <div className={styles.param}>
                    <p style={{ fontWeight: 500 }}>Tham số truyền vào</p>
                    <code>steps</code>:<code>number</code>
                    Giá trị mặc định là 1<p>Số steps là số lần di chuyển của Thánh Gióng khi gặp một đối tượng.</p>
                    <p>Ví dụ khi Thánh Gióng đang di chuyển tới tấm bia được tính là một lần di chuyển.</p>
                </div>
            )}
            {item.param === 'meet' && (
                <div className={styles.param}>
                    <p style={{ fontWeight: 500 }}>Tham số truyền vào</p>
                    <p>
                        <code>hero</code>:<code>object</code>
                    </p>
                    <p>
                        <code>bandit</code>:<code>object</code>
                    </p>
                    Nếu Thánh Gióng gặp tên cướp sẽ trả về True, ngược lại False
                </div>
            )}
        </div>
    );
    return (
        <>
            <Popover content={content} placement="left">
                <div className={styles.possibleItem}>{item.name}</div>
            </Popover>
        </>
    );
};

export default PossibleMove;
