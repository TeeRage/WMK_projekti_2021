/**
 * Aloitussivun näkymä
*/
import logo from '../logo.svg';

const Aloitus = () => (
    <div class="container" className="App">
        <header className="App-header">
        <p>Tästä tulee <code>todella</code> hieno webbisivu.</p>
        <img src={logo} className="App-logo" alt="logo" />

        <em>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</em>

        <p>Tältä sivustolta saat parhaat vinkit miniatyyriesi maalaamiseen!</p>
        </header>
    </div >
)

export default Aloitus;