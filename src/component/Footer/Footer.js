import React from "react";
import ProwLogo from "../../assets/images/logo/prow_logo.jpg";
import FooterBar from "../Footer/footerBar/FooterBar";

import FacebookIcon from "../Icon/Facebook/FacebookIcon";
import InstagramIcon from "../Icon/Instagram/InstagramIcon";

import styles from "./Footer.module.scss";

const Footer = () => (
  <>
    <FooterBar />
    <div className={styles.wrapper}>
      <img className={styles.wrapperimg} src={ProwLogo} alt="Logo PROW" />
    </div>
    <div className={styles.copyright}>
      <span className={styles.copyrighttext}>
        &copy; 2020. Zielarska Wieś Blanki - All Rights Reserved.
      </span>
    </div>
    <div className={styles.social}>
      <FacebookIcon
        className={styles.socialicon}
        color="action"
        style={{ fontSize: 15 }}
      />
      <InstagramIcon
        className={styles.socialicon}
        color="action"
        style={{ fontSize: 15 }}
      />
    </div>
  </>
);

export default Footer;
