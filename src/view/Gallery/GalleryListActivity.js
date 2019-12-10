import React from "react";
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

import GalleryActivity from "../../component/Gallery/GalleryActivity";
import ScrollUpButton from "react-scroll-up-button";

const GalleryListActivity = () => (
  <>
    <Header />
    <h1>Galeria</h1>
    <h2>Działalność</h2>
    <GalleryActivity />
    <ScrollUpButton />
    <Footer />
  </>
);

export default GalleryListActivity;
