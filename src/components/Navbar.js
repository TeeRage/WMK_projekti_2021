/*
 * Navigointipalkki, joka sisältää navigointiin tarkoitetut linkit alisivuille.
 bg-primary bg-light bg-dark bg-info
*/

const Navbar = () => {

  return (

    <nav class="navbar navbar-expand-md navbar-dark sticky-top">

      <a class="navbar-brand" href="/">Tean figumaalausopas</a>

      <button 
        class="navbar-toggler"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Aloitussivu
                <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/perusasiat"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Perusasiat
                </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/perusasiat#perusasia1">Perusasia 1</a>
              <a class="dropdown-item" href="/perusasiat#perusasia2">Perusasia 2</a>
              <a class="dropdown-item" href="/perusasiat#perusasia3">Perusasia 3</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/maalausopas"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Maalausopas
                </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/maalausopas">Info</a>
              <a class="dropdown-item" href="/maalausopas#vaihe1">Vaihe 1</a>
              <a class="dropdown-item" href="/maalausopas#vaihe2">Vaihe 2</a>
              <a class="dropdown-item" href="/maalausopas#vaihe3">Vaihe 3</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/maalit_ja_tyokalut"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Maalit ja työkalut
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/maalit_ja_tyokalut">Info</a>
              <a class="dropdown-item" href="/maalit_ja_tyokalut#v-pills-profile">Maalit</a>
              <a class="dropdown-item" href="/maalit_ja_tyokalut#v-pills-messages" aria-selected="true">Työkalut</a>
              <a class="dropdown-item" href="/maalit_ja_tyokalut#v-pills-settings">Plööf</a>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;