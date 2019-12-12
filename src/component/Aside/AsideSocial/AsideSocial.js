import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import styles from "../AsideSocial/AsideSocial.module.scss";

const AsideSocial = () => (
  <div className={styles.social}>
    <div className={styles.socialicon}>
      <FacebookIcon color="action" style={{ fontSize: 50 }} />
      <InstagramIcon color="action" style={{ fontSize: 50 }} />
    </div>
  </div>
);

export default AsideSocial;
