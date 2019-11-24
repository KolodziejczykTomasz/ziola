import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Slide from '../../component/Slide/Slide';
import Footer from '../../component/Footer/Footer';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Root extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Slide />
          <Footer />
        </div>
      </>
    );
  }
};

export default Root;
