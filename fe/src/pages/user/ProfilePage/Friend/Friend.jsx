import style from './Friend.module.scss';
import { Tabs } from 'antd';
import Follow from './Follow';
const Friend = () => {
    const items = [
        {
            key: '1',
            label: 'Đang theo dõi',
            children: <Follow />,
        },
        {
            key: '2',
            label: 'Người theo dõi',
            children: `Content of Tab Pane 2`,
        },
    ];
    const styleTabs = {
        border: '1px solid black',
    };
    return (
        <>
            <div classNames={style.friendWrapper}>
                <div className="titleProfile">Bạn bè</div>
                <Tabs tabBarStyle={styleTabs} centered tabBarGutter={16} defaultActiveKey="1" items={items} className={style.friendTab}></Tabs>
            </div>
        </>
    );
};

export default Friend;
