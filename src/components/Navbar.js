/**
 * Navigointipalkki, joka sisältää navigointiin tarkoitetut linkit.
*/

import { Link } from "react-router-dom"

const Navbar = () => {

    const padding = {
      paddingRight: 5
    }

    return (
      <div>
        <Link style={padding} to="/">aloitussivu</Link>
        <Link style={padding} to="/perusasiat">perusasiat</Link>
        <Link style={padding} to="/opas">opas</Link>
      </div>
    )
  }

export default Navbar;