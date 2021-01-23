import React, { Component } from "react";
import Home from "./pages/home";
import Personnages from "./pages/personnage";
import Créateurs from "./pages/createur";

/* import Router */
import {Switch, Route} from "react-router-dom";



class App extends Component {

  render() {
    return (
      <div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personnages"  component={Personnages} />
          <Route path="/createurs"  component={Créateurs} />
        </Switch>

      </div>
    );
  }
}

export default App;