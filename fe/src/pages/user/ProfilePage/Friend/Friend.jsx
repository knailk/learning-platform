import style from './Friend.module.scss';
import { Tabs } from 'antd';
import Follow from './Follow';
const Friend = () => {
    const items = [
        {
            key: '1',
            label: 'Đang theo dõi',
            children: (
                <div className={style.listFollow}>
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                    <Follow name="Nguyễn Danh Tiến Dũng" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1201162690/cP2eBdsTRR/xlarge" />
                </div>
            ),
        },
        {
            key: '2',
            label: 'Người theo dõi',
            children: (
                <div className={style.listFollow}>
                    <Follow name="Trần Minh Toàn" level="Level 12" avatar="https://simg-ssl.duolingo.com/avatars/1164864020/I4X9TktOvb/xxlarge" />
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
            <div classNames={style.friendWrapper}>
                <div className="titleProfile" style={{ marginBottom: '16px' }}>
                    Bạn bè
                </div>
                <div className={style.tabWrapper}>
                    <Tabs tabBarStyle={styleTabs} centered tabBarGutter={40} defaultActiveKey="1" items={items} className={style.friendTab}></Tabs>
                </div>
            </div>
        </>
    );
};

export default Friend;
