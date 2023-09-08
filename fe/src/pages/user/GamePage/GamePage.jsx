import React, { memo, useState } from 'react';
import styles from './style.module.scss';
import { Button, Drawer, Space } from 'antd';
import GameLayout from './GameLayout';
const GamePage = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const fullWidth = global.window.innerWidth;
    return (
        <>
            <Space>
                <Button type="primary" onClick={showDefaultDrawer} id="top">
                    Game
                </Button>
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
                <GameLayout />
            </Drawer>
        </>
    );
};

export default memo(GamePage);
