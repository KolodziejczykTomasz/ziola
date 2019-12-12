import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Wiesiolek from "../../assets/images/herbs/wiesiolek.jpg";

const HerbsWiesiolek = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">Wiesiołek (łac. Oenothera)</h2>
      <div class="post-preview">
        <img src={Wiesiolek} class="img-responsive" alt="Wiesiołek" />
      </div>
    </div>

    <div class="post-content">
      <p>
        Bylina o dekoracyjnych, zazwyczaj żółtych kwiatach. Rośnie na polach,
        łąkach i nieużytkach. Ludowo zwany „świecą nocy”, gdyż ciągu dnia jej
        kwiaty się zamykają a otwierają pod wieczór.
      </p>

      <p>
        Właściwości i działanie: Herbatki z nasion wiesiołka zaleca się je
        spożywać przy problemach z miażdżycą, cukrzycą, sercem i chorobami
        układu nerwowego. Związki zawarte w nasionach wiesiołka wpływają m.in.
        na obniżenie ciśnienia krwi i poziomu cukru, regulują przemianę materii,
        wzmacniają organizm i działają odtruwająco. Z nasion wiesiołka
        produkowany jest również olej, który można na przykład dodawać do
        sałatek. Ma on także zastosowanie kosmetyczne: dodawany do maści i
        maseczek, pozytywnie wpływa na stan skóry. Wartościowym skarbem w
        wiesiołku jest kwas linolenowy i gamma linolenowy, który w roślinach
        występuje bardzo rzadko. Poza tym wysokiej wartości białko i zestaw soli
        mineralnych wapń, magnez, potas, fosfor, mangan, żelazo cynk miedź i
        witamina E.
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsWiesiolek;
