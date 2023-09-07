import React, { memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './style.module.scss';
import clsx from 'clsx';
import { Row, Col, Menu } from 'antd';
import TitleMenu from './TitleMenu';

const LecturePractice = () => {
    const lessonId = useParams().lesson_id;
    const onClick = (e) => {
        console.log('click ', e);
    };
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem(<TitleMenu title="Navigation One" />, 'sub1', null, [
            getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
            getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
        ]),
        getItem(<TitleMenu title="Navigation Two" />, 'sub2', null, [
            getItem('Option 5', '5'),
            getItem('Option 6', '6'),
            getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
        ]),
        {
            type: 'divider',
        },
        getItem(<TitleMenu title="Navigation Three" />, 'sub4', null, [
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
            getItem('Option 11', '11'),
            getItem('Option 12', '12'),
        ]),
    ];
    return (
        <>
            <div className={clsx(styles.content)}>
                <Link to="/practice" className={styles.cta}>
                    <span className={styles.backButton}>Quay về</span>
                    <img width={15} src="/images/Back_arrow.svg" alt="back" />
                </Link>
                <Row>
                    <Col span={20}>content</Col>
                    <Col span={4}>
                        <Menu
                            onClick={onClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            items={items}
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default memo(LecturePractice);
