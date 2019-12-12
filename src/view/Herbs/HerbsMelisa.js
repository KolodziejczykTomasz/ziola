import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Melisa from "../../assets/images/herbs/melisa_lekarska.jpg";

const HerbsMelisa = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">       
          Melisa lekarska (łac. Melissa officinalis)     
      </h2>

      <div class="post-preview">
        <img
          src={Melisa}
          class="img-responsive"
          alt="Melisa lekarska"
        />
      </div>
    </div>

    <div class="post-content">
      <p>
        To krzewinka, która tworzy kępy średnicy około 60 cm, złożone z licznych
        wzniesionych, delikatnie owłosionych i rozgałęziających się pędów
        dorastających do 60 cm wysokości. Kwitnie od czerwca do sierpnia. Jest
        to roślina miododajna, wydziela dość intensywny zapach cytryny.
      </p>

      <p>
        Właściwości i działanie: Surowcem zielarskim jest liść melisy, który
        zawiera olejek eteryczny, garbniki, żywice, goryczki, glikozydy, kwasy
        organiczne, śluzy i witaminy. Melisa ma właściwości łagodzące nadmierne
        pobudzenie układu nerwowego, dlatego jest stosowana w stanach
        nerwicowych i depresjach. Wpływa też korzystnie na pracę układu
        pokarmowego, poprawiając trawienie i apetyt. Może być też stosowana
        zewnętrznie w postaci okładów łagodzących urazy, owrzodzenia, obrzęki,
        ukąszenia owadów oraz bóle stawów. Świeże liście melisy stosuje się
        również jako przyprawę kuchenną oraz dodatek do sałatek, lodów i
        deserów. Napary z liści melisy są stosowane w zastępstwie herbaty.
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsMelisa;
