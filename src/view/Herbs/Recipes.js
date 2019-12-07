import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const Recipes = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="text-center">
        Syrop z babki lancetowatej – najlepsze lekarstwo na kaszel
      </h2>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-4 text-left">
          <p>
            Około 0,5kg liści młodej babki + 1l wody zagotowanej i pozostawionej
            na 24h.{" "}
          </p>
          <p>Po tym czasie należy odcedzić wywar i wycisnąć liście. </p>
          <p>Dodać do tego ok 1kg cukru i sok z cytryny. Gotować ok 40 min.</p>
        </div>
        <div class="col-lg-4">
          <img src="images/syrop.jpg" class="img-thumbnail" alt="Syrop" />
        </div>
      </div>{" "}
      <p class="text-center"></p>{" "}
    </div>

    <div class="text-center post-header">
      <h2 class="text-center">Pierniki</h2>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-4 text-left">
          <p>
            <ul>
              <li>2,5 szklanki mąki</li>
              <li>0,5 szklanki cukru</li>
              <li>0,5 szklanki miodu</li>
              <li>1 łyż. sody</li>
              <li>1 łyż. cynamonu</li>
              <li>1 łyż. imbiru </li>
              <li>1 łyż. przyprawy do piernika </li>
              <li>szczypta soli</li>
              <li>cukier waniliowy</li>
              <li>1 żółtko</li>
              <li>Białko na lukier</li>
              <li>0,5 kostki margaryny lub masła</li>
              <li>2 łyżeczki kakao </li>
            </ul>
          </p>
        </div>
        <div class="col-lg-4">
          <img src="images/piernik.JPG" class="img-thumbnail" alt="Pierniki" />
        </div>
      </div>{" "}
      <p class="text-center">
        Tłuszcz + miód rozpuszczamy, łączymy z pozostałymi składnikami.
        Zagniatamy ciasto (ciasto musi odpocząć), formujemy pierniki.
      </p>{" "}
    </div>

    <div class="text-center post-header">
      <h2 class="text-center">Naleśniki z serem i pokrzywą</h2>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-4 text-left">
          <p>Ciasto naleśnikowe niezbyt gęste.</p>
          <p>
            Farsz: ser feta – 1 opakowanie, twaróg biały ok. 20 dag, sól, pierz,
            pokrzywa .
          </p>
          <p>
            Zrywamy świeże młode liście pokrzywy, należy je opłukać zimną wodą,
            zaparzyć wrzątkiem. Kroimy drobno, przekładamy na patelnię,
            podsmażamy na maśle, dodajemy cebulę i czosnek, sól, pieprz, łączymy
            z serem. Uformowane naleśniki obsmażamy z obu stron. Wspaniałe!
          </p>
        </div>
        <div class="col-lg-4">
          <br />
          <img
            src="#"
            class="img-thumbnail"
            alt="Naleśniki z serem i pokrzywą"
          />
        </div>
      </div>{" "}
      <p class="text-center"></p>{" "}
    </div>

    <h2 class="text-center">Podziel się przepisem</h2>

    <Footer />
  </>
);

export default Recipes;
