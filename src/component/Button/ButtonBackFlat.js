import React from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonBackFlat.module.scss";


const ButtonBackFlat = () => (
  <div>
    <Link as={Link} to="/flat">
      <button className={styles.buttonClass}>Powrót</button>
    </Link>
  </div>
);

export default ButtonBackFlat;