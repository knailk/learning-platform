import { notification } from 'antd';
import React, { memo } from 'react';
import style from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import request from 'utils/http';
import Cookies from 'universal-cookie';

const ItemSideBar = ({ children, ...props }) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await request.get('auth/logout');
            cookies.remove('verify');
            cookies.remove('email');
            cookies.remove('is_login');
            localStorage.removeItem('user_info');
            navigate('/login');
        } catch (error) {
            console.log(error);
            notification.error({
                message: 'Đăng nhập thất bại',
                description: 'Tên đăng nhập hoặc mật khẩu không hợp lệ',
            });
        }
    };

    return (
        <>
            <Link key={props.key} to={props.url}>
                {props.inMenu && (
                    <div
                        className={clsx(style.itemNavBar, {
                            [style.itemActive]: props.isActive,
                        })}
                    >
                        <div className={style.imgItem}>
                            <img alt="img" src={props.imgSrc} width={30} />
                        </div>
                        <span className={style.titleItem}>{props.title}</span>
                    </div>
                )}
                {!props.inMenu && (
                    <div className={clsx(style.itemNavBarMore)}>
                        <span className={style.titleItemMore} onClick={() => props.url === '/logout' && handleLogout()}>
                            {props.title}
                        </span>
                    </div>
                )}
            </Link>
        </>
    );
};

export default memo(ItemSideBar);
