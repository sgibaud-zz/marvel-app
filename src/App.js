import React, { Component } from "react";
import Home from "./pages/home";
import Personnages from "./pages/personnage";
import Créateurs from "./pages/createur";

/* import Router */
import {BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {

  render() {
    return (
      <div>

        <Router>
          <Route path="/home" component={Home} />
          <Route path="/personnages" exact component={Personnages} />
          <Route path="/createurs" exact component={Créateurs} />
        </Router>

      </div>
    );
  }
}

export default App;