/**
 * Perusasioiden näkymä
*/

import kuva_sudit from "../images/sudit.jpg";
import kuva_maalit from "../images/paints-Pots-vs-Droppers.jpg";
import kuva_sotku from "../images/mess.jpg";

const Perusasiat = () => (

    <div class="container-fluid padding">

        <div class="row padding Perusasiat-asettelu"  id="perusasia1">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
                <h3>Perusasia 1</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_maalit} class="Kuva_perusasiat" />
            </div>
        </div>

        <hr class="hr-jakaja" />

        <div class="row padding Perusasiat-asettelu" id="perusasia2">

            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
                <h3>Perusasia 2</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_sudit} class="img-fluid" className="Kuva_perusasiat" alt="kuva_sudit" />
            </div>
        </div>

        <hr class="hr-jakaja" />
        
        <div class="row padding Perusasiat-asettelu" id="perusasia3">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
                <h3>Perusasia 3</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                </p>
            </div>     
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_sotku} class="img-fluid" className="Kuva_perusasiat" alt="kuva_sudit" />
            </div>
        </div>
        
    </div >
)

export default Perusasiat;