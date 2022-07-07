import React from "react";
import { Divider, Segment } from "semantic-ui-react";
import PostIcon from "../../Icon/Post/PostIcon";
//import ListItemGallery from "../ListItem/ListItemGallery";

import styles from "./ListItem.module.scss";

const ListItem = ({
  title,
  src,
  text1,
  text2,
  text3,
  text4,
  text5,
  gallery,
}) => {
  return (
    <Segment key={title} className={styles.wrapper}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <PostIcon /> <h3 className={styles.postHeaderTitle}>{title} </h3>
        </div>
        <Divider />
        <img src={src} alt="opis tekst" className={styles.postImage} />
        <div className={styles.description}>
          <p className={styles.descriptionText}>{text1}</p>
          <p className={styles.descriptionText}>{text2}</p>
          <p className={styles.descriptionText}>{text3}</p>
          <p className={styles.descriptionText}>{text4}</p>
          <p className={styles.descriptionText}>{text5}</p>
        </div>
        <div></div>
      </div>
    </Segment>
  );
};

export default ListItem;
