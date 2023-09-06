import React, { memo } from 'react';
import style from './style.module.scss';
import ItemSideBar from './ItemSideBar';
import { ROUTERS } from '../../../utils/router';
import { useLocation } from 'react-router-dom';
import { Popover } from 'antd';

const SideBar = () => {
    const location = useLocation();
    const content = (
        <div>
            {ROUTERS.MENU_NAV_BAR.map((item, index) => {
                return (
                    !item.inMenu && (
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
                <div className={style.logo}>LOGO</div>
                <div className="nav"></div>
                <div className="navbar">
                    {ROUTERS.MENU_NAV_BAR.map((item, index) => {
                        return (
                            item.inMenu && (
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
                            <ItemSideBar key="more" title="KHÁC" url="" imgSrc="images/more.png" inMenu={true} />
                        </div>
                    </Popover>
                </div>
            </div>
        </>
    );
};

export default memo(SideBar);
