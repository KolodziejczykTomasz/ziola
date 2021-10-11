import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Melisa from "../../assets/images/herbs/melisa_lekarska.jpg";

import "./HerbsItem.css";

const HerbsMelisa = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Melisa lekarska (łac. Melissa officinalis){" "}
                </h2>
              </div>
            </Segment>
            <div class="post-preview">
              <img class="Logo" src={Melisa} alt="Melisa lekarska" />
            </div>

            <div class="post-content">
              <p class="description">
                To krzewinka, która tworzy kępy średnicy około 60 cm, złożone z
                licznych wzniesionych, delikatnie owłosionych i rozgałęziających
                się pędów dorastających do 60 cm wysokości. Kwitnie od czerwca
                do sierpnia. Jest to roślina miododajna, wydziela dość
                intensywny zapach cytryny.
              </p>

              <p class="description">
                Właściwości i działanie: Surowcem zielarskim jest liść melisy,
                który zawiera olejek eteryczny, garbniki, żywice, goryczki,
                glikozydy, kwasy organiczne, śluzy i witaminy. Melisa ma
                właściwości łagodzące nadmierne pobudzenie układu nerwowego,
                dlatego jest stosowana w stanach nerwicowych i depresjach.
                Wpływa też korzystnie na pracę układu pokarmowego, poprawiając
                trawienie i apetyt. Może być też stosowana zewnętrznie w postaci
                okładów łagodzących urazy, owrzodzenia, obrzęki, ukąszenia
                owadów oraz bóle stawów. Świeże liście melisy stosuje się
                również jako przyprawę kuchenną oraz dodatek do sałatek, lodów i
                deserów. Napary z liści melisy są stosowane w zastępstwie
                herbaty.
              </p>
              <div style={{ display: "flex", justifyContent: "right" }}>
                <ButtonBack />
              </div>
            </div>
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4} only="computer">
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsMelisa;
