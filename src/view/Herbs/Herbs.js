import React from "react";
import { Link } from "react-router-dom";
import { Segment, Grid, Card } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import ScrollUpButton from "react-scroll-up-button";

import Aronia from "../../assets/images/herbs/aronia.jpg";
import Bylica from "../../assets/images/herbs/bylica_estragon.jpg";
import Deren from "../../assets/images/herbs/deren.jpg";
import Dziurawiec from "../../assets/images/herbs/dziurawiec_zwyczajny.jpg";
import Lubczyk from "../../assets/images/herbs/lubczyk_ogrodowy.jpg";
import Melisa from "../../assets/images/herbs/melisa_lekarska.jpg";
import Rokitnik from "../../assets/images/herbs/rokitnik.jpg";
import Roza from "../../assets/images/herbs/roza_omszona.jpg";
import Rozmaryn from "../../assets/images/herbs/rozmaryn_lekarski.jpg";
import Rumianek from "../../assets/images/herbs/rumianek_pospolity.jpg";
import Stevia from "../../assets/images/herbs/stevia_rebaudiana.jpg";
import Szalwia from "../../assets/images/herbs/szalwia_lekarska.jpg";
import Waleriana from "../../assets/images/herbs/waleriana.jpg";
import Wiesiolek from "../../assets/images/herbs/wiesiolek.jpg";

import styles from "./Herbs.module.scss";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";

const Herbs = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column mobile={16} tablet={16} computer={12}>
        <Grid.Row>
          <Segment className={styles.wrapper}>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Zioła</h2>
              </div>
            </Segment>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsAronia">
                    <img
                      className={styles.images}
                      alt="Zioła - Aronia"
                      src={Aronia}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Aronia</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsBylica">
                    <img
                      className={styles.images}
                      alt="Zioła - Bylica "
                      src={Bylica}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Bylica estragon</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsDeren">
                    <img
                      className={styles.images}
                      alt="Zioła - Dereń"
                      src={Deren}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Dereń</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsDziurawiec">
                    <img
                      className={styles.images}
                      alt="Zioła - Dziurawiec"
                      src={Dziurawiec}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Dziurawiec zwyczajny</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsLubczyk">
                    <img
                      className={styles.images}
                      alt="Zioła - Lubczyk"
                      src={Lubczyk}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Lubczyk ogrodowy</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
            <Grid doubling columns={5}>
              <Grid.Column>
                <Card>
                  {" "}
                  <Link as={Link} to="/herbsMelisa">
                    <img
                      className={styles.images}
                      alt="Zioła - Melisa"
                      src={Melisa}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Melisa lekarska</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsRokitnik">
                    <img
                      className={styles.images}
                      alt="Zioła - Rokitnik"
                      src={Rokitnik}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Rokitnik</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsRozmaryn">
                    <img
                      className={styles.images}
                      alt="Zioła - Rozmaryn"
                      src={Rozmaryn}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Rozmaryn lekarski</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsRumianek">
                    <img
                      className={styles.images}
                      alt="Zioła - Rumianek"
                      src={Rumianek}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Rumianek pospolity</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsStevia">
                    <img
                      className={styles.images}
                      alt="Zioła - Stevia"
                      src={Stevia}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Stevia rebaudiana</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsSzalwia">
                    <img
                      className={styles.images}
                      alt="Zioła - Szałwia"
                      src={Szalwia}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Szałwia lekarska</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsWaleriana">
                    <img
                      className={styles.images}
                      alt="Zioła - Waleriana"
                      src={Waleriana}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Waleriana</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsWiesiolek">
                    <img
                      className={styles.images}
                      alt="Zioła - Wiesiołek"
                      src={Wiesiolek}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Wiesiołek</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Link as={Link} to="/herbsRoza">
                    <img
                      className={styles.images}
                      alt="Zioła - Róża"
                      src={Roza}
                    />
                  </Link>
                  <Card.Content>
                    <Card.Header>Róża omszona</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid>
            <Grid doubling columns={5}></Grid>
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

export default Herbs;
