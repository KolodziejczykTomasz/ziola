import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ButtonBack from "../../component/Button/ButtonBack";
import ScrollUpButton from "react-scroll-up-button";

import Aronia from "../../assets/images/herbs/aronia.jpg";

import "./HerbsItem.css";

const HerbsAronia = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Aronia (łac. Aronia melanocarpa)</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Aronia} alt="Aronia" />
            </div>

            <div class="post-content">
              <p class="description" >
                To krzew liściasty posiadający owoce jagodowe w kolorze
                ciemnogranatowym (prawie czarnym) o smaku słodko-cierpkim.
                Liście przebarwiają się jesienią na kolor czerwony lub
                pomarańczowy. Kwitnie od kwietnia do maja. Roślina bardzo łatwa
                w uprawie, nie atakują jej szkodniki, jest odporna na mrozy,
                nawet silne, nie wymaga podlewania. Nie ma też specjalnych
                wymagań co do stanowiska.
              </p>

              <p class="description">
                Właściwości i działanie: Dobra na odporność. Zawiera ona bowiem
                wiele witamin (A, C, P, E) i minerałów: magnez, potas, fosfor,
                krzem. Dlatego osoby jedzące aronię nie chorują na anginy i
                przeziębienia. Substancje zawarte w aronii naprawiają też szkody
                wyrządzane przez wolne rodniki w komórkach i tkankach. Chronią
                przed nowotworami i opóźniają procesy starzenia. Chronią także
                nasze oczy. Aronia zapobiega też osadzaniu się blaszek
                miażdżycowych w naczyniach krwionośnych. Owoce te są również
                źródłem rutyny wzmacniającej naczynka krwionośne, zapobiegając
                ich pękaniu. Wielokrotne badania wykazały, że zawarte w owocach,
                np. w aroniach, związki polifenolowe mają bardzo korzystne
                działanie. Te z ekstraktu z aronii regenerują witaminę E,
                działają antyoksydacyjnie, więc przeciwdziałają miażdżycy,
                obniżają ciśnienie, hamują utlenianie LDL.
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

export default HerbsAronia;
