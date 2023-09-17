import { Link, useParams } from 'react-router-dom';
import { Row, Col, Modal, Progress, Space } from 'antd';
import styles from './style.module.scss';
import CodeControl from './CodeControl';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import clsx from 'clsx';
import ResultComponent from './ResultComponent/ResultComponent';
import NotEnough from './ResultComponent/NotEnough';

const GameLevel = () => {
    const gameLevel = useParams().level;
    const [open, setOpen] = useState(false);
    const [isWin, setIsWin] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
        loaderUrl: '/Unity/Build/Unity.loader.js',
        dataUrl: '/Unity/Build/Unity.data',
        frameworkUrl: '/Unity/Build/Unity.framework.js',
        codeUrl: '/Unity/Build/Unity.wasm',
    });

    const UnityCallReact = useCallback((message, value) => {
        // Win(): message: "WIN" value: 1
        // Lose(): message: "LOST" value: 0
        // NotEnough(): message: "NOTENOUGH" value: 2
        if (message !== 'WIN') {
            setIsWin(false);
        } else {
            setIsWin(true);
        }
        showModal();
        console.log(`Message: ${message}, Value: ${value} => From Unity`);
    }, []);

    useEffect(() => {
        addEventListener('UnityCallReact', UnityCallReact);
        return () => {
            removeEventListener('UnityCallReact', UnityCallReact);
        };
    }, [addEventListener, removeEventListener, UnityCallReact]);

    return (
        <>
            <Row className={styles.container}>
                <Col span={17}>
                    <Row className={styles.header}>
                        <Col span={8}>
                            <Link to={`/play/map`}>
                                <div className={styles.btnBack}>QUAY LẠI</div>
                            </Link>
                            {/* <a href="/play/map">
                                <div className={styles.btnBack}>QUAY LẠI</div>
                            </a> */}
                        </Col>
                        <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className={styles.titleHeader}>ShadowGuard</div>
                        </Col>
                        <Col span={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className={styles.levelNumber}>Màn 1</div>
                        </Col>
                    </Row>
                    <Row className={styles.gameLayout}>
                        <Fragment>
                            <Unity
                                style={{
                                    width: '1024px',
                                    height: '576px',
                                    justifySelf: 'center',
                                    alignSelf: 'center',
                                }}
                                unityProvider={unityProvider}
                            />
                        </Fragment>
                    </Row>
                    <Col></Col>
                </Col>
                <Col span={7}>
                    <CodeControl sendMessage={sendMessage} level={gameLevel} />
                </Col>
            </Row>
            <Modal open={open} footer={null} closeIcon={false} className="resultModalContainer" style={{ top: -20 }}>
                <div className={styles.resultModal} style={{ height: isWin ? 100 : 200 }}>
                    <div className={styles.modalTitle}>{isWin ? 'THẮNG' : 'THẤT BẠI'}</div>
                    {isWin && <ResultComponent mapLevel={1} exp={10} score={10} userLevel={2} progress={70} />}
                    {!isWin && <NotEnough />}
                    <div className={styles.btnWrapper}>
                        <div className={styles.btnClose} onClick={handleCancel}>
                            ĐÓNG
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default GameLevel;
