import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import GalleryGarden from "../../component/Gallery/GalleryGarden";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListGarden = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
       <Grid.Row style={{ padding: "0 30px" }}>
          <Segment style={{ width: "100%" }}>
            <div class="text-center post-header">
              <h2 class="post-title">Galeria - ogródek</h2>
            </div>
          </Segment>
          <GalleryGarden />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4} only="computer">
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <ScrollUpButton />
    <Footer />
  </>
);

export default GalleryListGarden;
