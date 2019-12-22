import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import { Card, Segment, Grid } from "semantic-ui-react";
import Activity from "../../assets/images/gallery/logo/Activity.jpg";
import Herbs from "../../assets/images/gallery/logo/Herbs.jpg";
import Garden from "../../assets/images/gallery/logo/Garden.JPG";
import Product from "../../assets/images/gallery/logo/Product.jpg";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

import styles from "../Gallery/Gallery.module.scss";

const Gallery = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment className={styles.wrapper}>
            <Segment>
              <div className={styles.postHeader}>
                <h2 className={styles.postHeaderTitle}>Galerie</h2>
              </div>
            </Segment>
            <Grid.Column mobile={1} tablet={2} computer={4}>
              <Grid.Row>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/galleryProduct">
                    <Card>
                      <img
                        alt="Galeria - produkt"
                        src={Product}
                        className={styles.cardImage}
                      />
                      <Card.Content>
                        <Card.Header>
                          <span className={styles.cardHeader}>
                          Produkty</span></Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/galleryGarden">
                    <Card>
                      <img
                        alt="Galeria - ogród"
                        src={Garden}
                        className={styles.cardImage}
                      />
                      <Card.Content>
                        <Card.Header>
                          <span className={styles.cardHeader}>Ogródek ziołowy</span></Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/galleryHerbs">
                    <Card>
                      <img
                        alt="Galeria - zioła"
                        src={Herbs}
                        className={styles.cardImage}
                      />
                      <Card.Content>
                        <Card.Header><span className={styles.cardHeader}>Zioła </span></Card.Header>
                      </Card.Content>
                    </Card>{" "}
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/galleryAcitivity">
                    <Card>
                      <img
                        alt="Galeria - działalność"
                        src={Activity}
                        className={styles.cardImage}
                      />
                      <Card.Content>
                        <Card.Header> <span className={styles.cardHeader}>Działalność</span></Card.Header>
                      </Card.Content>
                    </Card>
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
        <AsideHerbs />
      </Grid.Column>
    </Grid>

    <Footer />
  </>
);

export default Gallery;
