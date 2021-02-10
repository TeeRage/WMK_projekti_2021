import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aloitus from './components/Aloitus'
import Perusasiat from './components/Perusasiat'
import Maalausopas from './components/Maalausopas'
import Maalit_ja_tyokalut from './components/Maalit_ja_tyokalut'

const App = (props) => {

  //Sivun titlen muuttaminen joko saadun propsin mukaiseksi tekstiksi tai tyhjäksi (verkkosivun osoite)
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  //Sivun näkymät
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/perusasiat">
          <Perusasiat />
        </Route>
        <Route path="/maalausopas">
          <Maalausopas />
        </Route>
        <Route path="/maalit_ja_tyokalut">
          <Maalit_ja_tyokalut/>
        </Route>
        <Route path="/">
          <Aloitus />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
