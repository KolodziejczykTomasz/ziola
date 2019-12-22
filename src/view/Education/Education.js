import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import Pierniki from "../../assets/images/edu/wp.jpg";
import Swiece from "../../assets/images/edu/ws.jpg";
import Ziola from "../../assets/images/edu/wz.jpg";

import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Education.module.scss";

import { Segment, Grid } from "semantic-ui-react";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

const Education = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h1 class="post-title">
                  Zapraszamy na szereg ciekawych warsztatów
                </h1>
              </div>
            </Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  WARSZTATY WYKONYWANIA PIERNIKÓW{" "}
                </h2>
              </div>
              <div class="post-preview">
                <div class="row text-center text-lg-center">
                  <div class="col-lg-12 col-md-3 col-xs-3">
                    <img
                      src={Pierniki}
                      alt="WARSZTATY WYKONYWANIA PIERNIKÓW"
                      className={styles.logo}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.post}>
                <p className={styles.postDescription}>
                  Doskonała okazja do przygotowania ciasta zgodnego z tradycją,
                  z którego powstaną słodkie pierniczki. Do przygotowania
                  wspaniałego ciasta potrzebne są wszystkie zmysły. Idealne
                  ciasto otrzymujemy poprzez wąchanie, smakowanie i ugniatania
                  ciasta, które staje się plastyczne pod wpływem ciepła rąk.
                  Oferta obejmuje robienie własnych pierniczków: wałkowanie,
                  wycinanie wybranymi świątecznymi foremkami i ozdabianie wg.
                  własnego pomysłu
                </p>
              </div>
            </Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  WARSZTATY WYKONYWANIA ŚWIEC
                </h2>
              </div>
              <div class="post-preview">
                <div class="row text-center text-lg-center">
                  <div class="col-lg-12 col-md-3 col-xs-3">
                    <img
                      src={Swiece}
                      alt="WARSZTATY WYKONYWANIA ŚWIEC"
                      className={styles.logo}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.post}>
                <p className={styles.postDescription}>
                  Jest to ciekawa propozycja dla kreatywnego i produktywnego
                  spędzenia czasu. Na zajęciach zapoznać się będzie można się z
                  techniką wykonania świec, temperaturą topnienia i obróbką
                  parafiny. Wykonane świece zostają zabrane do domu.
                </p>
              </div>
            </Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  WARSZTATY WYKONYWANIA SYROPÓW LECZNICZYCH{" "}
                </h2>
              </div>

              <div className={styles.post}>
                <p className={styles.postDescription}>
                  Na warsztatach można nauczyć się przygotowywać bezpieczne i
                  skuteczne preparaty lecznicze z różnego rodzaju ziół. Każdy z
                  uczestników dowie się, jak modyfikować i dodawać składniki, by
                  uzyskać inne działanie w zależności od przebiegu infekcji.
                </p>
              </div>
            </Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>WARSZTATY ZIELARSKIE</h2>
              </div>
              <div class="post-preview">
                <div class="row text-center text-lg-center">
                  <div class="col-lg-12 col-md-3 col-xs-3">
                    <img
                      src={Ziola}
                      alt="WARSZTATY ZIELARSKIE"
                      className={styles.logo}
                    />
                  </div>{" "}
                </div>
              </div>
              <div className={styles.post}>
                <p className={styles.postDescription}>
                  To doskonała oferta dla tych, którzy chcą być blisko natury i
                  nauczyć się rozpoznawać zioła, oraz ich działanie. Na
                  warsztatach można zyskać podstawowe wiadomości związane z
                  poznaniem ziół w terenie, ich nazewnictwem, właściwościami,
                  zastosowaniem w ziołolecznictwie i kuchni. Podczas warsztatów
                  można zdegustować potraw, syropów i dżemów.
                </p>
              </div>
            </Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>WARSZTATY KULINARNE</h2>
              </div>
              <div className={styles.post}>
                <p className={styles.postDescription}>
                  Idealny pomysł na spędzenie czasu w kuchni, stwarzając
                  wyśmienite dania, których skład oraz smak zadziwi wszystkich
                  domowników. Zupa z pokrzyw, konfitura z dzikiej róży, ciastka
                  z lawendą, to tylko niektóre propozycje. Zapraszamy do
                  samodzielnego zapoznania się i spróbowania innych dań z
                  ziołami.
                </p>
              </div>
            </Segment>
          </Segment>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={4}>
        <AsideAbout />
        <AsideSocial />
        <AsideHerbs />
      </Grid.Column>
    </Grid>

    <Footer />
  </>
);

export default Education;
