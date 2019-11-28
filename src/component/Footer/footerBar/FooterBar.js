import React from 'react';
import footerBarData from '../../../data/footerBarData';

import styles from '../footerBar/FooterBar.module.scss';

const FooterBar = () => {
    const imageBar = footerBarData.map((item) => {
        return (
            <li  key={item.altText}>
                <img className={styles.images} src={item.src} alt={item.altText} />
            </li>
        );
    });
    return (
        <>
            <div className={styles.list}>
                {imageBar}
            </div>
        </>
    );
};

export default FooterBar;