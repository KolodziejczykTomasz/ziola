import React from "react";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

import GalleryHerbs from "../../component/Gallery/GalleryHerbs";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListHerbs = () => (
  <>
    <Header />
    <h1>Galeria</h1>
    <h3>Zioła</h3>
    <GalleryHerbs />
    <ScrollUpButton />
    <Footer />
  </>
);

export default GalleryListHerbs;
