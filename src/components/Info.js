/**
 * Sivujen alaosassa oleva info-osuus, jossa yhteydenottolomake, sivukartta ja yhteystiedot.
*/
const Info = () => (
  <div class="container-fluid padding" className="Info-sisalto">
    <div class="row text-center padding">

      <div class="col-xs-12 col-sm-6 col-md-4">
        <h4>Yhteydenottolomake</h4>
        <form>
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
            <div class="col-xs-8 col-sm-12 col-md-12">
              <button type="submit" class="btn btn-primary">Lähetä</button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <h4>Sivukartta</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4">
        <h4>Yhteystiedot</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  </div>
)

export default Info;