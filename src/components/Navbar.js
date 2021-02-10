/*
 * Navigointipalkki, joka sisältää navigointiin tarkoitetut linkit.
*/

import { Link } from "react-router-dom"

const Navbar = () => {

    const padding = {
      paddingRight: 5
    }

    return (

      <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Tähän logo tai sijainti</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class = "nav-item active">
                <a class="nav-link" href="#">Aloitussivu</a>
              </li>
              <li class = "nav-item">
                <a class="nav-link" href="#">Perusasiat</a>
              </li>
              <li class = "nav-item">
                <a class="nav-link" href="#">Maalausopas</a>
              </li>
              <li class = "nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#">Maalit ja työkalut</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      /*
      <div>
        <Link style={padding} to="/">aloitussivu</Link>
        <Link style={padding} to="/perusasiat">perusasiat</Link>
        <Link style={padding} to="/opas">opas</Link>
      </div>*/
    )
  }

export default Navbar;