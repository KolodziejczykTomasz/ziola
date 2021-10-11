import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import ScrollUpButton from "react-scroll-up-button";
import PhoneIcon from "../../component/Icon/Phone/PhoneIcon";
import AddressIcon from "../../component/Icon/Address/AddressIcon";

import Gabrys from "../../assets/images/flat/gabrys.jpg";

import "./Flat.css";
import ButtonBackFlat from "../../component/Button/ButtonBackFlat";

const FlatGabrys = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Gospodarstwo Agroturystyczne GABRYŚ</h2>
              </div>
            </Segment>
            <img
              class="Logo"
              src={Gabrys}
              alt="Gospodarstwo Agroturystyczne GABRYŚ"
            />
            <div class="post-content">
              <p class="description">
                Gospodarstwo Agroturystyczne znajdujące się nad Jeziorem Blanki
                w malowniczo położonej wsi Suryty i oferuje całoroczny
                wypoczynek dla ludzi szukających ciszy i spokoju. W okolicy nie
                brakuje pięknych krajobrazów, czystych i pięknych lasów i
                atrakcyjnych miejsc do zwiedzania. Jesteśmy w stanie zapewnić
                państwu wypoczynek po którym nikt nie będzie chciał stąd
                wyjechać.
              </p>
              <p class="contact">
                <AddressIcon /> Suryty 9, 11-100 Lidzbark Warmiński |{" "}
                <PhoneIcon /> +48 501 642 195
              </p>
              <p class="source"> Źródło: http://gabrys.lidzbark.com/ </p>
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

export default FlatGabrys;
