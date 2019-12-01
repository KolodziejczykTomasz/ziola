import React from "react";
import items from "../../data/newsHomepage";

import ListItem from "./ListItem/ListItem";

const List = () => (
  <>
    {items.map(item => (
      <ListItem key={item.title} {...item} />
    ))}
  </>
);

export default List;
