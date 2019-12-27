import React from "react";
import { Link } from "react-router-dom";
import { Card, Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

import Aramowicz from "../../assets/images/flat/aramowicz.jpg";
import Baranowska from "../../assets/images/flat/baranowska.jpg";
import Gabrys from "../../assets/images/flat/gabrys.jpg";
import Kolecka from "../../assets/images/flat/kolecka.jpg";
import Liminowicz from "../../assets/images/flat/liminowicz.jpg";

import styles from "./Flat.module.scss";

const Flat = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Noclegi</h2>
              </div>
            </Segment>
            <Grid.Column >
              <Grid.Row>              
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/flatAramowicz">
                    <Card>
                      <img
                        alt="Noclegi"
                        className={styles.cardImage}
                        src={Aramowicz}
                      />
                      <Card.Content>
                        <Card.Header>
                          <p className={styles.Header}>Gospodarstwo Agroturystyczne "Domek na Wzgórzu"</p>
                        </Card.Header>
                        <Card.Description>Blanki</Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/flatGabrys">
                    <Card>
                      <img
                        alt="Noclegi"
                        className={styles.cardImage}
                        src={Gabrys}
                      />
                      <Card.Content>
                        <Card.Header>
                          <p className={styles.Header}> Gospodarstwo Agroturystyczne "GABRYŚ" </p>
                        </Card.Header>
                        <Card.Description>Suryty</Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/flatKolecka">
                    <Card>
                      <img
                        alt="Noclegi"
                        className={styles.cardImage}
                        src={Kolecka}
                      />
                      <Card.Content>
                        <Card.Header>
                          <p className={styles.Header}>Gospodarstwo Agroturystyczne Janina Zach - Kołecka </p>
                        </Card.Header>
                        <Card.Description>Suryty</Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/flatLiminowicz">
                    <Card>
                      <img
                        alt="Noclegi"
                        className={styles.cardImage}
                        src={Liminowicz}
                      />
                      <Card.Content>
                        <Card.Header>
                          <p className={styles.Header}>Gospodarstwo Agroturystyczne Teresa Liminowicz </p>
                        </Card.Header>
                        <Card.Description>Suryty</Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
                <Grid.Column className={styles.cardItem}>
                  <Link as={Link} to="/flatBaranowska">
                    <Card>
                      <img
                        alt="Noclegi"
                        className={styles.cardImage}
                        src={Baranowska}
                      />
                      <Card.Content>
                        <Card.Header>
                          <p className={styles.Header}>Gospodarstwo Agroturystyczne "Mario" </p>
                        </Card.Header>
                        <Card.Description>Suryty</Card.Description>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>             
              </Grid.Row>
            </Grid.Column>
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

export default Flat;
