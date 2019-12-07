import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const Government = () => (
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

    <p class="text-center">
      <a href="/dzialalnosc.html">CEL STOWARZYSZENIA</a>
    </p>

    <p class="text-center">
      <a href="upload/statut.pdf">STATUT STOWARZYSZENIA</a>
    </p>

    <Footer />
  </>
);

export default Government;
