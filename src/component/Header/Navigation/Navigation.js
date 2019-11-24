import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Logo from '../../../assets/images/logo/logoStowMin.jpg';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                < img src={Logo} alt="Logo Stowarzyszenia" />                
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>            
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Noclegi</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Edukacja
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Poznaj zioła
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Przepisy
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Ogródek ziołowy
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Stowarzyszenie
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Władze
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Historia
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Działalność
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/components/">Galeria</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Kontakt</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default Navigation;
