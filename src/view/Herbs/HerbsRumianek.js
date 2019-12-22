import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Rumianek from "../../assets/images/herbs/rumianek_pospolity.jpg";

import "./HerbsItem.css";

const HerbsRumianek = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Rumianek pospolity (łac. Matricaria chamomilla)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Rumianek} alt="Rozmaryn lekarski" />
            </div>

            <div class="post-content">
              <p class="description">
                Roślina jednoroczna z rodziny astrowatych. Jest to krzewinka
                rosnąca do 60 -80 cm wysokości o nagich, wzniesionych, silnie
                rozgałęzionych pędach. Pędy są porośnięte zielonymi liśćmi o
                3–7cm długości. Cała roślina jest niezwykle aromatyczna, o
                silnym, charakterystycznym zapachu. Kwitnie od końca maja do
                września wykształcając liczne kwiaty, zebrane w koszyczki
                kwiatowe. Od przełomu lipca i sierpnia na roślinie zawiązują się
                owoce zawierające liczne nasiona.
              </p>

              <p class="description">
                Właściwości i działanie: Rumianek jest przede wszystkim
                wykorzystywany w medycynie naturalnej i kosmetyce. Leki z
                rumianku działają antybakteryjnie, przyśpieszają gojenie się ran
                i regenerują naskórek. Zaleca się je stosować przy stanach
                zapalnych skóry, dziąseł i jamy ustnej, oparzeniach oraz
                zakażeniach grzybicznych. Natomiast spożywanie kwiatów w formie
                naparu (parzy się jak herbatę) lub odwaru (gotuje się przez co
                najmniej kwadrans) działa kojąco na układ pokarmowy przy
                nieżycie żołądka i jelit. Roślinę można stosować także
                pomocniczo jako środek uspokajający. W kosmetyce rumianek jest
                składnikiem wpływającym na poprawę cery. Wykorzystuje się go
                przy produkcji mydeł, kremów, maseczek, past do zębów i kremów
                do kąpieli.
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

export default HerbsRumianek;
