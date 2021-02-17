/**
 *Alisivujen lyhyt esittely korttien avulla.
 Korteista linkki esitellylle alisivulle.
*/

import kuva_perusasiat from "../images/tyopoyta.jpg";
import kuva_maalaustekniikat from "../images/fig_squidmar_valmis.png";
import kuva_maalit_ja_tyokalut from "../images/paints-Pots-vs-Droppers.jpg";
import kuva_maalausopas from "../images/Death-Wing-unpainted.jpg";

const Alisivujen_esittely = () => (

  <div class="container-fluid">

    <div class="row Aloitussivu-alisivut">

      <div class="col-12">
        <h4>Tutustu sivuston sisältöön</h4>
      </div>

      <div class="container-fluid">
        <div class="row">

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <div class="card Alisivujen-esittelykortti">
              <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_perusasiat} />
              <div class="card-doby">
                <h4 class="card-title">Perusasiat</h4>
                <p class="card-text">
                  Tietoa perusasioista, jotka jokaisen <br/> figumaalarin olisi hyvä tietää.
                </p>
                <a class="btn btn-dark Alisivujen-esittelykortti-button" href="/perusasiat">Siirry sivulle</a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <div class="card Alisivujen-esittelykortti">
              <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalaustekniikat} />
              <div class="card-doby">
                <h4 class="card-title">Maalaustekniikat</h4>
                <p class="card-text">
                  Ohjeita erilaisten maalaistekniikoiden käyttämiseen.
                </p>
                <a class="btn btn-dark Alisivujen-esittelykortti-button" href="/maalaustekniikat">Siirry sivulle</a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <div class="card Alisivujen-esittelykortti">
              <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalit_ja_tyokalut} />
              <div class="card-doby testi">
                <h4 class="card-title">Maalit ja työkalut</h4>
                <p class="card-text">
                  Tietoa maaleista ja työkaluista
                </p>
                <a class="btn btn-dark Alisivujen-esittelykortti-button" href="/maalit_ja_tyokalut">Siirry sivulle</a>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
            <div class="card Alisivujen-esittelykortti">
              <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalausopas} />
              <div class="card-doby">
                <h4 class="card-title">Maalausopas</h4>
                <p class="card-text">
                  Seuraa ohjetta askel askeleelta ja maalaa ensimmäinen miniatyyrifiguurisi.
                </p>
                <a class="btn btn-dark Alisivujen-esittelykortti-button" href="/maalausopas">Siirry sivulle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Alisivujen_esittely;