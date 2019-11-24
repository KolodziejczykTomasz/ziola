import React from 'react';
import Logo from '../../assets/images/logo/logo.jpg';
import Navigation from './Navigation/Navigation';


const Header = () => (
    <>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
            <Navigation />
        </div>
    </>
);

export default Header;