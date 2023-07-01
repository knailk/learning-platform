import { memo } from 'react';
import styles from './style.module.css';

const Header = () => {
    return (
        <>
            <h1 className={styles.header}>Header</h1>
        </>
    );
};

export default memo(Header);
