import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import { Button, Drawer, Space } from 'antd';
import GameLayout from './GameLayout';
const GamePage = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const [gameLevel, setGameLevel] = useState(1);
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const level = [1, 2, 3];
    const onClose = () => {
        setOpen(false);
    };
    const fullWidth = global.window.innerWidth;
    return (
        <>
            <Space>
                {level.map((item, idx) => {
                    return (
                        <Button
                            type="primary"
                            onClick={() => {
                                showDefaultDrawer();
                                setGameLevel(item);
                            }}
                            id="top"
                            key={idx}
                        >
                            Level {item}
                        </Button>
                    );
                })}
            </Space>
            <Drawer
                className={styles.gameDrawerWrapper}
                width={fullWidth}
                title={`Game Layout`}
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
            >
                <GameLayout level={gameLevel} />
            </Drawer>
        </>
    );
};

export default memo(GamePage);
