import { Button } from 'antd';
import { memo } from 'react';
import style from './style.module.css';

const ItemSideBar = ({ children, ...props }) => {
    return (
        <>
            <Button href={props.url} className={style.itemNavBar}>
                {props.title}
            </Button>
        </>
    );
};

export default memo(ItemSideBar);
