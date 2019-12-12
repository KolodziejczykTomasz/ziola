import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Lubczyk from "../../assets/images/herbs/lubczyk_ogrodowy.jpg";


const HerbsLubczyk = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
     
          Lubczyk ogrodowy (łac. Levisticum officinale){" "}
 
      </h2>

      <div class="post-preview">
        <img
          src={Lubczyk}
          class="img-responsive"
          alt="Lubczyk ogrodowy"
        />
      </div>
    </div>

    <div class="post-content">
      <p>
        To silnie rosnąca bylina, wytwarzająca podziemne kłącze, osiągająca
        nawet do 2 m wysokości. Liście mogą mieć lekko czerwonawy odcień.
        Kwitnie latem, od przełomu czerwca i lipca do sierpnia. Kwiaty są
        drobne, zielonkawożółte, zebrane w okazałe baldachy średnicy do 15 cm,
        wyrastające na szczytach pędów kwiatostanowych. Owoce lubczyka to suche,
        brunatne rozłupki, z których każda łatwo rozpada się na dwa nasiona –
        niełupki. Na zimę część nadziemna lubczyka zamiera. Wiosną ze śpiących
        oczek podziemnego kłącza roślina wypuszcza liczne młode liście i pędy.
      </p>

      <p>
        Właściwości i działanie: Surowcem zielarskim jest korzeń lubczyku, który
        zawiera przede wszystkim lotne olejki. Lubczyk zwiększa ilość wydalanego
        moczu, pobudza wydzielanie soku żołądkowego i reguluje prace przewodu
        pokarmowego, działa wiatropędnie. Nasiona lubczyku dodawane są do
        wypieku chleba. Robi się z nich też słodką herbatę z miodem.
      </p>
      <ButtonBack />
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsLubczyk;
