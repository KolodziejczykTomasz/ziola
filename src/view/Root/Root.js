import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';

import Activity from '../Club/Activity';
import Government from '../Club/Government';
import History from '../Club/History';
import Herbs from '../Herbs/Herbs';
import Garden from '../Garden/Garden';
import Recipes from '../Herbs/Recipes';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Flat from '../Flat/Flat';
import Gallery from '../Gallery/Gallery';

import GalleryListActivity from '../../view/Gallery/GalleryListActivity';
import GalleryListHerbs from '../../view/Gallery/GalleryListHerbs';
import GalleryListProduct from '../../view/Gallery/GalleryListProduct';
import GalleryListGarden from '../../view/Gallery/GalleryListGarden';

import FlatAramowicz from '../Flat/FlatAramowicz';
import FlatBaranowska from '../Flat/FlatBaranowska';
import FlatKolecka from '../Flat/FlatKolecka';
import FlatGabrys from '../Flat/FlatGabrys';
import FlatLiminowicz from '../Flat/FlatLiminowicz';

import HerbsAronia from '../Herbs/HerbsAronia';
import HerbsBylica from '../Herbs/HerbsBylica';
import HerbsDeren from '../Herbs/HerbsDeren';
import HerbsDziurawiec from '../Herbs/HerbsDziurawiec';
import HerbsLubczyk from '../Herbs/HerbsLubczyk';
import HerbsMelisa from '../Herbs/HerbsMelisa';
import HerbsRokitnik from '../Herbs/HerbsRokitnik';
import HerbsRoza from '../Herbs/HerbsRoza';
import HerbsRozmaryn from '../Herbs/HerbsRozmaryn';
import HerbsRumianek from '../Herbs/HerbsRumianek';
import HerbsStevia from '../Herbs/HerbsStevia';
import HerbsSzalwia from '../Herbs/HerbsSzalwia';
import HerbsWaleriana from '../Herbs/HerbsWaleriana';
import HerbsWiesiolek from '../Herbs/HerbsWiesiolek';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import rodo from '../rodo/rodo';


class Root extends Component {
  render() {
    return (
      <>  
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/activity" component={Activity} />
            <Route path="/government" component={Government} />
            <Route path="/history" component={History} />            
            <Route path="/garden" component={Garden} />
            <Route path="/recipes" component={Recipes} />            
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/herbs" component={Herbs} />
            <Route path="/herbsAronia" component={HerbsAronia} />
            <Route path="/herbsBylica" component={HerbsBylica} />
            <Route path="/herbsDeren" component={HerbsDeren} />
            <Route path="/herbsDziurawiec" component={HerbsDziurawiec} />
            <Route path="/herbsLubczyk" component={HerbsLubczyk} />
            <Route path="/herbsMelisa" component={HerbsMelisa} />
            <Route path="/herbsRokitnik" component={HerbsRokitnik} />
            <Route path="/herbsRoza" component={HerbsRoza} />
            <Route path="/herbsRozmaryn" component={HerbsRozmaryn} />
            <Route path="/herbsRumianek" component={HerbsRumianek} />
            <Route path="/herbsStevia" component={HerbsStevia} />
            <Route path="/herbsSzalwia" component={HerbsSzalwia} />
            <Route path="/herbsWaleriana" component={HerbsWaleriana} />
            <Route path="/herbsWiesiolek" component={HerbsWiesiolek} />

            <Route path="/flat" component={Flat} />
            <Route path="/flatAramowicz" component={FlatAramowicz} />
            <Route path="/flatBaranowska" component={FlatBaranowska} />
            <Route path="/flatKolecka" component={FlatKolecka} />
            <Route path="/flatGabrys" component={FlatGabrys} />
            <Route path="/flatLiminowicz" component={FlatLiminowicz} />

            <Route path="/gallery" component={Gallery} />
            <Route path="/galleryAcitivity" component={GalleryListActivity} />
            <Route path="/galleryHerbs" component={GalleryListHerbs} />
            <Route path="/galleryGarden" component={GalleryListGarden} />
            <Route path="/galleryProduct" component={GalleryListProduct} /> 
            <Route path="/rodo" component={rodo} />    
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};

export default Root;
