import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ButtonBack from "../../component/Button/ButtonBack";
import ScrollUpButton from "react-scroll-up-button";

import Aronia from "../../assets/images/herbs/aronia.jpg";

const HerbsAronia = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">       
          Aronia (łac. Aronia melanocarpa)
      
      </h2>

      <div class="post-preview">
        <img
          src={Aronia}
          class="img-responsive"
          alt="Aronia"
        />
      </div>
    </div>

    <div class="post-content">
      <p>
        To krzew liściasty posiadający owoce jagodowe w kolorze ciemnogranatowym
        (prawie czarnym) o smaku słodko-cierpkim. Liście przebarwiają się
        jesienią na kolor czerwony lub pomarańczowy. Kwitnie od kwietnia do
        maja. Roślina bardzo łatwa w uprawie, nie atakują jej szkodniki, jest
        odporna na mrozy, nawet silne, nie wymaga podlewania. Nie ma też
        specjalnych wymagań co do stanowiska.
      </p>

      <p>
        Właściwości i działanie: Dobra na odporność. Zawiera ona bowiem wiele
        witamin (A, C, P, E) i minerałów: magnez, potas, fosfor, krzem. Dlatego
        osoby jedzące aronię nie chorują na anginy i przeziębienia. Substancje
        zawarte w aronii naprawiają też szkody wyrządzane przez wolne rodniki w
        komórkach i tkankach. Chronią przed nowotworami i opóźniają procesy
        starzenia. Chronią także nasze oczy. Aronia zapobiega też osadzaniu się
        blaszek miażdżycowych w naczyniach krwionośnych. Owoce te są również
        źródłem rutyny wzmacniającej naczynka krwionośne, zapobiegając ich
        pękaniu. Wielokrotne badania wykazały, że zawarte w owocach, np. w
        aroniach, związki polifenolowe mają bardzo korzystne działanie. Te z
        ekstraktu z aronii regenerują witaminę E, działają antyoksydacyjnie,
        więc przeciwdziałają miażdżycy, obniżają ciśnienie, hamują utlenianie
        LDL.
      </p>  
      <ButtonBack/>
    </div>
  
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsAronia;
