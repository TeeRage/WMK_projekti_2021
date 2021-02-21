/**
 * Perusasioiden näkymä
*/

import kuva_sudit from "../images/sudit.jpg";
import kuva_maalit from "../images/paints-Pots-vs-Droppers.jpg";
import kuva_sotku from "../images/mess.jpg";

const Perusasiat = () => (

    <div class="container-fluid padding">

        <div class="row padding Perusasiat-asettelu"  id="perusasia1">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
                <h3>Minkälaisesta figuurista aloittaa?</h3>
                <p>
                    Miniatyyrejä valmistavat useat eri yritykset, jotka myyvät miniatyyrejään myös Internetin välityksellä.
                    Suomessa yleisimmin saatavilla olevat fantasiaminiatyyrit lienevät Games Workshopin Warhammer-pelien miniatyyrit, jotka on luotu vartavasten Warhammer-pelien pelaamiseen.
                    Vaikka kyseiset miniatyyrit on luotu esittämään armeijan eri yksiköitä, ovat useat niistä hienoja itsenäisinäkin miniatyyreinä. 
                    Lisäksi eri armeijoiden kautta miniatyyreissä on vaihtelua. Itse olen erityisen mieltynyt kääpiöarmeijaan, 
                    jonka joukko-osastoissa on koomisiakin yksityiskohtia kuten juopuneet kääpiöt, jotka tyhjä kolpakko kädessään nojailevat sotakirveisiinsä.
                    <br/> <br/> 
                    Games Workshop valmistaa myös Lord of the Rings -miniatyyrejä, joihin myös liittyy oma pelinsä. Miniatyyrien joukossa on useita eri versioita 
                    esim. Boromirista ja hobiteista, joista Tolkien-fani saattaisi innostua ilman pelin pelaamistakin.
                    Ei-pelaavalle miniatyyrimaalaajalle inspiroivimmat figut löytyvät kuitenkin pienempien figuvalmistajien kokoelmista netistä joko uusina tai käytettyinä. 
                    Netissä on useita sivustoja, jotka ovat koonneet useiden eri valmistajien ja yksityishenkilöiden itse valmistamia figuja yhteen paikkaan myytäväksi. 
                    Ja tietysti figuja voi tehdä itse joko täysin alusta asti tai muokkaamalla valmiista figuista mieleisiään 
                    joko valmistamalla niille itse uusia osia tai ottamalla jonkin toisen figun osan ja siirtämällä sen toiseen figuun.
                    <br/> <br/> 
                    Figujen hinnat vaihtelevat paljon, mutta minun mielestäni sellainen kiva kohtuuhinta yhdelle figulle on suunnilleen 10 euron luokkaa. 
                    Halvimmillaan figuja saa ostamalla esimerkiksi Warhammerin aloituspaketin, jossa on suunnilleen sata figua ja hintaa noin 60 euroa. 
                    Paketissa tulee kaksi pelikelpoista perusarmeijaa, joten mitään erityisen hienoa ei paketista löydy, 
                    mutta onneksi Games Workshop on panostanut myös perussolttujen muotoiluun, joten aivan yksitoikkoiseksi niiden maalaaminen ei käy.
                    Toisaalta yksittäisestä Warhammerin erikoisyksikön figusta saa pulittaa 40 euroa. 
                    Puhumattakaan jonkun figutaiteilijan luomasta “pienipainoksisesta” figusta, joka voi maksaa satasen ja ylikin.
                    Figun valinnassa oleellista on kuitenkin se, että valitsee figun, josta pitää. 
                    Jos figu ei miellytä, ei siihen jaksa panostaa niitä useita tunteja, joita sen maalaamiseen kuluu.
                    Figujen materiaali ei juurikaan vaikuta figujen hintaan, sillä suurin osa figujen kuluista menee kuitenkin niiden tekemiseen ja esimerkiksi markkinointiin.
                </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_maalit} class="Kuva_perusasiat" />
            </div>
        </div>

        <hr class="hr-jakaja" />

        <div class="row padding Perusasiat-asettelu" id="perusasia2">

            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
            <h3>Maalien ohentaminen</h3>
                <p> Ennen kuin aloitat maalaamaan, on hyvä testata millainen on oma maalausjälkesi. 
                    Mitä enemmän kokeilet, sitä helpommin huomaat, että jokainen siveltimen vetosi saattaa olla erilainen, vaikka pyrkisit tekemään aina samanlaista jälkeä.   
                    <br/> <br/> 
                    Testataksesi omaa "käsialaasi", voit ottaa minkä vain maalin sekä siveltimen ja aloittaa maalaamalla tasaisen viivan esimerkiksi paperille.
                    Jos maali on paksua, jälki on peittävää, mutta se päättyy pian. Tällainen koostumus peittää usein alleen miniatyyrin yksityiskohdat.
                    Jos ohennat maalia esimerkiksi vedellä liikaa, maalijälki on pitkä, mutta se ei ole peittävä. Tällainen koostumus usein vain menee miniatyyrin rakoihin eikä tartu miniatyyrin pintaan kunnolla.
                    Toivottu maalin koostumus onkin jotakin näiden kahden edellä mainitun välistä: maalin on tarkoitus tarttua hyvin ja antaa väriä, mutta ei muodostaa liian paksua kerrosta, joka peittäisi figun muotoa.                     
                </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_sudit} class="img-fluid" className="Kuva_perusasiat" alt="kuva_sudit" />
            </div>
        </div>

        <hr class="hr-jakaja" />
        
        <div class="row padding Perusasiat-asettelu" id="perusasia3">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 Perusasiat_teksti">
                <h3>Sivellin</h3>
                <p>
                    Kun lisäät maalia siveltimeesi, sinun tulisi varoa, ettei maalia pääse siveltimen tuppeen (se osa, josta harjakset lähtevät).
                    Sivellintä koskaan 1/3 harjasten mittaa syvemmälle maaliin, koska maali pilaa harjasten liimauksen ja siveltimen harjakset alkavat sojottaa minne sattuu.
                    <br/> <br/> 
                    Yleensä maalia halutaan lisätä vain sen verran, että siveltimen kärki sisältää riittävän määrän maalia.
                    Tämän vuoksi siveltimien tulisi olla myös riittävän isoja, jotta niiden "load capasity" eli imukyky olisi riittävä eikä maali pääse kuivumaan siveltimeen.
                    <br/> <br/> 
                    Maalatessa on myös hyvä pitää vesikuppia lähellä, jotta siveltimen pystyy huuhtelemaan nopeasti maalauksen ohella.
                    Sivellintä ei kuitenkaan saisi koskaan jättää vesikuppiin, koska tämäkin tapa pilaa siveltimen kuin siveltimen todella nopeasti.
                    Oikeaoppinen säilytys onkin vaakatasossa, itse suosin talouspaperia jonka päälle jätän siveltimeni puhdistuksen jälkeen.
                </p>
            </div>     
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 Perusasiat_kuva-div">
                <img src={kuva_sotku} class="img-fluid" className="Kuva_perusasiat" alt="kuva_sudit" />
            </div>
        </div>
        
    </div >
)

export default Perusasiat;