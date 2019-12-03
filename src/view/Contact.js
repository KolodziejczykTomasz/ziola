import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Grid, Divider, Image } from "semantic-ui-react";
import Logo from "../assets/images/home/Logo.jpg";

import styles from "./Contact.module.scss";

const Contact = () => (
  <>
    <Header />
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
      <Image src={Logo} alt="Logo" className={styles.wrapperImage} />
          </Grid.Column>
          <Grid.Column width={8} >
            <div>
              <p>Stowarzyszenie „Babki Zielarki”</p>
              <p>Blanki 50</p>
              <p>11-100 Lidzbark Warmiński</p>
            </div>              
          </Grid.Column>
        </Grid.Row>
      </Grid>
   <Divider />
   <h2>Napisz do nas</h2>

    <Footer />
  </>
);

export default Contact;
