import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Szalwia from "../../assets/images/herbs/szalwia_lekarska.jpg";

const HerbsSzalwia = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">Szałwia lekarska (łac. Salvia officinalis) </h2>
      <div class="post-preview">
        <img src={Szalwia} class="img-responsive" alt="Szałwia lekarska" />
      </div>
    </div>

    <div class="post-content">
      <p>
        Bylina należąca do rodziny jasnotowatych. Jest półkrzewem, w naszym
        klimacie to krzewinka dorastająca do 30–60 cm wysokości. Tworzy szerokie
        kępy złożone z licznych, wzniesionych, ale skłonnych do pokładania się
        pędów, które drewnieją u podstawy. Pędy są porośnięte licznymi,
        podłużnie owalnymi lub lancetowatymi liśćmi. Kwitnie od końca maja do
        końca lipca (zakwita w drugim roku uprawy z nasion). Niebieskofioletowe
        kwiaty są zebrane w kwiatostany osadzone na końcach pędów
        kwiatostanowych. Kwiaty są miododajne.
      </p>

      <p>
        Właściwości i działanie: Ma zdecydowany, balsamiczny smak , gorzki
        zmierzający do słodkiego. Zawiera witaminy A, z grupy B, C oraz wapń,
        żelazo, magnez czy potas. Przez działanie na serce i wątrobę, uspokaja
        rozdrażnienie i zmniejsza wahania nastrojów a nawet ma działanie
        antydepresyjnie. Działa głównie na serce, wątrobę i nerki – wzmacniając
        odporność organizmu. Liście usuwają przewlekłe zmęczenie, działają
        ściągająco i rozkurczowo. Poprawia pracę woreczka żółciowego i
        trawienie, a także oczyszcza wszelkie stany zapalne. Sprawdza się
        doskonale przy bólach gardła, kłopotach z dziąsłami, przy problemach z
        cerą, swędzeniu czy łupieżu.
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsSzalwia;
