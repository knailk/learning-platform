import React, { Fragment, useCallback, useEffect } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
// import BoardControl from './BoardControl';
import CodeControl from './CodeControl';
import { Unity, useUnityContext } from 'react-unity-webgl';

const GameLayout = ({ level }) => {
    const {unityProvider, sendMessage, addEventListener, removeEventListener}=useUnityContext({
        loaderUrl: 'Unity/Build/Unity.loader.js',
        dataUrl: 'Unity/Build/Unity.data',
        frameworkUrl: 'Unity/Build/Unity.framework.js',
        codeUrl: 'Unity/Build/Unity.wasm',
    });
    
    const UnityCallReact = useCallback((message, value) => {
        // Win(): message: "WIN" value: 1
        // Lose(): message: "LOST" value: 0
        // NotEnough(): message: "NOTENOUGH" value: 2
        console.warn(`Message: ${message}, Value: ${value} => From Unity`);
    }, []);
    
    useEffect(() => {
        addEventListener("UnityCallReact", UnityCallReact);
        return () => {
            removeEventListener("UnityCallReact", UnityCallReact);
        };
    }, [addEventListener, removeEventListener, UnityCallReact]);

    return (
        <>
            <Row>
                <Col>
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
                <CodeControl sendMessage={sendMessage} level={level}/>
            </Row>
        </>
    );
};

export default GameLayout;
