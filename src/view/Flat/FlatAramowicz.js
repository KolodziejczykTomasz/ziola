import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import ScrollUpButton from "react-scroll-up-button";
import PhoneIcon from "../../component/Icon/Phone/PhoneIcon";
import MobileIcon from "../../component/Icon/Phone/MobileIcon";
import AddressIcon from "../../component/Icon/Address/AddressIcon";
import EmailIcon from "../../component/Icon/Email//EmailIcon";

import Aramowicz from "../../assets/images/flat/aramowicz.jpg";

import "./Flat.css";
import ButtonBackFlat from "../../component/Button/ButtonBackFlat";

const FlatAramowicz = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Domek na Wzgórzu</h2>
              </div>
            </Segment>
            <img class="Logo" src={Aramowicz} alt="Domek na Wzgórzu" />
            <div class="post-content">
              <p class="description">
                Mamy przyjemność zaprezentować samodzielny dom o powierzchni
                90m2 leżący w naszym gospodarstwie agroturystycznym w
                miejscowości Blanki. Znajduje się ono w odległości 15 km od
                Lidzbarka Warmińskiego w województwie Warmińsko - Mazurskim.
              </p>
              <p class="description">
                Gospodarstwo agroturystyczne położone jest pośród pagórków i
                wzniesień. Nieopodal znajdują się lasy mieszane, basen ze
                zjeżdżalnią (30km) i wyciąg narciarski(15km). Istnieje także
                możliwość jazdy konnej(20km).
              </p>
              <p class="description">
                Prezentowany dom oddalony jest od gospodarstwa właścicieli o
                200m. W 2008 roku dom został całkowicie wyremontowany. Posiada 3
                sypialnie dwuosobowe, kuchnia, salon, jadalnia, łazienka z
                toaletą + osobna toaleta dla gości.
              </p>
              <p class="description">
                Teren posiadłości jest ogrodzony oraz posiada miejsce do
                parkowania samochodów. Na terenie gospodarstwa agroturystycznego
                znajduje się sauna z prysznicem, dwa stawy rybne z możliwością
                wędkowania, miejsce na ognisko z przygotowanym drewnem, grill,
                leżaki, meble ogrodowe.
              </p>
              <p class="contact">
                <AddressIcon /> Blanki 7, 11-100 Lidzbark Warmiński |{" "}
                <PhoneIcon /> 089 766-24-97 | <MobileIcon /> 604 526 099 |{" "}
                <EmailIcon /> tadeuszaramowicz@gmail.com
              </p>
              <p class="source">Źródło: http://www.domek-blanki.pl </p>
              <div style={{ display: "flex", justifyContent: "right" }}>
                <ButtonBackFlat />
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

export default FlatAramowicz;
