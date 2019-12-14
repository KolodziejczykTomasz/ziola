import React from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Gabrys from "../../assets/images/flat/gabrys.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatGabrys = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Gospodarstwo Agroturystyczne GABRYŚ</h2>
              </div>
            </Segment>
            <Image src={Gabrys}
         
          alt="Gospodarstwo Agroturystyczne GABRYŚ" />
 
    <div class="post-content">
      <p>
        Gospodarstwo Agroturystyczne znajdujące się nad Jeziorem Blanki w
        malowniczo położonej wsi Suryty i oferuje całoroczny wypoczynek dla
        ludzi szukających ciszy i spokoju. W okolicy nie brakuje pięknych
        krajobrazów, czystych i pięknych lasów i atrakcyjnych miejsc do
        zwiedzania. Jesteśmy w stanie zapewnić państwu wypoczynek po którym nikt
        nie będzie chciał stąd wyjechać.
      </p>
      <p>Kontakt: Suryty 9, 11-100 Lidzbark Warmiński | Tel: +48 501 642 195</p>

      <p>Źródło: http://gabrys.lidzbark.com/ </p>
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

export default FlatGabrys;
