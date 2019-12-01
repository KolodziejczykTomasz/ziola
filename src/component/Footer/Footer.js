import React from "react";
import ProwLogo from "../../assets/images/logo/prow_logo.jpg";
import FooterBar from "../Footer/footerBar/FooterBar";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import styles from "./Footer.module.scss"

const Footer = () => (
  <>
    <FooterBar />
    <div className={styles.wrapper} > 
      <img className={styles.wrapperimg} src={ProwLogo} alt="Logo PROW" />
    </div>
    <div className={styles.copyright} >
      
      <span className={styles.copyrighttext} >©2017. Zielarska Wieś Blanki - All Rights Reserved.</span>
    </div>
    <div className={styles.social} >
      <FacebookIcon className={styles.socialicon} color="action" style={{ fontSize: 30 }} />
      <InstagramIcon className={styles.socialicon} color="action" style={{ fontSize: 30 }} />
    </div>
  </>
);

export default Footer;
