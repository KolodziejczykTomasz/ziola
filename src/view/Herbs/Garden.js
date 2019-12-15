import React from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import GalleryGarden from "../../component/Gallery/GalleryGarden";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

import ScrollUpButton from "react-scroll-up-button";

import "bootstrap/dist/css/bootstrap.min.css";

import GardenHerbs from "../../assets/images/ogrodZiolowy.jpg";

const Garden = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Ogród Ziołowy</h2>
              </div>
            </Segment>
            <div class="post-preview">
              <Image src={GardenHerbs} alt="foto" class="img-fluid rounded" />
            </div>
            <div class="post-content">
              <p>
                Przygody w ziołowym ogródku – zabawa, dzięki której nauczymy się
                rozpoznawać rośliny lecznicze.
              </p>
              <p>
                W skrzynkach możemy dostrzec zioła, których na co dzień używamy
                w domach: estragon, mięta, lubczyk, tymianek, lawenda,
                dziurawiec, malina, bylica jak również owoce pigwowca czy bzu
                czarnego.
              </p>
            </div>
            <div>
              <GalleryGarden />
            </div>
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4}>
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
