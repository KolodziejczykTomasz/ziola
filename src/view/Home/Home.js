import React from "react";
import { Grid } from "semantic-ui-react";

import Header from "../../component/Header/Header";
import Slide from "../../component/Slide/Slide";
import Footer from "../../component/Footer/Footer";
import List from "../../component/HomeList/List";
import Homeaside from "../../component/Homeaside/Homeaside";

import "semantic-ui-css/semantic.min.css";

const Home = () => (
  <>
    <Header />
    <Slide />
    <Grid>
      <Grid.Column width={12}>
        <Grid.Row>
          <List />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4}>
        <Homeaside />
      </Grid.Column>
    </Grid>

    <Footer />
  </>
);

export default Home;
