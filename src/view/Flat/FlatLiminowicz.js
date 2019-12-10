import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Liminowicz from "../../assets/images/flat/liminowicz.jpg";

import ScrollUpButton from "react-scroll-up-button";

const FlatLiminowicz = () => (
  <>
    <Header />

    <div class="post-preview">
      <img
        src={Liminowicz}
        class="img-responsive"
        alt="TERESA LIMINOWICZ"
      />
    </div>
    <div class="post-content">
      <p>
        Chcesz uciec od miejskiego gwaru, ryku klaksonów, korków, świateł i
        stresów. Nie sprawdziły się wczasy w nadmorskich kurortach. Chcesz
        uporządkować myśli, uspokoić skołatane nerwy siedzieć z rodziną przy
        ognisku? Spróbuj spędzić chociaż kilka dni u nas. Lekarstwem na Twoje
        skołatane nerwy może okazać się wynajem domku w Surytach, w pięknym
        zakątku Warmii i Mazur.
      </p>

      <p>
        Spróbuj znaleźć radość w wykonywaniu rzeczy prostych: łowieniu ryb,
        pływaniu łódką, przygotowywaniu ogniska. Możesz nacieszyć oczy
        nieskażoną przez cywilizację linią brzegu niedużego i pięknie położonego
        jeziora Blanki.
      </p>

      <p>
        Tu łatwo zapomnieć o trudach dnia codziennego. Poczujesz się jak
        odkrywca. Jeśli trudno Ci żyć bez odrobiny luksusu wejdź do domu, który
        jest do twojej dyspozycji. Usiądź w salonie w wygodnych fotelach, napal
        w kominku w chłodny wieczór, przyrządź posiłek w luksusowo wyposażonej
        kuchni. Na górze czekają na Ciebie dwie sypialnie. Weź kąpiel w jednej z
        komfortowo wyposażonych łazienek. Śpij spokojnie. Twoje auto stać może w
        bezpiecznym garażu.
      </p>

      <p>
        Dojedziesz do nas nową, pustą drogą. Już w czasie tych 13 km wiodących
        od Lidzbarka Warmińskiego do osady Suryty zapomnisz o mieście.
      </p>

      <p>
        Zawitaj do nas również w zimę. Dom wyposażony jest w centralne
        ogrzewanie z kominkiem. Tereny wokół Suryt są wręcz wymarzone dla
        miłośników narciarstwa zjazdowego.
      </p>
      <p>
        Już 13 km od naszego gospodarstwa znajduje się Góra Krzyżowa z wyciągiem
        orczykowym (długość stoku 300m oświetlony i sztucznie zaśnieżany). Na
        zamarzniętym stawie na naszym terenie możesz próbować swoich sił na
        łyżwach. A może zostaniesz na cały rok...
      </p>

      <p>Tel: 89 767 59 00, Kom: 606 251 325 </p>

      <p>Źródło: http://www.suryty.eu </p>
    </div>
    <ScrollUpButton />
    <Footer />
  </>
);

export default FlatLiminowicz;
