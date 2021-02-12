/**
 *Alisivujen lyhyt esittely korttien avulla.
 Korteista linkki esitellylle alisivulle.
*/

import kuva_perusasiat from "../images/tyopoyta.jpg";
import kuva_maalausopas from "../images/Death-Wing-unpainted.jpg";
import kuva_maalit_ja_tyokalut from "../images/paints.png";

const Alisivujen_esittely = () => (

  <div class="container-fluid px-0">    
    <div class="row" className="Aloitussivu-alisivut">

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="card Alisivujen-esittelykortti">
            <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_perusasiat}/>
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

        <div class="col-xs-12 col-sm-6 col-md-3">
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

        <div class="col-xs-12 col-sm-6 col-md-3">
          <div class="card Alisivujen-esittelykortti">
            <img class="card-img-top Alisivujen-esittelykortti-kuva" src={kuva_maalit_ja_tyokalut}/>
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
    <hr />
  </div>
)

export default Alisivujen_esittely;


/**
 * className="Aloitussivu-sisalto"
 *      <div class="row text-center padding">
        <a href="/perusasiat">
          <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
            <h4>Perusasiat</h4>
            <img src={kuva_perusasiat} className="Kuva_alisivu" alt="kuva_perusasiat" ></img>
            <p>
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </a>
        <a href="/maalausopas">
          <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
            <h4>Maalausopas</h4>
            <img src={kuva_maalausopas} className="Kuva_alisivu" alt="kuva_maalausopas" ></img>
            <p>
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </a>
        <a href="/maalit_ja_tyokalut">
          <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
            <h4>Maalit ja työkalut</h4>
            <img src={kuva_maalit_ja_tyokalut} className="Kuva_alisivu" alt="kuva_maalit_ja_tyokalut" ></img>
            <p>
              "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </a>
      </div>
 *
 */