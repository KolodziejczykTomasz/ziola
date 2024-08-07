import React from "react";
import { Divider, Segment } from "semantic-ui-react";
import PostIcon from "../../Icon/Post/PostIcon";

import styles from "./ListItem.module.scss";

const ListItem = ({ title, src, text1, text2, text3, text4, text5 }) => {
  return (
    <Segment key={title} className={styles.wrapper}>
      <Segment className={styles.post}>
        <div className={styles.postHeader}>
          <PostIcon /> <h3 className={styles.postHeaderTitle}>{title} </h3>
        </div>
        <Divider /> 
        <img src={src} alt={title} className={styles.postImage} />
        <div className={styles.description}>
          <p className={styles.descriptionText}>{text1}</p>
          <p className={styles.descriptionText}>{text2}</p>
          <p className={styles.descriptionText}>{text3}</p>
          <p className={styles.descriptionText}>{text4}</p>
          <p className={styles.descriptionText}>{text5}</p>
        </div>
      </Segment>
    </Segment>
  );
};

export default ListItem;
