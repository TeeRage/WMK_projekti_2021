/**
 * Perusasioiden näkymä
*/

import kuva from "../images/sudit.jpg";

const Perusasiat = () => (
    <div class="container" className="App">
        <header className="App-header">

            <p>Tällä sivulla tulee olemaan tietoa perusasioista</p>
            <img src={kuva} className="Kuva_aloitus" alt="kuva_aloitussivu" />
            
        </header>
    </div >
)

export default Perusasiat;