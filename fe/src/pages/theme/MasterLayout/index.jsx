import SideBar from '../SideBar';
import React, { memo } from 'react';
import { Layout } from 'antd';
import style from './style.module.css';
const MasterLayout = ({ children, ...props }) => {
    return (
        <>
            <Layout hasSider style={{ backgroundColor: '#F2F5F8' }}>
                <SideBar ></SideBar>
                <Layout className={style.container} style={{ backgroundColor: '#E6F7FF' }}>
                    {children}
                </Layout>
            </Layout>
        </>
    );
};

export default memo(MasterLayout);
