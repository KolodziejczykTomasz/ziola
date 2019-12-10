import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import { Card, Image, Segment, Grid } from "semantic-ui-react";
import Aramowicz from "../../assets/images/flat/aramowicz.jpg";
import Baranowska from "../../assets/images/flat/baranowska.jpg";
import Gabrys from "../../assets/images/flat/gabrys.jpg";
import Kolecka from "../../assets/images/flat/kolecka.jpg";
import Liminowicz from "../../assets/images/flat/liminowicz.jpg";

const Flat = () => (
  <>
    <Header />
    <h1>Baza noclegowa</h1>
    <Segment>
      <Grid.Column mobile={1} tablet={2} computer={5}>
        <Grid.Row>
          <Grid.Column>
            <Link as={Link} to="/flatAramowicz">
              <Card>
                <Image src={Aramowicz} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Domek na Wzgórzu</Card.Header>
                  <Card.Description>Blanki</Card.Description>
                </Card.Content>
              </Card>{" "}
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link as={Link} to="/flatBaranowska">
              <Card>
                <Image src={Baranowska} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Agroturystyka "Mario"</Card.Header>
                  <Card.Description>Suryty</Card.Description>
                </Card.Content>
              </Card>{" "}
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link as={Link} to="/flatGabrys">
              <Card>
                <Image src={Gabrys} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Gospodarstwo Agroturystyczne GABRYŚ</Card.Header>
                  <Card.Description>Suryty</Card.Description>
                </Card.Content>
              </Card>{" "}
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link as={Link} to="/flatKolecka">
              <Card>
                <Image src={Kolecka} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>
                    Gospodarstwo Agroturystyczne Janina Zach- Kołecka
                  </Card.Header>
                  <Card.Description>Suryty</Card.Description>
                </Card.Content>
              </Card>{" "}
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link as={Link} to="/flatLiminowicz">
              <Card>
                <Image src={Liminowicz} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>TERESA LIMINOWICZ</Card.Header>
                  <Card.Description>Suryty</Card.Description>
                </Card.Content>
              </Card>{" "}
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
    </Segment>
    <Footer />
  </>
);

export default Flat;
