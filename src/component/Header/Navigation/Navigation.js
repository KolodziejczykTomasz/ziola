import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
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
    <div>
      <BrowserRouter>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo Stowarzyszenia" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link as={Link} to="/">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link as={Link} to="/flat">
                    Noclegi
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Edukacja
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link as={Link} to="/herbs">
                        Poznaj zioła
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link as={Link} to="/recipes">
                        Przepisy
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link as={Link} to="/garden">
                        Ogródek ziołowy
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Stowarzyszenie
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <Link as={Link} to="/government">
                        Władze
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link as={Link} to="/history">
                        Historia
                      </Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Link as={Link} to="/activity">
                        Działalność
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link as={Link} to="/gallery">
                    Galeria
                  </Link>
                </NavItem>
                <NavItem>
                  <Link as={Link} to="/contact">
                    Kontakt
                  </Link>
                </NavItem>
              </Nav>
            </Nav>
          </Collapse>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
