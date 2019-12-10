import React from "react";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

import GalleryGarden from "../../component/Gallery/GalleryGarden";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListGarden = () => (
  <>
    <Header />
    <h1>Galeria</h1>
    <h2>Ogródek</h2>
    <GalleryGarden />
    <ScrollUpButton />
    <Footer />
  </>
);

export default GalleryListGarden;
