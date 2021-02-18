/**
 * Sivujen alaosassa oleva info-osuus, jossa yhteydenottolomake, sivukartta ja yhteystiedot.
*/

import { FaFacebookF } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Info = () => (

  <div class="container-fluid">

    <div class="row Info-asettelu">

      <div class="col-xs-12 col-sm-6 col-md-4">

        <form class="Info-lomake">
          <hr class="hr-info" />
          <h5 style={{ textAlign: "center" }}><b>Yhteydenottolomake</b></h5>
          <hr class="hr-info" />

          <div class="form-group">
            <label for="infoFormControlInput1">Sähköpostiosoite</label>
            <input type="email" class="form-control" id="infoFormControlInput1" placeholder="nimi@esimerkki.com" />
          </div>
          <div class="form-group">
            <label for="infoFormControlSelect1">Yhteydenoton syy</label>
            <select class="form-control" id="infoFormControlSelect1">
              <option>Yhteydenottopyyntö</option>
              <option>Haluan antaa palautta</option>
              <option>Muu syy</option>
            </select>
          </div>
          <div class="form-group">
            <label for="infoFormControlTextarea1">Vapaa sana</label>
            <textarea class="form-control" id="infoFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group row" className="text-right">
            <button type="submit" class="btn btn-primary">Lähetä</button>
          </div>
        </form>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="Info-tekstit">
          <hr class="hr-info" />
          <h5><b>Sivukartta</b></h5>
          <hr class="hr-info" />
          <p><a class="sivukartta-linkki" href="/">Aloitussivu</a></p>
          <p><a class="sivukartta-linkki" href="/perusasiat">Perusasiat</a></p>
          <p><a class="sivukartta-linkki" href="/maalit_ja_tyokalut">Maalit ja työkalut</a></p>
          <p><a class="sivukartta-linkki" href="/maalaustekniikat">Maalaustekniikat</a></p>
          <p><a class="sivukartta-linkki" href="/maalausopas">Maalausopas</a></p>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="Info-tekstit">
          <hr class="hr-info" />
          <h5><b>Yhteystiedot</b></h5>
          <hr class="hr-info" />

          <p>Puhelin: 040 123 456 789</p>
          <p>Sähköposti: email@myemail.com</p>
          <p>Katuosoite 123</p>
          <p>70150 Kuopio</p>
          <p>Suomi</p>
          <div class="col-12">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutubeSquare /></a>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><FaTwitterSquare /></a>
          </div>
        </div>
      </div>

    </div>
  </div>
)

export default Info;