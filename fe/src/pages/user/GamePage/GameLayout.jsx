import React, { memo, Fragment } from 'react';
import styles from './style.module.scss';
import { Row, Col } from 'antd';
// import BoardControl from './BoardControl';
import CodeControl from './CodeControl';
import { Unity, useUnityContext } from 'react-unity-webgl';


const GameLayout = () => {
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: 'Build/Output.loader.js',
        dataUrl: 'Build/Output.data',
        frameworkUrl: 'Build/Output.framework.js',
        codeUrl: 'Build/Output.wasm',
    });

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
                <CodeControl sendMessage={sendMessage} />
            </Row>
        </>
    );
};

export default memo(GameLayout);
