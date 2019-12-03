import React from "react";
import GalleryHerbs from './GalleryHerbs';
import GalleryActivity from './GalleryActivity';
import GalleryProduct from './GalleryProduct';
import GalleryGarden from './GalleryGarden';

const GalleryList = () => (
  <>
   <h1>Galeria</h1>

   <h3>Zioła</h3>
   <GalleryHerbs />

   <h2>Produkty</h2>
   <GalleryProduct />

   <h2>Działalność</h2>
   <GalleryActivity />

   <h2>Ogródek</h2>
   <GalleryGarden />
  </>
);


export default GalleryList;
