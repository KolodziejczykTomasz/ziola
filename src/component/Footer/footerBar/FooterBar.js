import React from "react";
import { Grid } from "semantic-ui-react";
import footerBarData from "../../../data/footerBarData";

import styles from "../footerBar/FooterBar.module.scss";

const FooterBar = () => {
  const imageBar = footerBarData.map((item) => {
    return (
      <div className={styles.wrapper}>
        <li key={item.altText}>
          <img
            className={styles.wrapperimages}
            src={item.src}
            alt="Zdjęcie ziół"
          />
        </li>
      </div>
    );
  });
  return (
    <Grid>
      <Grid.Column computer={16} only="computer">
        <div className={styles.list}>{imageBar}</div>
      </Grid.Column>
    </Grid>
  );
};

export default FooterBar;
