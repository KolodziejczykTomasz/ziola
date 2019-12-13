import React from "react";
import {Image, Segment} from 'semantic-ui-react';


import Logo from "../../../assets/images/home/Logo.jpg";
import styles from "../AsideAbout/AsideAbout.module.scss";


const AsideAbout = () => (
<Segment className={styles.wrapper}>  
    
        <div>
           <Image src={Logo} alt="Photo_image" className={styles.imagesperview}/> 
        </div>
    <div>
         <p>
            Zielarska Wieś Blanki to miejsce na Warmii i Mazurach, gdzie pomysł
            na wieś narodził się z małego zielnika. Lokalizacja i zrównoważona
            gospodarka rolnicza bez presji przemysłu zapewnia czyste powietrze,
            ciszę, spokój oraz kontakt z naturą. Inicjatorkami powołania wsi
            tematycznej są jej mieszkanki – pasjonatki zielarstwa.
          </p>
    </div>
  
  </Segment>  
  );

export default AsideAbout;
