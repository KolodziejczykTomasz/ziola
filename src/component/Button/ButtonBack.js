import React from "react";
import { Link } from "react-router-dom";
import styles from "./ButtonBack.module.scss";

const ButtonBack = () => (
  <div>
    <Link as={Link} to="/herbs">
      <button className={styles.buttonClass}>Powrót</button>
    </Link>
  </div>
);

export default ButtonBack;
