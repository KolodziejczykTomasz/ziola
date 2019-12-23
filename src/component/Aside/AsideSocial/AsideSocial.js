import React from "react";

import styles from "../AsideSocial/AsideSocial.module.scss";
import { Divider, Segment } from "semantic-ui-react";
import FacebookIcon from "../../Icon/Facebook/FacebookIcon";
import InstagramIcon from "../../Icon/Instagram/InstagramIcon";

const AsideSocial = () => (
  <Segment className={styles.social}>
    <h3 className={styles.wrapperHeader}>SUBSKRYPCJE</h3>
    <Divider />
    <div className={styles.socialicon}>
      <FacebookIcon />
      <InstagramIcon />
    </div>
  </Segment>
);

export default AsideSocial;
