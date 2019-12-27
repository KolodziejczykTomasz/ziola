import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import GalleryGarden from "../../component/Gallery/GalleryGarden";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

import ScrollUpButton from "react-scroll-up-button";

import GardenHerbs from "../../assets/images/ogrodZiolowy.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Garden.module.scss";

const Garden = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>
                  Ogród Ziołowy</h2>
              </div>
            </Segment>
            <div className={styles.post}>
              <img
                src={GardenHerbs}
                alt="Ogród Ziołowy"
                className={styles.logo}
              />
            </div>
            <div className={styles.postDescritpion}>
              <p className={styles.postDescritpionText}>
                Przygody w ziołowym ogródku – zabawa, dzięki której nauczymy się
                rozpoznawać rośliny lecznicze.
              </p>
              <p className={styles.postDescritpionText}>
                W skrzynkach możemy dostrzec zioła, których na co dzień używamy
                w domach: estragon, mięta, lubczyk, tymianek, lawenda,
                dziurawiec, malina, bylica jak również owoce pigwowca czy bzu
                czarnego.
              </p>
            </div>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Galeria</h2>
              </div>
            </Segment>
            <Segment>
              <GalleryGarden />
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
    <ScrollUpButton />
    <Footer />
  </>
);

export default Garden;
