import React from "react";
import { Grid, Image, Divider } from "semantic-ui-react";

const ListItem = ({ title, src, text }) => {
  return (
    <li>
      <Grid key={title}>
        <Grid.Column width={5}>
          <Image src={src} alt={title} />
        </Grid.Column>
        <Grid.Column width={11}>
          <h1>{title}</h1>
          <Divider />
          <p>{text} </p>
        </Grid.Column>
      </Grid>
    </li>
  );
};

export default ListItem;
