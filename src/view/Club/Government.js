import React, { Component } from "react";
import { Accordion, Icon, Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import styles from "./Government.module.scss";

class Government extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <>
        <Header />
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={12}>
           <Grid.Row style={{ padding: "0 30px" }}>
              <Segment style={{ width: "100%", marginBottom: "75px" }}>               
                  <div className={styles.postHeader}>
                    <h2 className={styles.postHeaderTitle}>Zarząd</h2>
                  </div> 
                <table
                  class="table table-hover"
                  style={{ margin: "50px auto" }}
                >
                  <tr className={styles.cell}>
                    <td>Plaskota Iwona</td> <td>Prezes</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Lucja Kuczyńska</td> <td>Z-ca Prezesa</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Lipska Urszula</td> <td>Skarbnik</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Magun Iwona</td> <td>Sekretarz</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Wiącek Grzegorz</td> <td>Członek Zarządu</td>
                  </tr>
                  <tr></tr>
                </table>
              </Segment>
              <Segment style={{ width: "100%", marginBottom: "75px" }}>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>Komisja Rewizyjna</h2>
                </div>
                <table
                  class="table table-hover"
                  style={{ margin: "50px auto" }}
                >
                  <tr className={styles.cell}>
                    <td>Anna Pacanowska</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Franciszek Podskarbis</td>
                  </tr>
                  <tr className={styles.cell}>
                    <td>Katarzyna Powideł</td>
                  </tr>
                </table>
              </Segment>
              <Accordion fluid styled >
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  CEL STOWARZYSZENIA
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Celem stowarzyszenia jest:
                    <ul className={styles.list}>
                      <li>
                        rozwój edukacyjny, kulturowy i materialny dzieci i
                        młodzieży terenów wiejskich gminy Lidzbark Warmiński;
                      </li>
                      <li>wzbogacanie osobowości i integracja mieszkańców;</li>
                      <li>
                        działania na rzecz zwiększania szans życiowych
                        mieszkańców wsi, zwłaszcza młodych ludzi;
                      </li>
                      <li>
                        promocja aktywnego trybu życia, sportu i turystyki;
                      </li>
                      <li>
                        kształtowanie postaw odpowiedzialności za wspólne
                        przedsięwzięcia;
                      </li>
                      <li>
                        ochrona środowiska i zasobów naturalnych, edukacja
                        ekologiczna, promocja zdrowej żywności;
                      </li>
                      <li>
                        kreowanie i rozwój produktów regionalnych, kultywowanie
                        tradycji regionalnych;
                      </li>
                      <li>
                        przeciwdziałanie przemocy w środowisku wiejskim,
                        nietolerancji i patologiom społecznym;
                      </li>
                      <li> działania na rzecz promocji wsi i okolic;</li>
                      <li>
                        rozwój turystyki aktywnej i tworzenie zintegrowanego
                        produktu turystycznego;
                      </li>
                      <li>
                        współpraca z instytucjami i organizacjami pozarządowymi
                        krajów Unii Europejskiej.
                      </li>
                    </ul>
                  </p>
                </Accordion.Content>
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  STATUT STOWARZYSZENIA
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <a className={styles.list} href="upload/statut.pdf">
                    Statut
                  </a>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4} only="computer">
            <AsideAbout />
            <AsideSocial />
          </Grid.Column>
        </Grid>
        <Footer />
      </>
    );
  }
}

export default Government;
