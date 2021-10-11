import React from "react";
import { Link } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";
import ProwLogo from "../../assets/images/logo/prow_logo.jpg";
import FooterBar from "../Footer/footerBar/FooterBar";

import FacebookIcon from "../Icon/Facebook/FacebookIcon";
import InstagramIcon from "../Icon/Instagram/InstagramIcon";

import styles from "./Footer.module.scss";

import AdminIcon from "../Icon/Admin/AdminIcon";

const Footer = () => (
  <Grid>
    <FooterBar />
    <Grid.Column computer={16} only="computer">
      <div className={styles.wrapper}>
        <img className={styles.wrapperimg} src={ProwLogo} alt="Logo PROW" />
      </div>
    </Grid.Column>

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
      <AdminIcon />
    </div>
    <Segment style={{ width: "100%" }}>
      <div className={styles.copyright}>
        <div>
          <Link to="/rodo" className={styles.footerRodoLink}>
            Polityka prywatności
          </Link>
        </div>
        <div>
          Copyright © {new Date().getFullYear()}. Zielarska Wieś Blanki - All
          Rights Reserved.
        </div>
        <div>
          Webside developed by
          <span style={{ color: "#d2ad36", fontWeight: 600 }}> NETTOM</span>
        </div>
      </div>
    </Segment>
  </Grid>
);

export default Footer;
