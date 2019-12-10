import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";


class Government extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  
render() {

  const { activeIndex } = this.state
return (
<>
    <Header />

    <div>
      {" "}
      <h3>Zarząd</h3>
    </div>
    <br />
    <br />
    <table class="table table-hover">
      <tr>
        <td>Wiącek Jolanta</td> <td>Prezes</td>
      </tr>
      <tr>
        <td>Aramowicz Elwira</td> <td>Z-ca Prezesa</td>
      </tr>
      <tr>
        <td>Lipska Urszula</td> <td>Skarbnik</td>
      </tr>
      <tr>
        <td>Magun Iwona</td> <td>Sekretarz</td>
      </tr>
      <tr>
        <td>Wiącek Grzegorz</td> <td>Członek Zarządu</td>
      </tr>
    </table>

    <div>
      <h3>Komisja Rewizyjna</h3>
    </div>

    <table class="table table-hover">
      <tr>
        <td>Plaskota Iwona</td>
      </tr>
      <tr>
        <td>Pacanowska Anna</td>
      </tr>
      <tr>
        <td>Łozowski Dariusz</td>
      </tr>
    </table>
<div>
<Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          CEL STOWARZYSZENIA
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <p>Celem stowarzyszenia jest:
<ul>
<li> rozwój edukacyjny, kulturowy i materialny dzieci i młodzieży terenów wiejskich gminy Lidzbark Warmiński;</li>
<li> wzbogacanie osobowości i integracja mieszkańców;</li>
<li> działania na rzecz zwiększania szans życiowych mieszkańców wsi, zwłaszcza młodych ludzi;</li>
<li> promocja aktywnego trybu życia, sportu i turystyki;</li>
<li> kształtowanie postaw odpowiedzialności za wspólne przedsięwzięcia;</li>
<li> ochrona środowiska i zasobów naturalnych, edukacja ekologiczna, promocja zdrowej żywności;</li>
<li> kreowanie i rozwój produktów regionalnych, kultywowanie tradycji regionalnych;</li>
<li> przeciwdziałanie przemocy w środowisku wiejskim, nietolerancji i patologiom społecznym;</li>
<li> działania na rzecz promocji wsi i okolic;</li>
<li> rozwój turystyki aktywnej i tworzenie zintegrowanego produktu turystycznego;</li>
<li> współpraca z instytucjami i organizacjami pozarządowymi krajów Unii Europejskiej.</li>
</ul></p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          STATUT STOWARZYSZENIA
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <a href="upload/statut.pdf" >Statut</a>
        </Accordion.Content>

        
     
      </Accordion>
</div>





    

    <Footer />
  </>

  )
  
}
  
}

export default Government;
