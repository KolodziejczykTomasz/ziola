import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Kolecka from "../../assets/images/flat/kolecka.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatKolecka = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
        <a href="standard-post.html" title="">
          Gospodarstwo Agroturystyczne Janina Zach- Kołecka
        </a>
      </h2>
      <div class="post-preview">
        <img
          src={Kolecka}
          class="img-responsive"
          alt="Gospodarstwo Agroturystyczne Janina Zach- Kołecka"
        />
      </div>
    </div>
    <div class="post-content">
      <p>
        Dom położony jest na półwyspie o powierzchni 23.000 m2, z linią brzegową
        o długości 800 metrów. W pobliży sklep spożywczy (1 km), piękne lasy i
        miasto Lidzbark Warmiński (12 km)
      </p>

      <p>
        Oferuję dom całoroczny, na 6 osób, piętrowy. Parter – salon z kominkiem
        i TV-sat, kuchnia z pełnym wyposażeniem i łazienka z prysznicem i wc.
        Poza tym duży taras z widokiem na jezioro, ogród i grill. Piętro – trzy
        pokoje dwuosobowe, łazienka z umywalką i wc.
      </p>

      <p>
        Do dyspozycji gości kąpielisko wyposażone w dwa pomosty, łódź motorowa,
        łódź wiosłowa, rowery, dla dzieci huśtawka, piaskownica.
      </p>
      <p>
        Kontakt: Suryty 18, 11-100 Lidzbark Warmiński | Tel: (+48) 89 766 17 60,
        kom. 503 505 887
      </p>

      <p>Źródło: http://gminalidzbark.com/ </p>
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default FlatKolecka;
