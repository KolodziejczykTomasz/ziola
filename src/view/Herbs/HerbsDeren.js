import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Deren from "../../assets/images/herbs/deren.jpg";
import "./HerbsItem.css";


const HerbsDeren = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Dereń (łac. Cornus mas)</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Deren} alt="Dereń" />
            </div>

            <div class="post-content">
              <p class="description">
                To krzew dorastający zwykle do 3-5 m wysokości. Uprawia się go
                głównie dla kwaskowatych owoców. Dereń jadalny dobrze rośnie w
                półcieniu, ale na słonecznych stanowiskach wytwarza dorodniejsze
                i bardziej wartościowe owoce. oślina szczególnie atrakcyjnie
                wygląda na początku wiosny, gdy kwitnie oraz jesienią, podczas
                dojrzewania mięsistych, czerwonych lub bordowych owoców.
              </p>

              <p class="description">
                Właściwości i działanie: W medycynie ludowej zastosowanie
                znalazły przede wszystkim owoce derenia, które zwierają wiele
                pierwiastków mineralnych, przede wszystkim żelaza, a także
                potasu, wapnia, fosforu, magnezu, cynku, miedzi i manganu, jak
                również beta-karoten, flawonoidy, kwasy organiczne, pektyny,
                garbniki i cukry. Są również bogatym źródłem witaminy C. Owoce
                derenia mogą być stosowane pomocniczo przy leczeniu anemii. Są
                także polecane kobietom, które zmagają się ze zbyt obfitymi
                miesiączkami. W medycynie niekonwencjonalnej dereń, dzięki
                zawartości kwasów organicznych, fitoncydów i innych aktywnych
                związków, jest stosowany w dolegliwościach żołądkowych, gdyż
                działa przeciwzapalnie i ściągająco. Dereń działa moczopędnie,
                tzn. zwiększają wydalanie wody i sodu z moczem, a także
                przeciwzapalnie.{" "}
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

export default HerbsDeren;
