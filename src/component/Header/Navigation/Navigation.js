import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Logo from "../../../assets/images/logo/logoStowMin.jpg";

import styles from "./Navigation.module.scss";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrapper}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className={styles.logobox}>
          <img src={Logo} alt="Logo Stowarzyszenia" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={styles.topnav}>
            <Nav navbar className={styles.navigationmenu}>
              <NavItem>
                <Link as={Link} to="/" className={styles.navigationlink}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link as={Link} to="/flat" className={styles.navigationlink}>
                  Noclegi
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  as={Link}
                  to="/education"
                  className={styles.navigationlink}
                >
                  Edukacja
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={styles.navigationdropdown}>
                  Zioła
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/herbs"
                      className={styles.navigationdropdownitemlink}
                    >
                      Poznaj zioła
                    </Link>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/recipes"
                      className={styles.navigationdropdownitemlink}
                    >
                      Przepisy
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/garden"
                      className={styles.navigationdropdownitemlink}
                    >
                      Ogródek ziołowy
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className={styles.navigationdropdown}>
                  Stowarzyszenie
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/government"
                      className={styles.navigationdropdownitemlink}
                    >
                      Władze
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/history"
                      className={styles.navigationdropdownitemlink}
                    >
                      Historia
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link
                      as={Link}
                      to="/activity"
                      className={styles.navigationdropdownitemlink}
                    >
                      Działalność
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link as={Link} to="/gallery" className={styles.navigationlink}>
                  Galeria
                </Link>
              </NavItem>
              <NavItem>
                <Link as={Link} to="/contact" className={styles.navigationlink}>
                  Kontakt
                </Link>
              </NavItem>
            </Nav>
          </Nav>{" "}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
