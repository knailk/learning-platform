import clsx from 'clsx';
import React, { memo, useState, useRef } from 'react';
import styles from './style.module.scss';
import './custom.scss';
import { Col, Drawer, Row, Space, Spin, Tooltip, notification } from 'antd';
import PythonEditor from 'components/PythonEditor';
import InputOutputDrawer from './InputOutputDrawer';
import Splitter, { SplitDirection } from '@devbookhq/splitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExpand, faPlay } from '@fortawesome/free-solid-svg-icons';
import { request_node } from 'utils/http';

const CodeEditorIcon = () => {
    const [open, setOpen] = useState(false);
    const [output, setOutput] = useState('');
    const [load, setLoad] = useState(false);
    const [size, setSize] = useState('350px');
    const userId = localStorage.getItem('user_info') ? JSON.parse(localStorage.getItem('user_info')).id : 'temp';
    const editorRef = useRef(null);
    const getEditorValue = () => {
        setLoad(true);
        const code = editorRef.current.getValue();
        try {
            request_node
                .post('/python', { code, user_id: userId })
                .then((data) => {
                    setTimeout(() => {
                        setOutput(data.data.data);
                        setLoad(false);
                    }, 500);
                })
                .catch((e) => {
                    setTimeout(() => {
                        notification.error({ message: 'Lỗi hệ thống!' });
                        setLoad(false);
                    }, 500);
                });
        } catch (error) {
            notification.error({ message: 'Lỗi hệ thống!' });
        }
    };
    const showDefaultDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'F5') {
            e.preventDefault();
            getEditorValue();
        }
    };

    // handle button
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    };

    return (
        <>
            <Space>
                <div className={styles.pythonIcon} onClick={showDefaultDrawer}>
                    <img src="/images/python_icon.png" alt="python_icon" />
                    <span className={styles.name}>Mở trình soạn thảo Code</span>
                </div>
            </Space>
            <Drawer
                placement="right"
                width={size}
                onClose={onClose}
                open={open}
                closable={false}
                push={false}
                bodyStyle={{ padding: '20px 18px 18px 18px' }}
            >
                <Splitter
                    direction={SplitDirection.Vertical}
                    minHeights={[200, 200]}
                    initialSizes={[70, 30]}
                    gutterClassName={styles.gutterSplitVertical}
                >
                    <div className={styles.pythonEditor} onKeyDown={handleKeyDown}>
                        <div className={styles.header}>
                            <Row>
                                <Col span={3} className={styles.code}>
                                    <FontAwesomeIcon icon={faCode} style={{ marginRight: 5, color: '#4bf17b' }} />
                                    Code
                                </Col>
                                <Col span={19} className={clsx([styles.btnPlay, 'btnPlay'])}>
                                    <div onClick={getEditorValue}>
                                        <Tooltip title="Khôi phục đoạn mã về mặc định" placement="left">
                                            {load && <Spin />}
                                            {!load && (
                                                <FontAwesomeIcon
                                                    icon={faPlay}
                                                    style={{ color: '#ffffffe6' }}
                                                    className={styles.icon}
                                                />
                                            )}
                                            <p style={{ display: 'inline-block', marginLeft: 5 }}>Chạy đoạn mã</p>
                                        </Tooltip>
                                    </div>
                                </Col>
                                <Col span={2} className={styles.btnExpand}>
                                    <div onClick={() => setSize(size === '350px' ? '600px' : '350px')}>
                                        <FontAwesomeIcon
                                            icon={faExpand}
                                            style={{ color: '#ffffffe6' }}
                                            className={styles.icon}
                                        />
                                    </div>
                                    {/* <p style={{ display: 'inline-block', marginLeft: 5 }}>Mở rộng</p> */}
                                </Col>
                            </Row>
                        </div>
                        <PythonEditor handleEditorDidMount={handleEditorDidMount} height={'calc( 100% - 55px )'} />
                        <div className={styles.footer}>Nhấn nút Chạy đoạn mã hoặc Ctrl + F5 để chạy</div>
                    </div>
                    <InputOutputDrawer output={output} />
                </Splitter>
            </Drawer>
        </>
    );
};
export default memo(CodeEditorIcon);
