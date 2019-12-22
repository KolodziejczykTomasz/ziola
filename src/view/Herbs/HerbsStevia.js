import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Stevia from "../../assets/images/herbs/stevia_rebaudiana.jpg";

import "./HerbsItem.css";

const HerbsStevia = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Stewia (łac. Stevia rebaudiana)</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Stevia} alt="Stewia" />
            </div>

            <div class="post-content">
              <p class="description">
                Wytwarza niewielkie 3–5-centymetrowe liście i drobne, białe
                kwiaty. Jest byliną, jednak nie odporną na mróz. Kwiaty
                pojawiają się już w pierwszym roku uprawy.{" "}
              </p>

              <p class="description">
                Właściwości i działanie: Jest z powodzeniem wykorzystywana jako
                słodzik, dzięki wysokiej zawartości glikozydów stewiolowych.
                Stewię można spożywać w różnej formie: proszku, tabletek,
                suszonych lub świeżych liści. Najbardziej wartościowe są liście
                i kwiaty (korzenie nie zawierają dobroczynnych związków). Świeże
                liście stewii można dodawać do potraw, sałatek i napojów,
                sproszkowane zaś mogą posłużyć jako słodzik. Spożywanie stewii
                pobudza apetyt, działa regenerująco na trzustkę, zwalcza
                nadciśnienie i oczywiście pomaga w walce z cukrzycą. Stosowana
                natomiast w formie maseczek i okładów pozytywnie wpływa na
                zanikanie trądziku, zamykanie porów, gojenie się ran oraz
                dezynfekuje skórę. Żucie świeżych listków lub łodyżek stewii
                zapobiega próchnicy zębów.
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

export default HerbsStevia;
