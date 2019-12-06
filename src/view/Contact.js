import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Grid, Divider, Image } from "semantic-ui-react";
import Form from "../component/Form/Form";
import Logo from "../assets/images/home/Logo.jpg";

import styles from "./Contact.module.scss";

const Contact = () => (
  <>
    <Header />
    <Grid>
      <Grid.Row>
        <Grid.Column width={7}>
          <Image src={Logo} alt="Logo" className={styles.wrapperImage} />
        </Grid.Column>
        <Grid.Column width={8}>
          <div className={styles.wrapperAddress}>
            <div className={styles.wrapperAddressText}>
              <p>Stowarzyszenie „Babki Zielarki”</p>
              <p>Blanki 50</p>
              <p>11-100 Lidzbark Warmiński</p>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider />
    <div className={styles.wrapperContact}>
      <h2 className={styles.wrapperText} >Napisz do nas</h2>
      <Form />
    </div>

    <Footer />
  </>
);

export default Contact;
