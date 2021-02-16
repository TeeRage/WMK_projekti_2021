import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Navbar from './components/Navbar'
import Aloitus from './components/Aloitus'
import Alisivujen_esittely from './components/Alisivujen_esittely'
import Perusasiat from './components/Perusasiat'
import Maalausopas from './components/Maalausopas'
import Maalaustekniikat from './components/Maalaustekniikat'
import Maalit_ja_tyokalut from './components/Maalit_ja_tyokalut'
import Info from './components/Info'
import Footer from './components/Footer'

const App = (props) => {

  //Sivun titlen muuttaminen joko saadun propsin mukaiseksi tekstiksi tai tyhjäksi (verkkosivun osoite)
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  //Sivun näkymät
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/perusasiat">
          <Perusasiat/>
        </Route>
        <Route path="/maalausopas">
          <Maalausopas/>
        </Route>
        <Route path="/maalaustekniikat">
          <Maalaustekniikat/>
        </Route>
        <Route path="/maalit_ja_tyokalut">
          <Maalit_ja_tyokalut/>
        </Route>
        <Route path="/">
          <Aloitus/>
          <Alisivujen_esittely/>
        </Route>
      </Switch>
      <Info/>
      <Footer/>
    </Router>
  )
}

export default App;
