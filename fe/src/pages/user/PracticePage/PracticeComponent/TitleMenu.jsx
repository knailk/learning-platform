import { memo } from 'react';
import styles from './style.module.scss';

const TitleMenu = ({ ...props }) => {
    return (
        <>
            <div className={styles.titleMenu}>{props.title}</div>
        </>
    );
};

export default memo(TitleMenu);
