import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Slide from "../../component/Slide/Slide";
import Footer from "../../component/Footer/Footer";
import List from "../../component/HomeList/List";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import BabkiZielarki from "../../assets/images/logo/babkizielarki.jpg";

import "semantic-ui-css/semantic.min.css";

const Home = () => (
  <>
    <Header />
    <Slide />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Babki Zielarki</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img
                src={BabkiZielarki}
                alt="Babki Zielarki"
                class="img-fluid rounded"
              />
            </div>
            <div class="post-content">
              <p>
                Blanki słyną z produktów wytwarzanych na bazie ziół. „Babki
                Zielarki” korzystają z kwiatów czarnego bzu, mniszka
                lekarskiego, owoców pigwowca, dzikiej róży, aronii, jarzębiny,
                poziomek, malin czy korzenia arcydzięgla. Nalewki i syropy o
                wyjątkowych nazwach są bez wątpienia flagowym produktem Blanek,
                a wśród nowości polecana jest nalewka z rzewienia oraz z
                dziewanny.
              </p>

              <p>
                Na bazie naturalnych surowców powstają również niezwykłe dania i
                wypieki np. zupa z pokrzywy, pierogi z kapustą i grzybami z
                miejscowego lasu, gołąbki z soczewicą czy naleśniki z serem i
                pokrzywą oraz ciastka ze skwarek.
              </p>
            </div>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Aktualności</h2>
              </div>
            </Segment>
            <List />
          </Segment>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={4}>
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default Home;
