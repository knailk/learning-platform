import React, { memo } from 'react';
import style from './style.module.scss';
import ItemSideBar from './ItemSideBar';
import { ROUTERS } from '../../../utils/router';
import { useLocation } from 'react-router-dom';
import { Popover } from 'antd';
import { SIDEBAR_TYPE } from 'utils/constant';

const SideBar = () => {
    const location = useLocation();
    const content = (
        <div>
            {ROUTERS.MENU_NAV_BAR.map((item, index) => {
                return (
                    SIDEBAR_TYPE.MORE == item.type && (
                        <ItemSideBar
                            key={index}
                            title={item.title}
                            url={item.path}
                            imgSrc={item.img}
                            isActive={item.path === location.pathname}
                            inMenu={false}
                        />
                    )
                );
            })}
        </div>
    );
    return (
        <>
            <div className={style.sideBar}>
                <div className={style.logo}>
                    <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
                        alt="asd"
                    />
                </div>
                <div className="nav"></div>
                <div className="navbar">
                    {ROUTERS.MENU_NAV_BAR.map((item, index) => {
                        return (
                            SIDEBAR_TYPE.SIDEBAR == item.type && (
                                <ItemSideBar
                                    key={index}
                                    title={item.title}
                                    url={item.path}
                                    imgSrc={item.img}
                                    isActive={item.path === location.pathname}
                                    inMenu={true}
                                />
                            )
                        );
                    })}
                    <Popover placement="right" content={content} trigger="click">
                        <div>
                            <ItemSideBar key="more" title="KHÁC" url="" imgSrc="/images/more.png" inMenu={true} />
                        </div>
                    </Popover>
                </div>
            </div>
        </>
    );
};

export default memo(SideBar);
