/**
 * Opassivun näkymä
*/

import kuva_sudit from "../images/sudit.jpg";
import kuva_maalit from "../images/paints-Pots-vs-Droppers.jpg";
import kuva_maalaamattomat from "../images/Death-Wing-unpainted.jpg";

import kuva_askarteluveitsi from "../images/askarteluveitsi.jpg";
import kuva_sivuleikkuri from "../images/sivuleikkuri.jpg";

const Maalausopas = () => (
    <div class="container-fluid px-0">
        <div class="row Maalausopas-tausta">

            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2">
                <nav id="navbar-maalausopas-id" class="navbar">
                    <nav class="nav nav-pills flex-column nav-pills-maalausopas">
                        <a class="navbar-brand navbar-brand-maalausopas" href="/maalausopas">Maalausopas</a>
                        <a class="nav-link" href="/maalausopas#item-1">Vaihe 1: Tarvittavat työkalut</a>
                        <a class="nav-link" href="/maalausopas#item-2">Vaihe 2: Miniatyyrin kokoaminen</a>
                        <nav class="nav nav-pills flex-column nav-pills-maalausopas">
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-2-1">2.1 Osien irroittaminen</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-2-2">2.2 Saumojen hiominen</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-2-3">2.3 Osien liimaaminen</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-2-4">2.4 Kolojen täyttäminen</a>
                        </nav>
                        <a class="nav-link" href="/maalausopas#item-3">Vaihe 3: Maalaaminen</a>
                        <nav class="nav nav-pills flex-column nav-pills-maalausopas">
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-3-1">3.1 Värien valitseminen</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-3-2">3.2 Priming</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-3-3">3.3 Basecoating</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-3-4">3.4 Shading</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-3-5">3.5 Highlighting</a>
                        </nav>
                        <a class="nav-link" href="/maalausopas#item-4">Vaihe 4: Alusta</a>
                        <nav class="nav nav-pills flex-column nav-pills-maalausopas">
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-4-1">Item 4-1</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-4-2">Item 4-2</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-4-3">Item 4-3</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-4-4">Item 4-4</a>
                        </nav>
                        <a class="nav-link" href="/maalausopas#item-5">Vaihe 5: Suojaaminen</a>
                        <nav class="nav nav-pills flex-column nav-pills-maalausopas">
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-5-1">Item 5-1</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-5-2">Item 5-2</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-5-3">Item 5-3</a>
                            <a class="nav-link ml-3 my-1" href="/maalausopas#item-5-4">Item 5-4</a>
                        </nav>
                    </nav>
                </nav>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-9 col-lg-10 Maalausopas-sisalto">

                <div data-spy="scroll" data-target="#navbar-maalausopas-id" data-offset="0">

                    <div class="Maalausopas-otsikko">
                        <h4>Esisanat</h4>
                        <p> Olet hankkinut ensimmäisen figusi ja haluat saada sen maalattua, mutta et tiedä mistä aloittaisit? <br />
                            Ei hätää, tämä opsas johdattaa sinut läpi koko maalausprosessin aina miniatyyrin kokoamisesta sen pelikuntoon saattamiseen asti!
                        </p>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h4 id="item-1">Vaihe 1: Tarvittavat työkalut</h4>
                            <p>Tulet mitä todennäköisimmin tarvitsemaan erilaisia työkaluja miniatyyrisi maalaamiseen.
                            Työkalut on jaettu valmisteluvaiheen työkaluihin ja varsinaisen maalausvaiheen työkaluihin.
                            Erilaisia työkaluja löytyy helposti usein askarteluliikkeistä tai verkkokaupasta joka myy figumaalauskeen liittyviä tarvikkeita.

                            <br /><br />
                                <p>Valmisteluvaihe:</p>
                                <ul>
                                    <li>Sivuleikkurit</li>
                                    <li>Askarteluveitsi</li>
                                    <li>Pikaliimaa</li>
                                    <li>Pieni metalliviila tai hiomapaperia</li>
                                    <li>Puttyä, esim. Milliput tai Green Stuff</li>
                                    <li>Putting tool (puttyn muotoiluun)</li>
                                </ul>

                                <p>Maalausvaihe:</p>
                                <ul>
                                    <li>Maalaussivellin</li>
                                    <li>Maalit</li>
                                    <li>Jokin palikka mihin voit kiinnittää figun</li>
                                    <li>Pohjan materiaaliksi esim. hiekkaa ja askarteluliimaa</li>
                                    <li>Lakka</li>
                                </ul>
                            </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">
                            <img src={kuva_sudit} class="img-fluid" className="Kuva_maalausopas" alt="kuva_opas_1" />
                        </div>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h4 id="item-2">Vaihe 2: Figun kokoaminen</h4>
                            <p>
                                Vaikka tämä vaihe voikin tuntua tylsältä, on erittäin tärkeää tehdä kokoaminen ja figun siistiminen huolella.
                                Kaikissa miniatyyrifiguureissa on aina valujäljet, eli saumat, jotka usein näkyvät maalausjäljen läpi ikävästi.
                                Joskus myös figun osat eivät mene ihan täysin yhteen, jolloin erilaisia koloja joudutaan paikkailemaan tai vaihtoehtoisesti ylimääräistä
                                ainesta joudutaan poistamaan, jotta osat mahtuvat yhteen. Tällöin ei auta muuta kuin hioa ja veistää figua parhaan osaamisensa mukaan uusiksi siten, ettei virhettä huomaa.
                        </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">
                            <img src={kuva_maalaamattomat} class="img-fluid" className="Kuva_maalausopas" alt="kuva_opas_2" />
                        </div>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h5 id="item-2-1">2.1 Osien irroittaminen</h5>
                            <p>
                                Muoviset figut ovat yleensä pieninä osasina kiinni "levyssä", josta ne täytyy irroittaa leikkuuteräisillä pihdeillä,
                                esimerkiksi pienet sivuleikkurit sopivat tähän tarkoitukseen loistavasti!
                            </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">
                            <img src={kuva_sivuleikkuri} class="img-fluid" className="Kuva_maalausopas" alt="kuva_opas_2.1" />
                        </div>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h5 id="item-2-2">2.2 Saumojen hiominen</h5>
                            <p>
                                Valujälkiä on yleensä eniten metallisissa figuissa ja ne ovat usein vaikeimmat poistaa.
                                Riippuen figuurin materiaalista, työkalu on joko metallille sopivan viila tai terävä paperiveitsi, jolla saumat pystyy
                                vuolemaan irti muovisesta figusta.
                            </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">
                            <img src={kuva_askarteluveitsi} class="img-fluid" className="Kuva_maalausopas" alt="kuva_opas_2.2" />
                        </div>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h5 id="item-2-3">2.3 Osien liimaaminen yhteen</h5>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">

                        </div>
                    </div>

                    <hr class="hr-jakaja" />

                    <div class="row Maalausopas-kappale">
                        <div class="col-9">
                            <h5 id="item-2-4">2.4 Kolojen täyttäminen</h5>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div class="col-3 div-maalausopas-kuva">
                            <img src={kuva_maalit} class="img-fluid" className="Kuva_maalausopas" alt="kuva_opas_2.4" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
)

export default Maalausopas;