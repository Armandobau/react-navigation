import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Main.sass';
import Home from '../Home/Home';
import Todos from '../Todos/Todos';
import Favoritos from '../Favoritos/Favoritos';
import NoMatch from '../NoMatch/NoMatch';

class Main extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Todos" component={ Todos }/>
                <Route path="/Favoritos" component={ Favoritos }/>
                <Route component={ NoMatch }/>
            </Switch>
        </div>
    );
  }
}

export default Main;
