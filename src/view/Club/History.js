import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";
import Logo from "../../assets/images/logo/photo.jpg";

import styles from "./History.module.scss";

const History = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row>
          <Segment className={styles.wrapper}>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  Historia Stowarzyszenia
                </h2>
              </div>
            </Segment>
            <Segment className={styles.post}>
              <div className={styles.postDescritpion}>
                <img
                  src={Logo}
                  alt="Babki Zielarki"
                  className={styles.photo}
                />

                <p className={styles.postDescritpionText}>
                  Pomysł na założenie Stowarzyszenia „Babki Zielarki” zrodził
                  się od założenia w 2011 r. nieformalnego Klubu „Babki
                  Zielarki”, a później nastąpiło jego przekształcenie w
                  stowarzyszenie „Babki Zielarki”.
                </p>
                <p className={styles.postDescritpionText}>
                  W dniu 09 kwietnia 2015 stowarzyszenie zostało wpisane do
                  Krajowego Rejestru Sądowego. Głównymi pomysłodawczyniami i
                  założycielkami były Pani Lucja Kuczyńska i Anna Pacanowska,
                  które za główny cel założyły sobie promowanie wsi poprzez
                  zielarstwo i ekologię oraz promocję produktów regionalnych.
                </p>
                <p className={styles.postDescritpionText}>
                  Babcia jednej z Pań była znaną w okolicy szeptuchą, teraz
                  kolejne pokolenia idą w jej ślady, odtwarzając dawne recepty.
                  Obecnie wieś Blanki słynie z produktów powstałych z
                  miejscowych ziół, takich jak syropy, nalewki, dżemy. Głównym
                  miejscem lokalnej aktywności jest świetlica wiejska, w której
                  często odbywają się prezentacje i degustacje prowadzone przez
                  Babki Zielarki.{" "}
                </p>
                <p className={styles.postDescritpionText}>
                  W ostatnim czasie Blanki dorobiły się Zielarskiej Chaty i
                  prawdziwego ogrodu ziołowego.
                </p>
              </div>
            </Segment>
          </Segment>
        </Grid.Row>
      </Grid.Column>

      <Grid.Column width={4} only='computer'>
        <AsideAbout />
        <AsideSocial />
        <AsideHerbs />
      </Grid.Column>
    </Grid>
    <Footer />
  </>
);

export default History;
