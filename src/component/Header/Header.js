import React from "react";
import Logo from "../../assets/images/logo/logo.jpg";
import Navigation from "./Navigation/Navigation";

import styles from "./Header.module.scss";

const Header = () => (
  <>
    <div className={styles.wrapper}>
      <img className={styles.wrapperimg} src={Logo} alt="Logo" />
    </div>
    <div>
      <Navigation />
    </div>
  </>
);

export default Header;
