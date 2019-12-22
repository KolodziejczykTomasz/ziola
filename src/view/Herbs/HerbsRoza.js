import React from "react";
import { Segment, Grid} from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Roza from "../../assets/images/herbs/roza_omszona.jpg";

import "./HerbsItem.css";

const HerbsRoza = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Róża omszona (łac. Rosa centifolia)</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img class="Logo" src={Roza} alt="Róża omszona" />
            </div>

            <div class="post-content">
              <p class="description">
                Ma pędy i pąki kwiatowe pokryte drobnymi, czerwonymi kolcami,
                oraz szypułki kwiatowe pokryte drobnymi, czerwonymi gruczołkami
                wydzielającymi bardzo silny zapach dzikich róż. Kwitnie bardzo
                długo, czasem powtarza jesienią – kwitnienie jest wtedy niezbyt
                obfite. Jest bardzo odporna na choroby, łatwa w uprawie, znosi
                ocienienie i gorsze gleby.
              </p>

              <p class="description">
                Właściwości i działanie: płatki tej róży można wykorzystywać do
                wykonywania konfitur. Na surowiec zielarski pozyskuje się owoce
                pozorne Jej właściwości znał już Hipokrates. W średniowieczu
                osobom wątłym i chorym podawano na wzmocnienie syrop różany
                -mieszaninę płatków róży i miodu, a chorym na nieżyty żołądka -
                płatki róży gotowane na winie. Świeży owoc dzikiej róży jest
                najbogatszym źródłem witaminy C (kwasu askorbowego) w
                przyrodzie. We współczesnej medycynie owoc róży stosowany jest
                przede wszystkim w przypadku przeziębień i chorób zakaźnych oraz
                w okresie rekonwalescencji. Owoc róży ma również działanie
                moczopędne i żółciopędne.
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

export default HerbsRoza;
