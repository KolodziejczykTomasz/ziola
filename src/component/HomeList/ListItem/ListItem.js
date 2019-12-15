import React from "react";
import { Image, Divider, Segment } from "semantic-ui-react";

import styles from "./ListItem.module.scss";

const ListItem = ({ title, src, text }) => {
  return (

<Segment key={title} className={styles.wrapper}>
  <Segment className={styles.item}>

    <Image src={src} size='small' floated='left' alt={title}/>
    <p>
    <h1>{title}</h1>

    </p>
    <Divider />
    <p>
       „Zioło daje moc” – tym hasłem przywitał zebranych zespół Czerwony Tulipan na II Festiwalu Ziół, który odbył się w niedzielę, w zielarskiej wsi Blanki. Jest to kolejna impreza prężnie działającego Stowarzyszenia „Babki Zielarki” i bardzo aktywnej pani sołtys wsi – Lucji Kuczyńskiej.
    </p>
    <p>
      O niezwykłej mocy ziół przekonywały wszystkich panie ze Stowarzyszenia „Babki Zielarki”. Podczas Festiwalu można było skosztować nalewki i syropy z miejscowych ziół i owoców, ciasteczka z kwiatami oraz zupę z pokrzyw.
    </p>
    <p>
      Festyn ten nie odbyłby się gdyby nie wsparcie finansowe samorządu województwa warmińsko-mazurskiego. Dzięki pozyskanemu dofinansowaniu można było zobaczyć na scenie tak wspaniały zespół, jakim jest „Czerwony Tulipan”.
    </p>
    </Segment>
  </Segment>   
  );
};

export default ListItem;
