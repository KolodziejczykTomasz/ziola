import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import { Card, Image, Segment, Grid } from "semantic-ui-react";
import Activity from "../../assets/images/gallery/logo/Activity.jpg";
import Herbs from "../../assets/images/gallery/logo/Herbs.jpg";
import Garden from "../../assets/images/gallery/logo/Garden.JPG";
import Product from "../../assets/images/gallery/logo/Product.jpg";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import styles from "../Gallery/Gallery.module.scss";

const Gallery = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment className={styles.wrapper}>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Galerie</h2>
              </div>
            </Segment>
            <Grid.Column mobile={1} tablet={2} computer={4}>
              <Grid.Row>
                <Grid.Column>
                  <Link as={Link} to="/galleryProduct">
                    <Card>
                      <Image src={Product} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Produkty</Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link as={Link} to="/galleryGarden">
                    <Card>
                      <Image src={Garden} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Ogródek ziołowy</Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link as={Link} to="/galleryHerbs">
                    <Card>
                      <Image src={Herbs} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Zioła</Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link as={Link} to="/galleryAcitivity">
                    <Card>
                      <Image src={Activity} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>Działalność</Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
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

export default Gallery;
