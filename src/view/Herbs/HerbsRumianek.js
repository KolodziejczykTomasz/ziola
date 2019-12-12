import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Rumianek from "../../assets/images/herbs/rumianek_pospolity.jpg";

const HerbsRumianek = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
        Rumianek pospolity (łac. Matricaria chamomilla)
      </h2>

      <div class="post-preview">
        <img src={Rumianek} class="img-responsive" alt="Rozmaryn lekarski" />
      </div>
    </div>

    <div class="post-content">
      <p>
        Roślina jednoroczna z rodziny astrowatych. Jest to krzewinka rosnąca do
        60 -80 cm wysokości o nagich, wzniesionych, silnie rozgałęzionych
        pędach. Pędy są porośnięte zielonymi liśćmi o 3–7cm długości. Cała
        roślina jest niezwykle aromatyczna, o silnym, charakterystycznym
        zapachu. Kwitnie od końca maja do września wykształcając liczne kwiaty,
        zebrane w koszyczki kwiatowe. Od przełomu lipca i sierpnia na roślinie
        zawiązują się owoce zawierające liczne nasiona.
      </p>

      <p>
        Właściwości i działanie: Rumianek jest przede wszystkim wykorzystywany w
        medycynie naturalnej i kosmetyce. Leki z rumianku działają
        antybakteryjnie, przyśpieszają gojenie się ran i regenerują naskórek.
        Zaleca się je stosować przy stanach zapalnych skóry, dziąseł i jamy
        ustnej, oparzeniach oraz zakażeniach grzybicznych. Natomiast spożywanie
        kwiatów w formie naparu (parzy się jak herbatę) lub odwaru (gotuje się
        przez co najmniej kwadrans) działa kojąco na układ pokarmowy przy
        nieżycie żołądka i jelit. Roślinę można stosować także pomocniczo jako
        środek uspokajający. W kosmetyce rumianek jest składnikiem wpływającym
        na poprawę cery. Wykorzystuje się go przy produkcji mydeł, kremów,
        maseczek, past do zębów i kremów do kąpieli.
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsRumianek;
