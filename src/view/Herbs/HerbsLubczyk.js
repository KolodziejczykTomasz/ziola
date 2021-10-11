import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Lubczyk from "../../assets/images/herbs/lubczyk_ogrodowy.jpg";
import "./HerbsItem.css";

const HerbsLubczyk = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Lubczyk ogrodowy (łac. Levisticum officinale)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Lubczyk} alt="Lubczyk ogrodowy" />
            </div>

            <div class="post-content">
              <p class="description">
                To silnie rosnąca bylina, wytwarzająca podziemne kłącze,
                osiągająca nawet do 2 m wysokości. Liście mogą mieć lekko
                czerwonawy odcień. Kwitnie latem, od przełomu czerwca i lipca do
                sierpnia. Kwiaty są drobne, zielonkawożółte, zebrane w okazałe
                baldachy średnicy do 15 cm, wyrastające na szczytach pędów
                kwiatostanowych. Owoce lubczyka to suche, brunatne rozłupki, z
                których każda łatwo rozpada się na dwa nasiona – niełupki. Na
                zimę część nadziemna lubczyka zamiera. Wiosną ze śpiących oczek
                podziemnego kłącza roślina wypuszcza liczne młode liście i pędy.
              </p>

              <p class="description">
                Właściwości i działanie: Surowcem zielarskim jest korzeń
                lubczyku, który zawiera przede wszystkim lotne olejki. Lubczyk
                zwiększa ilość wydalanego moczu, pobudza wydzielanie soku
                żołądkowego i reguluje prace przewodu pokarmowego, działa
                wiatropędnie. Nasiona lubczyku dodawane są do wypieku chleba.
                Robi się z nich też słodką herbatę z miodem.
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

export default HerbsLubczyk;
