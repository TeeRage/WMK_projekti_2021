import './App.css';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import Menu from './components/Menu'
import Footer from './components/Footer'
import Aloitus from './components/Aloitus'
import Perusasiat from './components/Perusasiat'
import Opas from './components/Opas'

const App = (props) => {

  //Sivun titlen muuttaminen joko saadun propsin mukaiseksi tekstiksi tai tyhjäksi (verkkosivun osoite)
  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  //Sivun näkymät
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/perusasiat">
          <Perusasiat />
        </Route>
        <Route path="/opas">
          <Opas />
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
