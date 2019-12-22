import React from "react";
import { Segment, Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import Rokitnik from "../../assets/images/herbs/rokitnik.jpg";

import "./HerbsItem.css";

const HerbsRokitnik = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">Rokitnik (łac. Hippophaë rhamnoides)</h2>
              </div>
            </Segment>

            <div class="post-preview">
              <img 
              class="Logo"
                src={Rokitnik}
                alt="Rokitnik (łac. Hippophaë rhamnoides) "
              />
            </div>

            <div class="post-content">
              <p class="description">
                To krzew osiągający zwykle do 4-5 m wysokości. Rośnie jednak
                bardzo wolno. Rokitnik to roślina dwupienna – co oznacza, że do
                kwitnienia i owocowania wymaga posadzenia w pobliżu okazów
                męskich i żeńskich. Jest to roślina mało wymagająca – może
                rosnąć zarówno na stanowiskach słonecznych, jak i częściowo
                zacienionych. Można go uprawiać nawet na niezbyt żyznym,
                piaszczystym i wapiennym podłożu. Rokitnik jest odporny na
                suszę, zanieczyszczenia powietrza i mróz.{" "}
              </p>

              <p class="description">
                Właściwości i działanie: Owoce rokitnika zajmują drugą pozycję
                na liście owoców, które posiadają najwięcej witaminy C. Pod
                względem jej zawartości rokitnik ustępuje tylko owocom dzikiej
                róży. Zawarte w dużych ilościach w owocach rokitnika witaminy C
                i E oraz sterole roślinne obniżają poziom "złego" cholesterolu
                LDL, który doprowadza do zmian miażdżycowych, a dalej do
                schorzeń, takich jak, m.in. choroba wieńcowa (niedokrwienna
                serca), udar mózgu i zawał serca. Ponadto udowodniono, że sam
                kwas askorbinowy obniża ciśnienie krwi. Zawiera ponad 190
                bioaktywnych substancji, które pozytywnie wpływają na zdrowie.
                Wśród nich znajdują się antyoksydanty, flawonoidy, aminokwasy, a
                także nienasycone kwasy tłuszczowe, mikroelementy (m.in. potas,
                żelazo, fosfor, mangan, bor, wapń i krzem) oraz witaminy (A, C,
                D, E, K, P oraz te z grupy B) i prowitaminy. W celach
                leczniczych i pielęgnacyjnych wykorzystuje się owoce rokitnika,
                liście, a także olej z pulpy owoców lub nasion rokitnika.
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

export default HerbsRokitnik;
