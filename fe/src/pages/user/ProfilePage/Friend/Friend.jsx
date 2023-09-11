import React from 'react';
import style from './style.module.scss';
import { Tabs } from 'antd';
import Follow from './Follow';
import common_style from '../style.module.scss';

const Friend = ({ follows, showTittle }) => {
    const items = [
        {
            key: '1',
            label: 'Đang theo dõi',
            children: (
                <div className={style.listFollow}>
                    {follows.followed_users.map((user, index) => {
                        return <Follow user={user} key={index} />;
                    })}
                </div>
            ),
        },
        {
            key: '2',
            label: 'Người theo dõi',
            children: (
                <div className={style.listFollow}>
                    {follows.following_users.map((user, index) => {
                        return <Follow user={user} key={index} />;
                    })}
                </div>
            ),
        },
    ];
    const styleTabs = {
        // border: '1px solid black',
        justifyContent: 'space-between',
    };
    return (
        <>
            <div className={style.friendWrapper}>
                {showTittle && (
                    <div className={common_style.titleProfile} style={{ marginBottom: '16px' }}>
                        Bạn bè
                    </div>
                )}

                <div className={style.tabWrapper}>
                    <Tabs
                        tabBarStyle={styleTabs}
                        centered
                        tabBarGutter={40}
                        defaultActiveKey="1"
                        items={items}
                        className={style.friendTab}
                    ></Tabs>
                </div>
            </div>
        </>
    );
};

export default Friend;
