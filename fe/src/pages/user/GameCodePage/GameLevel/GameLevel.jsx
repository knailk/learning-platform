import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd';
import styles from './style.module.scss';
import CodeControl from './CodeControl';
import React, { Fragment, useCallback, useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const GameLevel = () => {
    const gameLevel = useParams().level;
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
        console.warn(`Message: ${message}, Value: ${value} => From Unity`);
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
                <Col span={16}>
                    <Row className={styles.header}>
                        <Col span={8}>
                            <div className={styles.btnBack}>QUAY LẠI</div>
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
                <Col span={8}>
                    <CodeControl sendMessage={sendMessage} level={gameLevel} />
                </Col>
            </Row>
        </>
    );
};
export default GameLevel;
