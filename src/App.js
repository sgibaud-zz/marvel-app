import React, { Component } from "react";
import Home from "./pages/home";
import Personnages from "./pages/personnage";
import Comics from './pages/comics';
import DetailsCharacter from './pages/detailsCharacter';
import DetailsComics from './pages/detailsComics';

/* import Router */
import { Route, Switch } from "react-router-dom";



class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personnages" component={Personnages} />
          <Route path='/comics' component={Comics} />
          <Route path='/detailsCharacter' component={DetailsCharacter} />
          <Route path='/detailsComics' component={DetailsComics} />          
        </Switch>
      </div>
    );
  }
}

export default App;