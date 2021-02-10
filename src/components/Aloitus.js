/**
 * Aloitussivun näkymä. 
 * Sivulla sivuston ja alisivujen lyhyt esittely.
*/

const Aloitus = () => (

  <div class="container-fluid px-0">
    <div class="row welcome text-center" className="App-tervetuloa">
      <div class="col-12">
        <h1 class="display-4">Tervetuloa</h1>
      </div>
      <hr>
      </hr>
      <div class="col-6">
        <p class="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
        </p>
      </div>
    </div>

    <div class="row" className="App-sisalto">
      <h2>Tähän tulee alisivujen esittelyt</h2>
      <div class="row">
        <div class="col-sm-4 col-md-3">Sivu 1</div>
        <div class="col-sm-4 col-md-3">Sivu 2</div>
        <div class="col-sm-4 col-md-3">Sivu 3</div>
        <div class="col-sm-4 col-md-3">Sivu 4</div>
      </div>
    </div>

  </div>
)

export default Aloitus;