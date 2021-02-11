/**
 * Aloitussivun näkymä. 
 * Sivulla sivuston ja alisivujen lyhyt esittely.
*/

import kuva_maalausopas from "../images/fig_unpainted.jpg";
import kuva_maalit_ja_tyokalut from "../images/maalaus.webp";
import kuva_perusasiat from "../images/brushes_blackwhite.jpg";



const Aloitus = () => (

  <div class="container-fluid px-0">
    
    <div class="row welcome text-center" className="App-tervetuloa">
      <div class="col-8">
        <h1 class="display-4">Tervetuloa</h1>
      </div>
      <hr/>      
      <div class="col-8">
        <p class="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        </p>
      </div>
    </div>

    <div class="row" className="App-sisalto">
      <h2>Tähän tulee alisivujen esittelyt</h2>
      <div class="row text-center padding">
        <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
          <h4>Perusasiat</h4>
          <img src={kuva_perusasiat} className="Kuva_pieni" alt="kuva_figut" ></img>
          <p>
            "Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
          <h4>Maalausopas</h4>
          <img src={kuva_maalausopas} className="Kuva_pieni" alt="kuva_figut" ></img>
          <p>
            "Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3" className="Alisivujen-esittely">
          <h4>Maalit ja työkalut</h4>
          <img src={kuva_maalit_ja_tyokalut} className="Kuva_pieni" alt="kuva_figut" ></img>
          <p>
            "Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>

    <hr class="my-4"/>

  </div>
)

export default Aloitus;