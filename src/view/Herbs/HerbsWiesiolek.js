import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Wiesiolek from "../../assets/images/herbs/wiesiolek.jpg";

import "./HerbsItem.css";

const HerbsWiesiolek = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Wiesiołek (łac. Oenothera)</h2>
              </div>
            </Segment>
            <div class="post-preview">
              <img class="Logo" src={Wiesiolek} alt="Wiesiołek" />
            </div>

            <div class="post-content">
              <p class="description">
                Bylina o dekoracyjnych, zazwyczaj żółtych kwiatach. Rośnie na
                polach, łąkach i nieużytkach. Ludowo zwany „świecą nocy”, gdyż
                ciągu dnia jej kwiaty się zamykają a otwierają pod wieczór.
              </p>

              <p class="description">
                Właściwości i działanie: Herbatki z nasion wiesiołka zaleca się
                je spożywać przy problemach z miażdżycą, cukrzycą, sercem i
                chorobami układu nerwowego. Związki zawarte w nasionach
                wiesiołka wpływają m.in. na obniżenie ciśnienia krwi i poziomu
                cukru, regulują przemianę materii, wzmacniają organizm i
                działają odtruwająco. Z nasion wiesiołka produkowany jest
                również olej, który można na przykład dodawać do sałatek. Ma on
                także zastosowanie kosmetyczne: dodawany do maści i maseczek,
                pozytywnie wpływa na stan skóry. Wartościowym skarbem w
                wiesiołku jest kwas linolenowy i gamma linolenowy, który w
                roślinach występuje bardzo rzadko. Poza tym wysokiej wartości
                białko i zestaw soli mineralnych wapń, magnez, potas, fosfor,
                mangan, żelazo cynk miedź i witamina E.
              </p>
              <ButtonBack />
            </div>
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4}>
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsWiesiolek;
