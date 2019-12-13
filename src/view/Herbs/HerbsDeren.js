import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Deren from "../../assets/images/herbs/deren.jpg";

const HerbsDeren = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">Dereń (łac. Cornus mas)</h2>

      <div class="post-preview">
        <img src={Deren} class="img-responsive" alt="Dereń" />
      </div>
    </div>

    <div class="post-content">
      <p>
        To krzew dorastający zwykle do 3-5 m wysokości. Uprawia się go głównie
        dla kwaskowatych owoców. Dereń jadalny dobrze rośnie w półcieniu, ale na
        słonecznych stanowiskach wytwarza dorodniejsze i bardziej wartościowe
        owoce. oślina szczególnie atrakcyjnie wygląda na początku wiosny, gdy
        kwitnie oraz jesienią, podczas dojrzewania mięsistych, czerwonych lub
        bordowych owoców.
      </p>

      <p>
        Właściwości i działanie: W medycynie ludowej zastosowanie znalazły
        przede wszystkim owoce derenia, które zwierają wiele pierwiastków
        mineralnych, przede wszystkim żelaza, a także potasu, wapnia, fosforu,
        magnezu, cynku, miedzi i manganu, jak również beta-karoten, flawonoidy,
        kwasy organiczne, pektyny, garbniki i cukry. Są również bogatym źródłem
        witaminy C. Owoce derenia mogą być stosowane pomocniczo przy leczeniu
        anemii. Są także polecane kobietom, które zmagają się ze zbyt obfitymi
        miesiączkami. W medycynie niekonwencjonalnej dereń, dzięki zawartości
        kwasów organicznych, fitoncydów i innych aktywnych związków, jest
        stosowany w dolegliwościach żołądkowych, gdyż działa przeciwzapalnie i
        ściągająco. Dereń działa moczopędnie, tzn. zwiększają wydalanie wody i
        sodu z moczem, a także przeciwzapalnie.{" "}
      </p>
      <ButtonBack />
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsDeren;