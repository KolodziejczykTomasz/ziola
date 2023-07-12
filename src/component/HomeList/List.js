import React from "react";

import items from "../../data/newsHomepage";
import ListItem from "./ListItem/ListItem";

import styles from "./List.module.scss";


const List = () => (

  <div className={styles.wrapper}>
    {items.map((item) => (
      <div>
        <ListItem key={item.title} {...item} />      
      </div>
    ))}
  </div>
);

export default List;
