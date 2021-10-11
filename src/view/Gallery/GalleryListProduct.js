import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import GalleryProduct from "../../component/Gallery/GalleryProduct";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListProduct = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
       <Grid.Row style={{ padding: "0 30px" }}>
          <Segment style={{ width: "100%" }}>
            <div class="text-center post-header">
              <h2 class="post-title">Galeria - produkty</h2>
            </div>
          </Segment>
            <GalleryProduct />     
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

export default GalleryListProduct;
