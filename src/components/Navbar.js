/*
 * Navigointipalkki, joka sisältää navigointiin tarkoitetut linkit alisivuille.
 bg-primary bg-light bg-dark bg-info
*/

const Navbar = () => {

  return (

    <nav class="navbar navbar-expand-lg navbar-dark sticky-top navbar-main">

      <a class="navbar-brand navbar-brand-main" href="/">Tean figumaalausopas</a>

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

        <ul class="navbar-nav ml-auto navbar-nav-home ">
          
          <li class="nav-item active">
            <a class="nav-link nav-link-home" href="/">
              Aloitussivu
                <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link-home"
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

          <li class="nav-item active">
            <a class="nav-link nav-link-home" href="/maalit_ja_tyokalut">
              Maalit ja työkalut
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link nav-link-home" href="/maalaustekniikat">
              Maalaustekniikat
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item active">
            <a
              class="nav-link nav-link-home"
              href="/maalausopas">
              Maalausopas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;