import React from 'react';
import footerBarData from '../../data/footerBarData';

const FooterBar = () => {
    const imageBar = footerBarData.map((item) => {
        return (
            <li key={item.altText}>
                <img src={item.src} alt={item.altText} />
            </li>
        );
    });
    return (
        <>
            <div>
                {imageBar}
            </div>
        </>
    );
};

export default FooterBar;