import React from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Baranowska from "../../assets/images/flat/baranowska.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatBaranowska = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Agroturystyka "Mario"</h2>
              </div>
            </Segment>
            <Image src={Baranowska}          
          alt="Agroturystyka Mario" />
   
    <div class="post-content">
      <p>
        Gospodarstwo Agroturystyczne „Mario” znajduje się 13 km od Lidzbarka
        Warmińskiego – historycznej stolicy Warmii w malowniczo położonej wsi
        Suryty bezpośrednio nad jeziorem Blanki. Miejsce to gwarantuje Państwu
        czyste powietrze oraz ciszę z dala od zgiełku. Przepiękne krajobrazy są
        rajem zarówno dla oczu jak i dla obiektywu. Możemy zapewnić, że jest to
        wymarzone miejsce na odpoczynek od codziennego życia w biegu.
      </p>
      <p>
        Kontakt: Teresa Baranowska Suryty 16, 11-100 Lidzbark Warmiński | Tel:
        +48 662 113 470, (89) 766 17 28 | E-mail: suryty16@wp.pl
      </p>

      <p>Źródło: http://www.suryty16.pl </p>
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

export default FlatBaranowska;
