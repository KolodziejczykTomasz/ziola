import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Stevia from "../../assets/images/herbs/stevia_rebaudiana.jpg";

const HerbsStevia = () => (
  <>
    <Header />
    <div class="text-center post-header">
      <h2 class="post-title">Stewia (łac. Stevia rebaudiana) </h2>

      <div class="post-preview">
        <img src={Stevia} class="img-responsive" alt="Stewia" />
      </div>
    </div>

    <div class="post-content">
      <p>
        Wytwarza niewielkie 3–5-centymetrowe liście i drobne, białe kwiaty. Jest
        byliną, jednak nie odporną na mróz. Kwiaty pojawiają się już w pierwszym
        roku uprawy.{" "}
      </p>

      <p>
        Właściwości i działanie: Jest z powodzeniem wykorzystywana jako słodzik,
        dzięki wysokiej zawartości glikozydów stewiolowych. Stewię można
        spożywać w różnej formie: proszku, tabletek, suszonych lub świeżych
        liści. Najbardziej wartościowe są liście i kwiaty (korzenie nie
        zawierają dobroczynnych związków). Świeże liście stewii można dodawać do
        potraw, sałatek i napojów, sproszkowane zaś mogą posłużyć jako słodzik.
        Spożywanie stewii pobudza apetyt, działa regenerująco na trzustkę,
        zwalcza nadciśnienie i oczywiście pomaga w walce z cukrzycą. Stosowana
        natomiast w formie maseczek i okładów pozytywnie wpływa na zanikanie
        trądziku, zamykanie porów, gojenie się ran oraz dezynfekuje skórę. Żucie
        świeżych listków lub łodyżek stewii zapobiega próchnicy zębów.
      </p>
      <ButtonBack />
    </div>

    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsStevia;
