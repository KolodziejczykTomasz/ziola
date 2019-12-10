import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import Aramowicz from "../../assets/images/flat/aramowicz.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatAramowicz = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
        <a href="standard-post.html" title="">
          Domek na Wzgórzu
        </a>
      </h2>

      <div class="post-preview">
        <img
          src={Aramowicz}
          class="img-responsive"
          alt="Domek na Wzgórzu"
        />
      </div>
    </div>
    <div class="post-content">
      <p>
        Mamy przyjemność zaprezentować samodzielny dom o powierzchni 90m2 leżący
        w naszym gospodarstwie agroturystycznym w miejscowości Blanki. Znajduje
        się ono w odległości 15 km od Lidzbarka Warmińskiego w województwie
        Warmińsko - Mazurskim.
      </p>

      <p>
        Gospodarstwo agroturystyczne położone jest pośród pagórków i wzniesień.
        Nieopodal znajdują się lasy mieszane, basen ze zjeżdżalnią (30km) i
        wyciąg narciarski(15km). Istnieje także możliwość jazdy konnej(20km).
      </p>

      <p>
        Prezentowany dom oddalony jest od gospodarstwa właścicieli o 200m. W
        2008 roku dom został całkowicie wyremontowany. Posiada 3 sypialnie
        dwuosobowe, kuchnia, salon, jadalnia, łazienka z toaletą + osobna
        toaleta dla gości.
      </p>

      <p>
        Teren posiadłości jest ogrodzony oraz posiada miejsce do parkowania
        samochodów. Na terenie gospodarstwa agroturystycznego znajduje się sauna
        z prysznicem, dwa stawy rybne z możliwością wędkowania, miejsce na
        ognisko z przygotowanym drewnem, grill, leżaki, meble ogrodowe.
      </p>

      <p>
        Kontakt: Blanki 7, 11-100 Lidzbark Warmiński | Tel: 089 766-24-97, Kom:
        604 526 099 | Email: tadeuszaramowicz@gmail.com
      </p>

      <p>Źródło: http://www.domek-blanki.pl </p>
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default FlatAramowicz;
