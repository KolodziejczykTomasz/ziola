import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import styles from "../AsideSocial/AsideSocial.module.scss";
import { Divider, Segment } from "semantic-ui-react";

const AsideSocial = () => (
  <Segment className={styles.social}>
    <h3>SUBSKRYPCJE</h3>
    <Divider />
    <div className={styles.socialicon}>
      <FacebookIcon color="action" style={{ fontSize: 50 }} />
      <InstagramIcon color="action" style={{ fontSize: 50 }} />
    </div>
  </Segment>
);

export default AsideSocial;
