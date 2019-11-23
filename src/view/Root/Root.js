import React, { Component } from 'react';
import Header from '../../component/Header/Header';
import Fotter from '../../component/Footer/Fotter';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Root extends Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <Fotter />
        </div>
      </>
    );
  }
};

export default Root;
