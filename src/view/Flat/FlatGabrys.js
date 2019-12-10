import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import Gabrys from "../../assets/images/flat/gabrys.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatGabrys = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
        <a href="standard-post.html" title="">
          Gospodarstwo Agroturystyczne GABRYŚ
        </a>
      </h2>
      <div class="post-preview">
        <img
          src={Gabrys}
          class="img-responsive"
          alt="Gospodarstwo Agroturystyczne GABRYŚ"
        />
      </div>
    </div>
    <div class="post-content">
      <p>
        Gospodarstwo Agroturystyczne znajdujące się nad Jeziorem Blanki w
        malowniczo położonej wsi Suryty i oferuje całoroczny wypoczynek dla
        ludzi szukających ciszy i spokoju. W okolicy nie brakuje pięknych
        krajobrazów, czystych i pięknych lasów i atrakcyjnych miejsc do
        zwiedzania. Jesteśmy w stanie zapewnić państwu wypoczynek po którym nikt
        nie będzie chciał stąd wyjechać.
      </p>
      <p>Kontakt: Suryty 9, 11-100 Lidzbark Warmiński | Tel: +48 501 642 195</p>

      <p>Źródło: http://gabrys.lidzbark.com/ </p>
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default FlatGabrys;
