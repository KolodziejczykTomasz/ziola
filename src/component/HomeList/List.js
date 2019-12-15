import React from "react";

import items from "../../data/newsHomepage";
import ListItem from "./ListItem/ListItem";

import styles from "./List.module.scss";

const List = () => (
  <div className={styles.wrapper}>
    {items.map(item => (
      <ListItem key={item.title} {...item} />
    ))}
  </div>
);

export default List;
