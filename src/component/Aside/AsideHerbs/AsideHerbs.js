import React from "react";
import { Segment, Divider } from "semantic-ui-react";

import Button from "../../Button/Button";

import styles from "./AsideHerbs.module.scss";

const AsideHerbs = () => (
  <Segment className={styles.wrapper}>
    <h3 className={styles.wrapperHeader}>ZIOŁA</h3>
    <Divider />
    <div className={styles.buttonList}>
      <Button href="/herbsRozmaryn">ROZMARYN LEKARSKI</Button>
      <Button href="/herbsSzalwia">SZAŁWIA LEKARSKA</Button>
      <Button href="/herbsDeren">DEREŃ</Button>
      <Button href="/herbsDziurawiec">DZIURAWIEC ZWYCZAJNY</Button>
      <Button href="/herbsBylica">BYLICA ESTRAGON </Button>
      <Button href="/herbsLubczyk">LUBCZYK OGRODOWY</Button>
      <Button href="/herbsMelisa">MELISA LEKARSKA</Button>
      <Button href="/herbsStevia">STEWIA</Button>
      <Button href="/herbsWiesiolek">WIESIOŁEK</Button>
      <Button href="/herbsWaleriana">WALERIANA</Button>
      <Button href="/herbsRumianek">RUMIANEK POSPOLITY</Button>
      <Button href="/herbsRokitnik">ROKITNIK</Button>
      <Button href="/herbsAronia">ARONIA</Button>
      <Button href="/herbsRoza">RÓŻA OMSZONA</Button>
    </div>
  </Segment>
);

export default AsideHerbs;
