import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Slide from "../../component/Slide/Slide";
import Footer from "../../component/Footer/Footer";
import ScrollUpButton from "react-scroll-up-button";
import List from "../../component/HomeList/List";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

import BabkiZielarki from "../../assets/images/logo/babkizielarki.jpg";
import CookieConsent from "react-cookie-consent";

import "semantic-ui-css/semantic.min.css";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Header />
    <Slide />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row style={{ padding: "0 30px" }}>
          <Segment className={styles.wrapper} style={{ marginBottom: "75px" }}>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>Babki Zielarki</h2>
              </div>
            </Segment>
           
            <div className={styles.description}>
              <p className={styles.descriptionText}>
                Blanki słyną z produktów wytwarzanych na bazie ziół. „Babki
                Zielarki” korzystają z kwiatów czarnego bzu, mniszka
                lekarskiego, owoców pigwowca, dzikiej róży, aronii, jarzębiny,
                poziomek, malin czy korzenia arcydzięgla. Nalewki i syropy o
                wyjątkowych nazwach są bez wątpienia flagowym produktem Blanek,
                a wśród nowości polecana jest nalewka z rzewienia oraz z
                dziewanny.
              </p> 
                <img
                src={BabkiZielarki}
                alt="Babki Zielarki"
                className={styles.photo}
              />
              <p className={styles.descriptionText}>
                Na bazie naturalnych surowców powstają również niezwykłe dania i
                wypieki np. zupa z pokrzywy, pierogi z kapustą i grzybami z
                miejscowego lasu, gołąbki z soczewicą czy naleśniki z serem i
                pokrzywą oraz ciastka ze skwarek.
              </p>
            </div>
          </Segment>
          <Segment style={{ width: "100%" }}>
            <div className={styles.postHeader}>
              <h2 className={styles.postHeaderTitle}>Aktualności</h2>
            </div>
          </Segment>
          <List />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4} only="computer">
        <AsideAbout />
        <AsideSocial />
        <AsideHerbs />
      </Grid.Column>
    </Grid>
    <Footer />
    <ScrollUpButton />
    <CookieConsent
      location="bottom"
      buttonText="Wyrażam zgodę"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#2B373B", width: "100%", padding: "0 10px"}}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      <span>
        Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw.
        pliki cookies. Korzystanie z serwisu oznacza zgodę na ich zapis lub
        wykorzystanie. Zgodnie z Rozporządzeniem Parlamentu Europejskiego ws.
        ochrony danych osobowych oraz Ustawą o ochronie danych osobowych
        informujemy, że korzystanie z elektronicznych formularzy zgłoszeń odbywa
        się z poszanowaniem prawa ochrony danych osobowych. Państwa dane osobowe
        wykorzystywane są tylko na potrzeby świadczonych poprzez media
        elektroniczne usług na Państwa rzecz. Powierzone nam tu dane nie są
        wykorzystywane w żadnych innych celach. Jednocześnie informujemy, że
        mają Państwo prawo żądać ograniczenia przetwarzania powierzonych danych,
        wglądu w posiadane przez nasz serwis dane i usunięcia posiadanych danych
        osobowych. Więcej informacji można znaleźć w „Polityce prywatności”.
        Akceptuję
        <Link to="/rodo" className={styles.footerRodoLink}>
          "Politykę prywatności"
        </Link>
        i wykorzystania plików cookies w serwisie.
      </span>
    </CookieConsent>
  </>
);

export default Home;
