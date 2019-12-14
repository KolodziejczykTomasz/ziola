import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Lubczyk from "../../assets/images/herbs/lubczyk_ogrodowy.jpg";

const HerbsLubczyk = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Lubczyk ogrodowy (łac. Levisticum officinale)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <Image src={Lubczyk} alt="Lubczyk ogrodowy" />
            </div>

            <div class="post-content">
              <p>
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

              <p>
                Właściwości i działanie: Surowcem zielarskim jest korzeń
                lubczyku, który zawiera przede wszystkim lotne olejki. Lubczyk
                zwiększa ilość wydalanego moczu, pobudza wydzielanie soku
                żołądkowego i reguluje prace przewodu pokarmowego, działa
                wiatropędnie. Nasiona lubczyku dodawane są do wypieku chleba.
                Robi się z nich też słodką herbatę z miodem.
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

export default HerbsLubczyk;
