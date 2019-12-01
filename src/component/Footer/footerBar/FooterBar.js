import React from "react";
import footerBarData from "../../../data/footerBarData";

import styles from "../footerBar/FooterBar.module.scss";

const FooterBar = () => {
  const imageBar = footerBarData.map(item => {
    return (
      <div className={styles.wrapper} >
        <li key={item.altText}>
          <img className={styles.wrapperimages} src={item.src} alt={item.altText} />
        </li>
      </div>
    );
  });
  return (
    <>
      <div className={styles.list}>{imageBar}</div>
    </>
  );
};

export default FooterBar;
