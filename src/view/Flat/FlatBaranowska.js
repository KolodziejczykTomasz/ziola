import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import ScrollUpButton from "react-scroll-up-button";
import PhoneIcon from "../../component/Icon/Phone/PhoneIcon";
import AddressIcon from "../../component/Icon/Address/AddressIcon";
import EmailIcon from "../../component/Icon/Email//EmailIcon";

import Baranowska from "../../assets/images/flat/baranowska.jpg";

import "./Flat.css";
import ButtonBackFlat from "../../component/Button/ButtonBackFlat";

const FlatBaranowska = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Agroturystyka "Mario"</h2>
              </div>
            </Segment>
            <img class="Logo" src={Baranowska} alt="Agroturystyka Mario" />
            <div class="post-content">
              <p class="description">
                Gospodarstwo Agroturystyczne „Mario” znajduje się 13 km od
                Lidzbarka Warmińskiego – historycznej stolicy Warmii w
                malowniczo położonej wsi Suryty bezpośrednio nad jeziorem
                Blanki. Miejsce to gwarantuje Państwu czyste powietrze oraz
                ciszę z dala od zgiełku. Przepiękne krajobrazy są rajem zarówno
                dla oczu jak i dla obiektywu. Możemy zapewnić, że jest to
                wymarzone miejsce na odpoczynek od codziennego życia w biegu.
              </p>
              <p class="contact">
                <AddressIcon /> Teresa Baranowska Suryty 16, 11-100 Lidzbark
                Warmiński | <PhoneIcon /> +48 662 113 470, (89) 766 17 28 |{" "}
                <EmailIcon /> suryty16@wp.pl
              </p>
              <p class="source">Źródło: http://www.suryty16.pl </p>
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

export default FlatBaranowska;
