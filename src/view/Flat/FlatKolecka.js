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

import Kolecka from "../../assets/images/flat/kolecka.jpg";

import "./Flat.css";
import ButtonBackFlat from "../../component/Button/ButtonBackFlat";

const FlatKolecka = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Gospodarstwo Agroturystyczne Janina Zach- Kołecka
                </h2>
              </div>
            </Segment>
            <img
              class="Logo"
              src={Kolecka}
              alt="Gospodarstwo Agroturystyczne Janina Zach- Kołecka"
            />

            <div class="post-content">
              <p class="description">
                Dom położony jest na półwyspie o powierzchni 23.000 m2, z linią
                brzegową o długości 800 metrów. W pobliży sklep spożywczy (1
                km), piękne lasy i miasto Lidzbark Warmiński (12 km)
              </p>

              <p class="description">
                Oferuję dom całoroczny, na 6 osób, piętrowy. Parter – salon z
                kominkiem i TV-sat, kuchnia z pełnym wyposażeniem i łazienka z
                prysznicem i wc. Poza tym duży taras z widokiem na jezioro,
                ogród i grill. Piętro – trzy pokoje dwuosobowe, łazienka z
                umywalką i wc.
              </p>

              <p class="description">
                Do dyspozycji gości kąpielisko wyposażone w dwa pomosty, łódź
                motorowa, łódź wiosłowa, rowery, dla dzieci huśtawka,
                piaskownica.
              </p>
              <p class="contact">
                <AddressIcon/> Suryty 18, 11-100 Lidzbark Warmiński | <PhoneIcon/> (+48) 89
                766 17 60 | <MobileIcon/> 503 505 887
              </p>

              <p class="source">Źródło: http://gminalidzbark.com/ </p>
              <ButtonBackFlat />
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

export default FlatKolecka;
