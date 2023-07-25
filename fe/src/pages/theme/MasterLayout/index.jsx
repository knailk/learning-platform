import SideBar from '../SideBar';
import React, { memo } from 'react';
import { Layout } from 'antd';
import style from './style.module.css';
const MasterLayout = ({ children, ...props }) => {
    return (
        <>
            <Layout hasSider style={{ backgroundColor: 'white' }}>
                <SideBar></SideBar>
                <Layout className={style.container} style={{ backgroundColor: 'white' }}>
                    {children}
                </Layout>
            </Layout>
        </>
    );
};

export default memo(MasterLayout);
