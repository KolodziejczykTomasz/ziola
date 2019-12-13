import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";

import styles from "./History.module.scss";

const History = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment className={styles.wrapper}>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Historia Stowarzyszenia</h2>
              </div>
            </Segment>

            <Segment className={styles.description}>
              <p>
                Pomysł na założenie Stowarzyszenia „Babki Zielarki” zrodził się
                od założenia w 2011 r. nieformalnego Klubu „Babki Zielarki”, a
                później nastąpiło jego przekształcenie w stowarzyszenie „Babki
                Zielarki”.{" "}
              </p>

              <p>
                W dniu 09 kwietnia 2015 stowarzyszenie zostało wpisane do
                Krajowego Rejestru Sądowego. Głównymi pomysłodawczyniami i
                założycielkami były Pani Lucja Kuczyńska i Anna Pacanowska,
                które za główny cel założyły sobie promowanie wsi poprzez
                zielarstwo i ekologię oraz promocję produktów regionalnych.{" "}
              </p>
              <p>
                Babcia jednej z Pań była znaną w okolicy szeptuchą, teraz
                kolejne pokolenia idą w jej ślady, odtwarzając dawne recepty.
                Obecnie wieś Blanki słynie z produktów powstałych z miejscowych
                ziół, takich jak syropy, nalewki, dżemy. Głównym miejscem
                lokalnej aktywności jest świetlica wiejska, w której często
                odbywają się prezentacje i degustacje prowadzone przez Babki
                Zielarki.{" "}
              </p>
              <p>
                W ostatnim czasie Blanki dorobiły się Zielarskiej Chaty i
                prawdziwego ogrodu ziołowego.{" "}
              </p>
            </Segment>
          </Segment>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={4}>
        <AsideAbout />
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default History;
