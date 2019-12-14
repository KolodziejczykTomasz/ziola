import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";

import ScrollUpButton from "react-scroll-up-button";
import ButtonBack from "../../component/Button/ButtonBack";

import Rozmaryn from "../../assets/images/herbs/rozmaryn_lekarski.jpg";

const HerbsRozmaryn = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>
            <Segment>
              <div class="text-center post-header">
                <h2 class="post-title">
                  Rozmaryn lekarski (łac. Rosmarinus officinalis)
                </h2>
              </div>
            </Segment>

            <div class="post-preview">
              <Image src={Rozmaryn} alt="Rozmaryn lekarski" />
            </div>

            <div class="post-content">
              <p>
                Bylina należąca do rodziny jasnotowatych. Jest półkrzewem, w
                naszym klimacie to krzewinka dorastająca do 30–60 cm wysokości.
                Tworzy szerokie kępy złożone z licznych, wzniesionych, ale
                skłonnych do pokładania się pędów, które drewnieją u podstawy.
                Pędy są porośnięte licznymi, podłużnie owalnymi lub
                lancetowatymi liśćmi. Kwitnie od końca maja do końca lipca
                (zakwita w drugim roku uprawy z nasion). Niebieskofioletowe
                kwiaty są zebrane w kwiatostany osadzone na końcach pędów
                kwiatostanowych. Kwiaty są miododajne.
              </p>

              <p>
                Właściwości i działanie: Ma zdecydowany, balsamiczny smak ,
                gorzki zmierzający do słodkiego. Zawiera witaminy A, z grupy B,
                C oraz wapń, żelazo, magnez czy potas. Przez działanie na serce
                i wątrobę, uspokaja rozdrażnienie i zmniejsza wahania nastrojów
                a nawet ma działanie antydepresyjnie. Działa głównie na serce,
                wątrobę i nerki – wzmacniając odporność organizmu. Liście
                usuwają przewlekłe zmęczenie, działają ściągająco i rozkurczowo.
                Poprawia pracę woreczka żółciowego i trawienie, a także
                oczyszcza wszelkie stany zapalne. Sprawdza się doskonale przy
                bólach gardła, kłopotach z dziąsłami, przy problemach z cerą,
                swędzeniu czy łupieżu.
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

export default HerbsRozmaryn;
