import React from "react";
import { Grid, Image} from 'semantic-ui-react';


import Logo from "../../../assets/images/home/Logo.jpg";
import styles from "../AsideAbout/AsideAbout.module.scss";


const AsideAbout = () => (
<Grid>  
    <Grid.Column width={15}>
        <Grid.Row>
           <Image src={Logo} alt="Photo_image" className={styles.imagesperview}/> 
        </Grid.Row>
    <Grid.Row>
         <p>
            Zielarska Wieś Blanki to miejsce na Warmii i Mazurach, gdzie pomysł
            na wieś narodził się z małego zielnika. Lokalizacja i zrównoważona
            gospodarka rolnicza bez presji przemysłu zapewnia czyste powietrze,
            ciszę, spokój oraz kontakt z naturą. Inicjatorkami powołania wsi
            tematycznej są jej mieszkanki – pasjonatki zielarstwa.
          </p>
    </Grid.Row>
         
    </Grid.Column>
  </Grid>  
  );

export default AsideAbout;
