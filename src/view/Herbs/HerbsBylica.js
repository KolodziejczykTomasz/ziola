import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Bylica from "../../assets/images/herbs/bylica_estragon.jpg";

const HerbsBylica = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Bylica estragon (łac. Artemisia dracunculus)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <Image src={Bylica} alt="Bylica estragon" />
            </div>

            <div class="post-content">
              <p>
                To roślina wieloletnia, która wytwarza proste i słabo
                rozgałęzione łodygi, szybko się rozrasta, dorastając do około 1
                m wysokości. Liście estragonu są zielone i mają lancetowaty
                kształt. Estragon kwitnie od sierpnia do późnej jesieni.
                Niepozorne, zielonkawożółte kwiaty są zebrane w kwiatostany –
                koszyczki. Charakteryzuje się ostrym, gorzkawym i korzennym
                smakiem.{" "}
              </p>

              <p>
                Właściwości i działanie: Wykazuje właściwości lecznicze: pobudza
                apetyt i ułatwia trawienie (zwiększając wydzielanie soków
                trawiennych), pobudza wytwarzanie żółci, zmniejsza napięcie
                mięśni gładkich, działa też moczopędnie, przeciwzapalnie i
                rozkurczowo. Ziele estragonu zawiera dużo witaminy C i A. Świeże
                czy suszone ziele estragonu stosuje się do przyprawiania mięs
                (na przykład cielęciny czy drobiu), ryb, sosów, zup, a także do
                kwaszenia ogórków i przygotowywania octu ziołowego.
              </p>
              <ButtonBack />
            </div>
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4}>
        <AsideAbout />
        <AsideSocial />
      </Grid.Column>
    </Grid>
    <ScrollUpButton />
    <Footer />
  </>
);

export default HerbsBylica;
