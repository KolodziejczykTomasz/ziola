import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';



import Activity from '../Club/Activity';
import Club from '../Club/Club';
import Government from '../Club/Government';
import History from '../Club/History';
import Herbs from '../Herbs/Herbs';
import Garden from '../Herbs/Garden';
import Recipes from '../Herbs/Recipes';
import About from '../About';
import Contact from '../Contact';
import Education from '../Education';
import Flat from '../Flat';
import Gallery from '../Gallery';


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Root extends Component {
  render() {
    return (
      <>  
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/club" component={Club} />
            <Route path="/activity" component={Activity} />
            <Route path="/government" component={Government} />
            <Route path="/history" component={History} />
            <Route path="/herbs" component={Herbs} />
            <Route path="/garden" component={Garden} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/flat" component={Flat} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
};

export default Root;
