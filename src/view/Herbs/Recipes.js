import React from "react";
import { Grid, Segment } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import AsideAbout from "../../component/Aside/AsideAbout/AsideAbout";
import AsideSocial from "../../component/Aside/AsideSocial/AsideSocial";
import AsideHerbs from "../../component/Aside/AsideHerbs/AsideHerbs";
import FormRecipes from "../../component/Form/FormRecipes/FormRecipes";
import ScrollUpButton from "react-scroll-up-button";

import Piernik from "../../assets/images/recipes/piernik.JPG";
import Syrop from "../../assets/images/recipes/syrop.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Recipes.module.scss";

const Recipes = () => (
  <>
    <Header />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <Segment>

            <Segment>
              <Segment>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Syrop z babki lancetowatej – najlepsze lekarstwo na kaszel
                  </h2>
                </div>
              </Segment>

              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-4 text-left">
                    <p className={styles.DescritpionText}>
                      Około 0,5kg liści młodej babki + 1l wody zagotowanej i
                      pozostawionej na 24h.
                    </p>
                    <p className={styles.DescritpionText}>
                      Po tym czasie należy odcedzić wywar i wycisnąć liście.
                    </p>
                    <p className={styles.DescritpionText}>
                      Dodać do tego ok 1kg cukru i sok z cytryny. Gotować ok 40
                      min.
                    </p>
                  </div>
                  <div class="col-lg-4">
                    <img src={Syrop} alt="Syrop" className={styles.singleImg}/>
                  </div>
                </div>
           
              </div>
            </Segment>

            <Segment>
              <Segment>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>Pierniki</h2>
                </div>
              </Segment>

              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-4 text-left">                  
                    <p className={styles.DescritpionText}>
                        <ul>
                          <li>2,5 szklanki mąki</li>
                          <li>0,5 szklanki cukru</li>
                          <li>0,5 szklanki miodu</li>
                          <li>1 łyż. sody</li>
                          <li>1 łyż. cynamonu</li>
                          <li>1 łyż. imbiru </li>
                          <li>1 łyż. przyprawy do piernika </li>
                          <li>szczypta soli</li>
                          <li>cukier waniliowy</li>
                          <li>1 żółtko</li>
                          <li>Białko na lukier</li>
                          <li>0,5 kostki margaryny lub masła</li>
                          <li>2 łyżeczki kakao </li>
                        </ul>
                      </p>
                  
                  </div>
                  <div class="col-lg-4">
                    <img src={Piernik} alt="Pierniki" className={styles.singleImg} />
                  </div>
                  <p className={styles.DescritpionText}>
                    Tłuszcz + miód rozpuszczamy, łączymy z pozostałymi
                    składnikami. Zagniatamy ciasto (ciasto musi odpocząć),
                    formujemy pierniki.
                </p>
                </div>
                <p class="text-center"></p>
              </div>
            </Segment>

            
            <Segment>
              <Segment>
                <div className={styles.postHeader}>
                  <h2 className={styles.postHeaderTitle}>
                    Naleśniki z serem i pokrzywą
                  </h2>
                </div>
              </Segment>
              <div class="container-fluid">
                <div class="row">
                  <div className={styles.Descritpion}>
                    <p className={styles.DescritpionText}>Ciasto naleśnikowe niezbyt gęste.</p>
                    <p className={styles.DescritpionText}>
                      Farsz: ser feta – 1 opakowanie, twaróg biały ok. 20 dag,
                      sól, pierz, pokrzywa .
                    </p>
                    
                  </div>
                  <p className={styles.DescritpionText}>
                      Zrywamy świeże młode liście pokrzywy, należy je opłukać
                      zimną wodą, zaparzyć wrzątkiem. Kroimy drobno, przekładamy
                      na patelnię, podsmażamy na maśle, dodajemy cebulę i
                      czosnek, sól, pieprz, łączymy z serem. Uformowane
                      naleśniki obsmażamy z obu stron. Wspaniałe!
                    </p>
                </div>
              </div>
            </Segment>

            <div className={styles.wrapperContact}>
              <h2 className={styles.wrapperText}>Podziel się przepisem</h2>
              <FormRecipes />
            </div>
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

export default Recipes;
