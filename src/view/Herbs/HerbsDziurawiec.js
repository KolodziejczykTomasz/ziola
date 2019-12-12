import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Dziurawiec from "../../assets/images/herbs/dziurawiec_zwyczajny.jpg";

const HerbsDziurawiec = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">Dziurawiec zwyczajny (Hypericum perforatum)</h2>

      <div class="post-preview">
        <img
          src={Dziurawiec}
          class="img-responsive"
          alt="Dziurawiec zwyczajny"
        />
      </div>
    </div>

    <div class="post-content">
      <p>
        Bylina dorastająca do ok. 40-60 cm. wysokości tworząc cienki, sztywny,
        wyprostowany pęd, dość mocno rozgałęziający się od połowy wysokości. Na
        szczycie rozgałęzionych pędów rozwijają się żółte, pojedyncze,
        pięciopłatkowe kwiaty, tworzące gęste baldachy. Zarówno płatki kwiatów,
        jak i powierzchnię liści, pokrywają drobne, prześwitujące, jasne i
        ciemne kropki, przypominające malutkie dziurki. Roślina w tych właśnie
        miejscach przechowuje olejki eteryczne.
      </p>

      <p>
        Właściwości i działanie: Gotowe ziele dziurawca zwyczajnego jest bogate
        w olejki eteryczne, flawonoidy, garbniki bakteriobójcze, sole mineralne,
        kwasy organiczne oraz zawiera wit. A i C. Ziele dziurawca poleca się do
        stosowania wewnętrznie: na schorzenia przewodu pokarmowego, wątroby,
        dróg żółciowych, wrzodach dwunastniczy i żołądka, a także suplement
        wspomagający leczenie łagodnej depresji oraz zewnętrznie: jako środek
        dezynfekujący stany zapalne błony śluzowej i gardła, a także pomocny w
        leczeniu trudno gojących się ran, skaleczeń i owrzodzeń.
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsDziurawiec;
