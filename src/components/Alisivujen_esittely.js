/**
 *Alisivujen lyhyt esittely korttien avulla.
 Korteista linkki esitellylle alisivulle.
*/

import kuva_perusasiat from "../images/tyopoyta.jpg";
import kuva_maalausopas from "../images/Death-Wing-unpainted.jpg";
import kuva_maalit_ja_tyokalut from "../images/paints.png";

const Alisivujen_esittely = () => (

  <div class="container-fluid">

    <div class="row Aloitussivu-alisivut">
      <div class="col-12">
        <h3>Tutustu sivuston sisältöön</h3>        
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card Alisivujen-esittelykortti">
          <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_perusasiat} />
          <div class="card-doby">
            <h4 class="card-title">Perusasiat</h4>
            <p class="card-text">
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              </p>
            <a class="btn btn-outline-secondary" href="/perusasiat">Siirry sivulle</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card Alisivujen-esittelykortti">
          <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalausopas} />
          <div class="card-doby">
            <h4 class="card-title">Maalausopas</h4>
            <p class="card-text">
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              </p>
            <a class="btn btn-outline-secondary" href="/maalausopas">Siirry sivulle</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card Alisivujen-esittelykortti">
          <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalit_ja_tyokalut} />
          <div class="card-doby">
            <h4 class="card-title">Maalit ja työkalut</h4>
            <p class="card-text">
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              </p>
            <a class="btn btn-outline-secondary" href="/maalit_ja_tyokalut">Siirry sivulle</a>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default Alisivujen_esittely;