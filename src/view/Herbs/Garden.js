import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import GalleryGarden from "../../component/GalleryList/GalleryGarden";

import "bootstrap/dist/css/bootstrap.min.css";

import GardenHerbs from "../../assets/images/ogrodZiolowy.jpg";

const Garden = () => (
  <>
    <Header />
    <article class="post">
      <div class="text-center post-header">
        <h2 class="post-title">Ogród Ziołowy</h2>
      </div>

      <div class="post-preview">
        <img src={GardenHerbs} alt="foto" class="img-fluid rounded" />
      </div>

      <div class="post-content">
        <p>
          Przygody w ziołowym ogródku – zabawa, dzięki której nauczymy się
          rozpoznawać rośliny lecznicze.
        </p>

        <p>
          W skrzynkach możemy dostrzec zioła, których na co dzień używamy w
          domach: estragon, mięta, lubczyk, tymianek, lawenda, dziurawiec,
          malina, bylica jak również owoce pigwowca czy bzu czarnego.
        </p>
      </div>
      <div>
          <GalleryGarden />
      </div>

      <section class="section"></section>
    </article>
    <Footer />
  </>
);

export default Garden;
