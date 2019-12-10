import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import Baranowska from "../../assets/images/flat/baranowska.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatBaranowska = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">
        <a href="standard-post.html" title="">
          Agroturystyka "Mario"
        </a>
      </h2>
      <div class="post-preview">
        <img
          src={Baranowska}
          class="img-responsive"
          alt="Agroturystyka Mario"
        />
      </div>
    </div>
    <div class="post-content">
      <p>
        Gospodarstwo Agroturystyczne „Mario” znajduje się 13 km od Lidzbarka
        Warmińskiego – historycznej stolicy Warmii w malowniczo położonej wsi
        Suryty bezpośrednio nad jeziorem Blanki. Miejsce to gwarantuje Państwu
        czyste powietrze oraz ciszę z dala od zgiełku. Przepiękne krajobrazy są
        rajem zarówno dla oczu jak i dla obiektywu. Możemy zapewnić, że jest to
        wymarzone miejsce na odpoczynek od codziennego życia w biegu.
      </p>
      <p>
        Kontakt: Teresa Baranowska Suryty 16, 11-100 Lidzbark Warmiński | Tel:
        +48 662 113 470, (89) 766 17 28 | E-mail: suryty16@wp.pl
      </p>

      <p>Źródło: http://www.suryty16.pl </p>
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default FlatBaranowska;
