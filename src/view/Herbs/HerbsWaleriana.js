import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Waleriana from "../../assets/images/herbs/waleriana.jpg";

import "./HerbsItem.css";

const HerbsWaleriana = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Waleriana (Kozłek lekarski) (łac. Valeriana officinalis)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Waleriana} alt="Waleriana" />
            </div>

            <div class="post-content">
              <p class="description">
                Rośnie na wilgotnych łąkach lub jest hodowana w ogrodach jako
                roślina ozdobna. Jej czubki w kształcie parasoli wieńczą
                wydrążoną w środku, prostą łodygę. Ma ciemno zielone liście,
                zwrócone ku górze, włochate od spodu. Kwitnie w czerwcu - drobne
                biało fioletowe lub różowe kwiatki o przyjemnym, słodkim
                zapachu. Jej korzeń jest szaro brązowy, o przykrym zapachu.{" "}
              </p>

              <p class="description">
                Właściwości i działanie: Wykazuje ona przede wszystkim działanie
                uspokajające, dlatego znalazła zastosowanie głównie jako środek
                wyciszający organizm w stanach łagodnego napięcia nerwowego i
                przy trudnościach w zasypianiu na tle nerwowym. Ma także inne
                właściwości lecznicze, m.in. rozkurczające, dzięki czemu można
                go stosować w dolegliwościach żołądkowych lub podczas bolesnych
                miesiączek.
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

export default HerbsWaleriana;
