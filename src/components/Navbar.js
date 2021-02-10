/*
 * Navigointipalkki, joka sisältää navigointiin tarkoitetut linkit alisivuille.
*/

const Navbar = () => {

    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand">Tähän logo tai sijainti</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class = "nav-item active">
                <a class="nav-link" href="/">Aloitussivu</a>
              </li>
              <li class = "nav-item">
                <a class="nav-link" href="/perusasiat">Perusasiat</a>
              </li>
              <li class = "nav-item">
                <a class="nav-link" href="/maalausopas">Maalausopas</a>
              </li>
              <li class = "nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/maalit_ja_tyokalut">Maalit ja työkalut</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar;