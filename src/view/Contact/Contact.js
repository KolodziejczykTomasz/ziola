import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Grid, Divider, Image } from "semantic-ui-react";
import FormContact from "../../component/Form/FormContact";
import Logo from "../../assets/images/home/Logo.jpg";

import styles from "./Contact.module.scss";
import PhoneIcon from "../../component/Icon/Phone/PhoneIcon";
import EmailIcon from "../../component/Icon/Email/EmailIcon";

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
              <p className={styles.wrapperAddressText}>
                Stowarzyszenie „Babki Zielarki”
              </p>
              <p className={styles.wrapperAddressText}>Blanki 50</p>
              <p className={styles.wrapperAddressText}>
                11-100 Lidzbark Warmiński
              </p>
            </div>
            <div className={styles.wrapperAddressTextContact}>
              <PhoneIcon /> 606 960 191 | <EmailIcon /> iwona.blanki@wp.pl
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider />
    <div className={styles.wrapperContact}>
      <h2 className={styles.wrapperText}>Napisz do nas</h2>
      <FormContact />
    </div>

    <Footer />
  </>
);

export default Contact;
