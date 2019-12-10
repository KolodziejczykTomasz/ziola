import React from "react";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

import GalleryProduct from "../../component/Gallery/GalleryProduct";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListProduct = () => (
  <>
    <Header />
    <h1>Galeria</h1>
    <h2>Produkty</h2>
    <GalleryProduct />
    <ScrollUpButton />
    <Footer />
  </>
);

export default GalleryListProduct;
