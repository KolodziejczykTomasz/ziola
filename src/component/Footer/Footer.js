import React from 'react';
import ProwLogo from '../../assets/images/logo/prow_logo.jpg';
import FooterBar from '../Footer/FooterBar';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => (
    <>
    <FooterBar />
        <div>
            <img src={ProwLogo} alt="Logo PROW" />
        </div>
        <div> <span>©2017. Zielarska Wieś Blanki - All Rights Reserved.</span></div>
        <div>
            < FacebookIcon color="action" style={{ fontSize: 30 }} /><InstagramIcon color="action" style={{ fontSize: 30 }} />
        </div>
    </>
);

export default Footer;