import React from "react";
import { Image, Divider, Segment } from "semantic-ui-react";

const ListItem = ({ title, src, text }) => {
  return (
    <Segment>
      <div key={title}>
        <div>
          <Image src={src} alt={title} />
        </div>
        <div>
          <h1>{title}</h1>
          <Divider />
          <p>{text} </p>
        </div>
      </div>
    </Segment>
  );
};

export default ListItem;
